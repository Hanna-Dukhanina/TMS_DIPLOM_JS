import { popup } from './popupWindow'

let store = {
    todoList: [],
    counter: 0,
}
export const getData = () => {
    return store
}
export const LoadData = (data) => {
    store.todoList = data.todoList
    store.counter = data.todoList.length
}
export const addOne = (todo) => {
    store.todoList.push(todo)
    store.counter = store.todoList.length
    if (store.todoList.length >= 6) {
        popup.style.display = 'flex'
    }
}