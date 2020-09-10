// 变量提升：js将所有声明提升到当前作用域顶部的默认行为（提升到当前脚本或当前函数的顶部）
// 用let或const声明的变量和常量不会被提升。js只提升声明。js并不是严格的自上而下的执行的语言。
function aFunc(){
  a = 1;
  var a;
  console.log("a:",a);// 1
};
aFunc();

// 变量声明可以提升到顶部，但是赋值语句不会提升，这是两个不一样的概念
// 为了避免bug，请始终在每个作用域的开头声明所有变量
function bFunc(){
  console.log("b:",b);// undefined
  var b = 1;
};
bFunc();

function cFunc(){
  // c = 1;
  let c;
  console.log("c:",c);// Uncaught ReferenceError: Cannot access 'c' before initialization
};
cFunc();

// for循环和延迟
function func1() {
  for (let i = 0; i < 5; i++) {
   console.log("func1-for里:", i);
  }
  // console.log("func1-for外:", i);
};
// func1-for里: 0,1,2,3,4
// func1-for外: Uncaught ReferenceError: i is not defined
func1();

// for循环和延迟
function func2() {
  for (var i = 0; i < 5; i++) {
   console.log("func2-for里:", i);
  }
  console.log("func2-for外:", i);
};
// func2-for里: 0,1,2,3,4
// func2-for外: 5
func2();

// for循环和延迟
function func3() {
  for (let i = 0; i < 5; i++) {
    setTimeout(()=>{
      console.log("func3-for里:", i);
    },1000);
  }
  // console.log("func3-for外:", i);
};
// func3-for里: 0,1,2,3,4
// func3-for外: 5
func3();

// for循环和延迟
function func4() {
  for (var i = 0; i < 5; i++) {
    setTimeout(()=>{
      console.log("func4-for里:", i);
    },1000);
  }
  // console.log("func4-for外:", i);
};
// func4-for里: 0,1,2,3,4
// func4-for外: 5
func4();

//  重点在 for 循环机制上：在 for 三个语句中，第一个语句在循环代码块开始前执行，每次循环都会执行。由于 var 命令的变量提升机制，var 命令实际只会执行一次。而 let 命令不存在变量提升，所以每次循环都会执行一次，声明一个新变量（但初始化的值不一样）。for 的每次循环都是不同的块级作用域，而 let 声明的变量是块级作用域的，所以也不存在重复声明的问题。
// for循环和延迟
function func5() {
  let i = 1;
  for (; i < 5; i++) {
    setTimeout(()=>{
      console.log("func5-for里:", i);
    },1000);
  }
  // console.log("func4-for外:", i);
};
// func4-for里: 0,1,2,3,4
// func4-for外: 5
func5();