import { createBtn } from './button'
import { boardDone } from '../../body'

export const btnDeleteAll = createBtn('Delete All', () => {
    while (boardDone.firstChild) {
        boardDone.removeChild(boardDone.firstChild)
    }
})