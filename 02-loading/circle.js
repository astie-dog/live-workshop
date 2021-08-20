const loading = document.getElementById('js-loading')
const spans = loading.querySelectorAll('span')

const deg = 180 / spans.length 
const rad = deg * Math.PI / 180
const r = 300

let count = 0
const loop = () => {
  const step = count % 360
  spans.forEach((span, i) => {
    const angle = deg * (spans.length - i) + step
    const rad = Math.floor(angle) * Math.PI / 180
    const x = Math.cos(rad) * r
    const y = Math.sin(rad) * r
    span.style.left = x + 'px'
    span.style.top = y + 'px'
  })
  count++
}

setInterval(loop, 16)