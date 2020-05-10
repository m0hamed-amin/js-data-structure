function karatSuba(x, y) {
  var x1, x0, y1, y0, base, m;
  base = 10;

  if (x < base || y < base) {
    console.log(" X - y = ", x, y, x * y);
    return x * y;
  }

  var xString = x.toString();
  var yString = y.toString();

  var n = xString.length > yString.length ? yString.length : xString.length;
  var m = Math.round(n / 2);

  var high1 = parseInt(xString.substring(0, xString.length - m));
  var low1 = parseInt(xString.substring(xString.length - m, xString.length));

  var high2 = parseInt(yString.substring(0, yString.length - m));
  var low2 = parseInt(yString.substring(yString.length - m, yString.length));

  var z0 = karatSuba(low1, low2);
  var z1 = karatSuba(low1 + high1, low2 + high2);
  var z2 = karatSuba(high1, high2);

  var res = z2 * Math.pow(10, 2 * m) + (z1 - z2 - z0) * Math.pow(10, m) + z0;

  return res;
}

var a = 3141592653555656555123;
var b = 2718281828555656555123;
console.log(karatSuba(a, b));
console.log(a * b);
