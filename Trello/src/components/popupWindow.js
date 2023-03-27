export const popup = document.createElement('div')
popup.className = 'popup'
popup.innerHTML = 'Ох, как много задач:(( <br> Может ты готов(а) пренести что-то в блок "Прогресса"?'
const p = document.createElement('p')
p.className = 'P-S'
p.innerHTML = 'P.S. Чтобы скрыть окно - кликни в любом его месте.'
popup.append(p)
popup.addEventListener('click', () => {
    popup.style.display = 'none'
})