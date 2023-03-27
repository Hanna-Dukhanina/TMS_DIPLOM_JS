export const createEntryField = (placeholder) => {
    const entryField = document.createElement('input')
    entryField.type = 'text'
    entryField.id = 'entry field'
    entryField.placeholder = placeholder
    return entryField
}