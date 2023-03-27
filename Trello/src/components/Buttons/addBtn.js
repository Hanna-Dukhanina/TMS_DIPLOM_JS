import { createBtn } from './button'
import { createNote } from '../note/create'
import { entryField } from '../../body'
import { entryField2 } from '../../body'
import { noteBoard } from '../../body'
import * as store from '../store'

export const labelForNote = document.createElement('label')
labelForNote.className = 'label'

export const addBtn = createBtn('Add', () => {

    const noteDate = new Date()
    const noteYear = noteDate.getFullYear().toString()
    const noteMonth = (noteDate.getMonth() + 1).toString().padStart(2, '0')
    const noteDay = noteDate.getDate().toString().padStart(2, '0')
    const noteHour = noteDate.getHours().toString().padStart(2, 0).padStart(2, '0')
    const noteMinutes = noteDate.getMinutes().toString().padStart(2, 0).padStart(2, '0')
    const noteSeconds = noteDate.getSeconds().toString().padStart(2, 0).padStart(2, '0')

    const newNoteData = {
        id: 'new Note',
        title: `${entryField.value}`,
        text: `${entryField2.value}`,
        date: `${noteDay}.${noteMonth}.${noteYear} ${noteHour}:${noteMinutes}:${noteSeconds}`,
    }
    store.addOne(newNoteData)

    const labelForSingleNote = document.createElement('label')
    labelForSingleNote.className = 'note'

    const note = createNote(newNoteData.id, newNoteData.title, newNoteData.text, newNoteData.date, newNoteData.select)
    note.className = 'compNote'

    const next_btn_2 = document.createElement('input')
    next_btn_2.type = 'button'
    next_btn_2.id = 'btnTwo'
    next_btn_2.value = '>'

    const block2 = document.querySelector('.boardProgress')

    next_btn_2.addEventListener('click', () => {
        const block1 = next_btn_2.parentElement.parentElement
        const cloneBlock1 = block1.cloneNode(true)

        const copiedBtnTwo = cloneBlock1.querySelector('#btnTwo')
        copiedBtnTwo.remove()

        const copiedDivForBtn = cloneBlock1.querySelector('.divForBtn')
        copiedDivForBtn.remove()

        const divForNewBtn = document.createElement('div')
        divForNewBtn.className = 'divTwo'

        const btnBack = document.createElement('input')
        btnBack.type = 'button'
        btnBack.id = 'btnBack'
        btnBack.value = '<< Back'
        btnBack.addEventListener('click', () => {
            noteBoard.append(block1)
            const copiedBlock2 = btnBack.parentElement.parentElement
            copiedBlock2.remove()
        })

        const btnComplete = document.createElement('input')
        btnComplete.type = 'button'
        btnComplete.id = 'btnComplete'
        btnComplete.value = 'Complete'

        const block3 = document.querySelector('.boardDone')

        btnComplete.addEventListener('click', () => {
            const block2_2 = btnComplete.parentElement.parentElement
            const cloneBlock2_2 = block2_2.cloneNode(true)

            const copiedBack = cloneBlock2_2.querySelector('#btnBack')
            copiedBack.remove()

            const copiedComplete = cloneBlock2_2.querySelector('#btnComplete')
            copiedComplete.remove()

            const btnDelete = createBtn('Delete this', () => {
                const deleteDivDone = btnDelete.parentElement.parentElement
                deleteDivDone.remove()
            })

            const divForBtnDelete = document.createElement('div')
            divForBtnDelete.className = 'Del-btn3'
            divForBtnDelete.append(btnDelete)

            cloneBlock2_2.appendChild(divForBtnDelete)
            block3.append(cloneBlock2_2)
            block2_2.remove()
        })

        divForNewBtn.append(btnBack, btnComplete)

        cloneBlock1.appendChild(divForNewBtn)

        block2.appendChild(cloneBlock1)

        block1.remove()
    })

    const selectBox = document.createElement('select')
    const getUsers = async () => {
        const result = await fetch('https://63ff853b29deaba5cb26b59e.mockapi.io/people')
            .then(response => {
                console.log('fetch работает')
                return response.json()
            })
        return result
    }
    const fillUsers = (userList) => {
        userList.forEach(user => {
            selectBox.innerHTML += `<option>${user.name}</option>`
        })
    }
    let users = []
    getUsers()
        .then(result => {
            users = result
            fillUsers(users)
        })

    const divForBtn = document.createElement('div')
    divForBtn.className = 'divForBtn'

    const deleteThisOne = createBtn('Delete this', (event) => {
        event.preventDefault()
        labelForSingleNote.remove()
        console.log(store.getData().todoList)
        const indexToDelete = store.getData().todoList.findIndex((note) => note.id === newNoteData.id);
        if (indexToDelete !== -1) {
            store.getData().todoList.splice(indexToDelete, 1);
            store.getData().counter = store.getData().todoList.length;
        }
    })

    divForBtn.append(selectBox, next_btn_2, deleteThisOne)

    labelForSingleNote.append(note, divForBtn)
    labelForNote.append(labelForSingleNote)
})

