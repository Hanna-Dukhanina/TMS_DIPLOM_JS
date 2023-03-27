import *as store from './store'

const trelloKey = 'Trello_Key'

export const saveAll = () => {
    localStorage.setItem(trelloKey, JSON.stringify(store.getData()))
}
export const loadAll = () => {
    const data = JSON.parse(localStorage.getItem(trelloKey) || '{}')
    store.LoadData(data)
}