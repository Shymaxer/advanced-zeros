module.exports = function getZerosCount(number, base) {
  // your implementation
  
  let j = 0 , i = 2, count = 0, k = 0;
  let array1 = [], array2 = [], array3 = [];

  do {
    if (base % i === 0) {
      base = base / i;
      count++;
      k = 1;
    }
    else {
      if (k === 1) {
        array1[j] = i;
        array2[j] = count;
        j++;
      }
      i++;
      count = 0;
      k = 0;
    }
  }
  while (i <= base);

  array1[j] = i;
  array2[j] = count;

  for (i = 0; i < array1.length; i++) {
    let n = 1;
    array3[i] = 0;

    while (n <= number) {
      n = n * array1[i];
      array3[i] = array3[i] + Math.floor(number / n);
    }
  }

  let res = array3[0] / array2[0];
    for (i = 0; i < array2.length; i++) {
    res = Math.min(res, Math.floor(array3[i] / array2[i]));
  }

  return res;
}