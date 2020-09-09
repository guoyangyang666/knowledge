
// 答案：
// -----i外面: 5
// i里面: 5(5次)
function func1() {
  console.log("---------func1开始--------");
  for (var i = 0; i < 5; i++) {
    setTimeout(function () {
      console.log("-----i里面:", i);
    }, 1000);

  }
  console.log("-----i外面:", i);
}
// 答案：
// -----i外面: 0,1,2,3,4
// i里面: 5(5次)
function func11() {
  console.log("---------func11开始--------");
  for (var i = 0; i < 5; i++) {
    setTimeout(function () {
      console.log("-----i里面:", i);
    }, 1000);
    console.log("-----i外面:", i);
  }
}
// 答案：
// -----i里面: 0
// -----i里面: 1
// -----i里面: 2
// -----i里面: 3
// -----i里面: 4
// -----i外面: 5
function func12() {
  console.log("---------func1开始--------");
  for (var i = 0; i < 5; i++) {
    console.log("-----i里面:", i);
  }
  console.log("-----i外面:", i);
}
// 答案：
// -----i外面: i is not defined
// -----i里面: 0
// -----i里面: 1
// -----i里面: 2
// -----i里面: 3
// -----i里面: 4
function func2() {
  console.log("---------func2开始--------");
  for (let i = 0; i < 5; i++) {
    setTimeout(function () {
      console.log("-----i里面:", i);
    }, 1000);

  }
  console.log("-----i外面:", i);
}

// 答案：es6
// -----i里面: 0
// -----i里面: 1
// -----i里面: 2
// -----i里面: 3
// -----i里面: 4
function func3() {
  console.log("---------func3开始--------");
  for (let i = 0; i < 5; i++) {
    setTimeout(function () {
      console.log("-----i里面:", i);
    }, 1000);

  }
}


//------------https://www.cnblogs.com/fly_dragon/p/8669057.html
// --a: 99
// --f>>a>>1: undefined
// ---f>>>a>>2: 10
function func4() {
  console.log("---------func4开始--------");
  var a = 99;// 全局变量a
  console.log("--a:", a);// a=>99,  此时是全局变量的a
  f();// f是函数，虽然定义在调用的后面，但是函数声明会提升到作用域的顶部。 
  function f() {
    console.log("--f>>a>>1:", a);// 当前的a变量是下面变量a声明提升后，默认值undefined。如果下面不给a重新赋值，则此时为99
    var a = 10;
    console.log("---f>>>a>>2:", a)// a => 10
  }
}

function func6() {
  console.log("---------func6开始--------");
  for (var i = 0; i < 5; i++) {
    var d = 5;

  }
  console.log("-----i外面:", i);// 5   (循环结束i已经是4，所以此处i+1为5)
  console.log("-----d外面:", d);// 5,if语句和for语句中用var定义的变量可以在外面访问到，
  // 可见，if语句和for语句属于块作用域，不属于函数作用域。
}