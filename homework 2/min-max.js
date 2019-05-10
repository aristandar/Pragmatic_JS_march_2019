function min-max-sum() {

    // Get the user input values
    let a0 = Number(document.getElementsByClassName('input-task-5')[0].value);
    let a1 = Number(document.getElementsByClassName('input-task-5')[1].value);
    let a2 = Number(document.getElementsByClassName('input-task-5')[2].value);
    let a3 = Number(document.getElementsByClassName('input-task-5')[3].value);
    let a4 = Number(document.getElementsByClassName('input-task-5')[4].value);

    let array = [a0, a1, a2, a3, a4];


  function isPositiveInteger() {
    console.log(arr);
    let status = true;
    for (var i = 0; i < arr.lenght; i++) {
      if (Number.isInteger(arr[i]) && arr[i] > Number(0)) {
      status = true;
      }
      else {
        console.log(arr[i]);
        status = false;
        break;
      }
      return status;
    }
  }

if (isPositiveInteger()) {
console.log("poxsitives");
}
  else {
alert("fail");
  }
}
