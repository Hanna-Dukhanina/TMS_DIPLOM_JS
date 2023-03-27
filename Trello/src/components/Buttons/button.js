export const createBtn = (value, cb = () => { }) => {
    const btn = document.createElement('input')
    btn.type = 'button'
    btn.value = value
    btn.className = 'button'
    btn.addEventListener('click', cb)
    return btn
}