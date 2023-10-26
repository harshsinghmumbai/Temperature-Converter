let cel = document.getElementById("cel");
let feh = document.getElementById("feh");
// console.log(cel,feh);

cel.addEventListener("input", function () {
  // console.log("you have input something");
  let C = this.value;
  let F = (C * 9) / 5 + 32;
  //   console.log(F);
  feh.value = F;
});

feh.addEventListener("input", function () {
  // console.log("you have input something");
  let F = this.value;
  let C = (5 * (F - 32)) / 9;
  //   console.log(C);
  if (!Number.isInteger(C)) {
    C = C.toFixed(4);
  }
  cel.value = C;
});
