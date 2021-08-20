const clock = document.getElementById('js-clock')
setInterval(() => {
  const now = new Date()
  const h = String(now.getHours()).padStart(2, '0')
  const m = String(now.getMinutes()).padStart(2, '0')
  const s = String(now.getSeconds()).padStart(2, '0')
  clock.innerHTML = `${h}:${m}:${s}`
}, 100)