'use strict'

import * as storage from './components/storage'
import { initNote } from './components/note/init'

import { header } from './header'
import { container } from './body'
import { popup } from './components/popupWindow'

const root = document.querySelector('.root')
root.append(header, container, popup)

// localStorage.clear()

// window.addEventListener('beforeunload', storage.saveAll)
// window.addEventListener('load', () => {
//     storage.loadAll()
//     const qwe = initNote()
//     noteBoard.append(...qwe)
// })