module.exports = function reverse (n) {
    var tmp = 0, flag = 0 > n;
    flag && (n *= -1);
    while (n > 0) {
    tmp *= 10;
    tmp += n % 10;
      n = parseInt(n / 10);
    }
    return flag ? tmp : tmp;
  }
  


