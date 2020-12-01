

// let obj = {
//   name : "lihi",
//   es5 : function (){
//     console.log(this.name)
//   },
//   es6 : () => {
//     console.log(this.name)
//   }
// }

// obj.es5() // lihi
// obj.es6() // CodePen

// let obj = {
//   name : "lihi",
//   es5 : function (){
//     console.log(this.name)
//   },
//   miniObj : {
//      es6 : () => {
//     console.log(this.name)
//      }
//   }
// }

// obj.es5() // lihi
// obj.miniObj.es6() // CodePen

// let obj = {
//   name : "lihi",
//   miniObj : {
//     es5 : function (){
//     console.log(this.name)
//     } 
//   }
// }

// obj.miniObj.es5() // undefined


// let obj = {
//     name : "lihi",
//     name2 : this.name,
//     es5 : function () {
//       return this.name
//     },
//     es6 : () => {
//       return this.name
//     }
//   }
  
//   console.log(obj.name) // lihi
//   console.log(obj.name2) // CodePen
//   console.log(obj.es5()) // lihi
//   console.log(obj.es6()) // CodePen 
  