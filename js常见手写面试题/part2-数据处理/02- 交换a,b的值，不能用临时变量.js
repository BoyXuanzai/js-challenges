console.log('巧妙的利用两个数的和、差：');
a = a + b;
b = a - b;   // b = (a+b)-b
a = a - b;   // a=(a+b)-[(a+b)-b]
