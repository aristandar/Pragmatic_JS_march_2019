
  let num1 = prompt("Моля въведете число a1:");
  let num2 = prompt("Моля въведете число a2:");
  let num3 = prompt("Моля въведете число a3:");
  let num4 = prompt("Моля въведете число a3:");
  let num5 = prompt("Моля въведете число a3:");
  var arr = [Number(num1), Number(num2), Number(num3), Number(num4), Number(num5)];


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
