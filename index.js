const main = document.getElementById('main')

main.addEventListener('click', function(e) {
  alert('I was clicked')
})

const input = document.querySelector('input')

// input.addEventListener('mouseover', function(e) {
//   alert('mouseover me!')
// })

input.addEventListener('keydown', function(e) {
  console.log(e.which)
})


let divs = document.querySelectorAll('div')

function bubble(e) {
  console.log(this.firstChild.nodeValue.trim() + ' bubbled')
}

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', bubble)
}

function capture(e) {
  e.stopPropagation()
  
  console.log(this.firstChild.nodeValue.trim() + ' captured')
}

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', capture, true)
}
