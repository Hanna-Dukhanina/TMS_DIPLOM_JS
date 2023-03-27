export const clock = document.createElement('div')
clock.className = 'clock'
setInterval(function () {
    const date = new Date()
    const year = date.getFullYear().toString()
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const day = date.getDate().toString().padStart(2, '0')
    const hour = date.getHours().toString().padStart(2, 0).padStart(2, '0')
    const minutes = date.getMinutes().toString().padStart(2, 0).padStart(2, '0')
    const seconds = date.getSeconds().toString().padStart(2, 0).padStart(2, '0')
    clock.innerHTML = (`${day}.${month}.${year} ${hour}:${minutes}:${seconds}`)
}, 1000)