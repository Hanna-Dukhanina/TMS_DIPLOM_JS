export const createNote = (id, title, text, date) => {

    const note = document.createElement('div')
    note.id = id
    note.className = 'note'

    const titleElement = document.createElement('p')
    titleElement.textContent = title
    titleElement.className = 'title'

    const textElement = document.createElement('div')
    textElement.textContent = text
    textElement.className = 'text'

    const dateElement = document.createElement('div')
    dateElement.textContent = date
    dateElement.className = 'dateElement'

    // const selectBoxElement = document.createElement('select')
    // selectBoxElement.innerHTML = select
    // selectBoxElement.className = 'selectBoxElement'

    note.append(titleElement, textElement, dateElement)

    return note
}