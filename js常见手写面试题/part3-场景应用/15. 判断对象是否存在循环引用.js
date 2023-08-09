// 循环引用对象本来没有什么问题，但是序列化的时候就会发生问题，
// 比如调用JSON.stringify()对该类对象进行序列化，
// 就会报错: Converting circular structure to JSON.
