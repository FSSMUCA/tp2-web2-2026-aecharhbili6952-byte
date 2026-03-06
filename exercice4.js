let diff = 0

let a1 = 0 == ""
let a2 = 0 === ""
console.log('0 == "" -> ' + a1 + ' | 0 === "" -> ' + a2)
if(a1 !== a2) diff++

let b1 = 0 == "0"
let b2 = 0 === "0"
console.log('0 == "0" -> ' + b1 + ' | 0 === "0" -> ' + b2)
if(b1 !== b2) diff++

let c1 = 0 == false
let c2 = 0 === false
console.log('0 == false -> ' + c1 + ' | 0 === false -> ' + c2)
if(c1 !== c2) diff++

let d1 = "" == false
let d2 = "" === false
console.log('"" == false -> ' + d1 + ' | "" === false -> ' + d2)
if(d1 !== d2) diff++

let e1 = null == undefined
let e2 = null === undefined
console.log('null == undefined -> ' + e1 + ' | null === undefined -> ' + e2)
if(e1 !== e2) diff++

let f1 = null == false
let f2 = null === false
console.log('null == false -> ' + f1 + ' | null === false -> ' + f2)
if(f1 !== f2) diff++

let g1 = NaN == NaN
let g2 = NaN === NaN
console.log('NaN == NaN -> ' + g1 + ' | NaN === NaN -> ' + g2)
if(g1 !== g2) diff++

let h1 = 1 == "1"
let h2 = 1 === "1"
console.log('1 == "1" -> ' + h1 + ' | 1 === "1" -> ' + h2)
if(h1 !== h2) diff++

let i1 = " \t\n " == 0
let i2 = " \t\n " === 0
console.log('" \\t\\n " == 0 -> ' + i1 + ' | " \\t\\n " === 0 -> ' + i2)
if(i1 !== i2) diff++

console.log("---")
console.log(diff + " paire(s) où == et === donnent des résultats différents")