

const one=document.querySelector(".one")
const two=document.querySelector(".two")
const three=document.querySelector(".three")
const four=document.querySelector(".four")
const five=document.querySelector(".five")

one.onclick = function() {
  one.classList.add("active")
  two.classList.remove("active")
  three.classList.remove("active")
  four.classList.remove("active")
  five.classList.remove("active")
}

two.onclick = function() {
  one.classList.add("active")
  two.classList.add("active")
  three.classList.remove("active")
  four.classList.remove("active")
  five.classList.remove("active")
}

three.onclick = function() {
  one.classList.add("active")
  two.classList.add("active")
  three.classList.add("active")
  four.classList.remove("active")
  five.classList.remove("active")
}

four.onclick = function() {
  one.classList.add("active")
  two.classList.add("active")
  three.classList.add("active")
  four.classList.add("active")
  five.classList.remove("active")
}

five.onclick = function() {
  one.classList.add("active")
  two.classList.add("active")
  three.classList.add("active")
  four.classList.add("active")
  five.classList.add("active")
}


// ========================================================
// the second way
// ========================================================



const one2=document.querySelector(".one2")
const two2=document.querySelector(".two2")
const three2=document.querySelector(".three2")
const four2=document.querySelector(".four2")
// const five=document.querySelector(".five2")

one2.onclick = function() {
  one2.classList.add("active")
  two2.classList.remove("active")
  three2.classList.remove("active")
  four2.classList.remove("active")
  // five2.classList.remove("active")
}

two2.onclick = function() {
  one2.classList.add("active")
  two2.classList.add("active")
  three2.classList.remove("active")
  four2.classList.remove("active")
  // five2.classList.remove("active")
}

three2.onclick = function() {
  one2.classList.add("active")
  two2.classList.add("active")
  three2.classList.add("active")
  four2.classList.remove("active")
  // five2.classList.remove("active")
}

four2.onclick = function() {
  one2.classList.add("active")
  two2.classList.add("active")
  three2.classList.add("active")
  four2.classList.add("active")
  // five2.classList.remove("active")
}

// five2.onclick = function() {
//   one2.classList.add("active")
//   two2.classList.add("active")
//   three2.classList.add("active")
//   four2.classList.add("active")
//   five2.classList.add("active")
// }











