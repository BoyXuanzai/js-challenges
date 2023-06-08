const PRENDING = 'prending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';
function MyPromise(fn) {
  const self = this;
  this.state = PRENDING;
  this.value = null;
  this.resolvedCallback = [];
  this.rejectedCallback = [];
  function resolve(value) {
    if (value instanceof MyPromise) {
      return value.then(resolve, reject);
    }
    setTimeout(() => {
      if (self.value === PRENDING) {
        self.state = RESOLVED;
        self.value = value;
        self.resolvedCallback.forEach((callback) => {
          callback(value);
        });
      }
    }, 0);
  }
  function reject(value) {
    setTimeout(() => {
      if (self.state === PRENDING) {
        self.state = REJECTED;
        self.value = value;
        self.rejectedCallback.forEach((callback) => {
          callback(value);
        });
      }
    }, 0);
  }
  try {
    fn(resolve, reject);
  } catch (err) {
    reject(err);
  }
}

MyPromise.prototype.then = function (onResolved, onRejected) {
  onResolved =
    typeof onResolved === 'function'
      ? onResolved
      : function (value) {
          return value;
        };
  onRejected =
    typeof onRejected === 'function'
      ? onRejected
      : function (err) {
          return err;
        };
  if (this.state === PRENDING) {
    this.resolvedCallback.push(onResolved);
    this.rejectedCallback.push(onRejected);
  }
  if (this.state === RESOLVED) {
    onResolved(this.value);
  }
  if (this.state === REJECTED) {
    onRejected(this.value);
  }
};
