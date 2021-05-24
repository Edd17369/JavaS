function numDiv(int) {
  var ans = 0;
  for (i=1;i<Math.floor(Math.sqrt(int))+1;i++) {
    if (int%i == 0 ) {
      ans += 2;
    }
  }
  if (Math.floor(Math.sqrt(int))**2 == int) {ans -= 1}
return ans
}

function countPairsInt(diff, nMax) {
  var ans = 0;
  var arr = new Array(nMax+1).fill(0);
  for (j=1;j<nMax;j++) {
    arr[j] = numDiv(j)
  }
  for (k=1;k<nMax-diff;k++) {
    if (arr[k] == arr[k+diff]) {
      ans += 1
    }
  }
  return ans
}

console.log(1.0 -1)
print(1.0 -1)