var success = function () {
  console.log("%cTest passed", 'color:green');
  // testResult.insertAdjacentHTML("beforeend", '<li style="color: green"> Test passed! </li>');
};

var fail = function (method) {
  console.log("%c" + method, 'color:red')
  // testResult.insertAdjacentHTML("beforeend", '<li style="color: red"> Test failed! </li>');
};

var testIfTrue = function(argument) {
  if (argument) {
      success();
  } else {
      fail(arguments.callee.caller);
  }
};