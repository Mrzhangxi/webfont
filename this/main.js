// function f1() {
//     console.log(this);
// }

// function f2() {
//     'use strict'
//     console.log(this)
// }

// f1();
// f2();

// ********************************************************************************************************

// const o1 = {
//     text: 'o1',
//     fn: function() {
//         return this.text
//     }
// }
// const o2 = {
//     text: 'o2',
//     fn: function() {
//         return o1.fn()
//     }
// }


// const o3 = {
//     text: 'o3',
//     fn: function() {
//         var fn = o1.fn
//         return fn()
//     }
// }

// console.log(o1.fn())
// console.log(o2.fn())
// console.log(o3.fn())

// ********************************************************************************************************

function Foo(){
    this.user = "Lucas"
    return 1
}
const instance = new Foo()
console.log(instance.user)