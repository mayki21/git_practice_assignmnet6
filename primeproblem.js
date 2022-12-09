var num = 17;
var counter = 0;
for (var i = 1; i <= num; i++) {
  if (num % i == 0) {
    counter++;
  }
}
if (counter == 2) {
  console.log("Prime Number");
}
else {
  console.log("not a Prime");
}