var num = 17;
var count = 0;
for (var i = 1; i <= num; i++) {
  if (num % i == 0) {
    count++;
  }
}
if (count == 1) {
  console.log("Prime Number");
}
else {
  console.log("not a Prime");
}