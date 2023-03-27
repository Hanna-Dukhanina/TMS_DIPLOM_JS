import { getData } from '../store'
import { createNote } from './create'
export const initNote = () => {
    return getData().todoList.map(todo => createNote(todo.id, todo.title, todo.text, todo.date))
}