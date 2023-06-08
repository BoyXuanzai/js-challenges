function then(onFullFilled, onRejected) {
  let self = this;
  return new MyPromise((resolve, reject) => {
    let fullFilled = () => {
      try {
        const result = onFullFilled(self.value);
        return result instanceof MyPromise
          ? result.then(resolve, reject)
          : resolve(result);
      } catch (error) {
        reject(error);
      }
    };
    let rejected = () => {
      try {
        let result = onRejected(self.reason);
        return result instanceof MyPromise
          ? result.then(resolve,reject)
          : reject(result);
      } catch (error) {
        reject(error);
      }
    };
    switch (self.status) {
      case PRENDING:
        self.fullFilledCallback.push(fullFilled);
        self.rejectedCallback.push(rejected);
        break;
      case FULLFILLED:
        fullFilled();
        break;
      case REJECTE:
        rejected();
        break;
    }
  });
}
