console.log(squareSum(100)-sumSquare(100))
//Sum of squares
function sumSquare(x){
  let res = 0;
  for (let i=1;i<=x;i++){
    res+= Math.pow(i,2);
  }
  return res
}
//square of sums
function squareSum(x){
  let res = 0;
  for (let i=1; i<=x;i++){
    res+=i;
  }
  res = Math.pow(res,2);
  return res;
}
