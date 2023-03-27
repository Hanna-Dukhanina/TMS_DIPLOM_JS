'use strict'

//the first block

const firstBlock = document.createElement('div')
firstBlock.className = 'firstBlock'

const headerFirstBlock = document.createElement('div')
headerFirstBlock.className = 'headerFirstBlock'

import { createEntryField } from './components/entryField'

export const entryField = createEntryField('Enter title...', () => { })
entryField.className = 'entryField'

export const entryField2 = createEntryField('Enter todo...', () => { })
entryField2.className = 'entryField2'

headerFirstBlock.append(entryField, entryField2)

const footerFirstBlock = document.createElement('div')
footerFirstBlock.className = 'footerFirstBlock'

const formForLabel = document.createElement('form')
import { labelForNote } from './components/Buttons/addBtn'
formForLabel.append(labelForNote)

import { addBtn } from './components/Buttons/addBtn'

export const noteBoard = document.createElement('div')
noteBoard.className = 'Note_Board'
noteBoard.append(formForLabel)

footerFirstBlock.append(addBtn)

firstBlock.append(headerFirstBlock, noteBoard, footerFirstBlock)

//the second block

const secondBlock = document.createElement('div')
secondBlock.className = 'secondBlock'

const headerSecondBlock = document.createElement('div')
headerSecondBlock.className = 'headerSecondBlock'

const logoInProgress = document.createElement('div')
logoInProgress.className = 'logoInProgress'
logoInProgress.innerHTML = 'IN PROGRESS'

headerSecondBlock.append(logoInProgress)

const boardProgress = document.createElement('div')
boardProgress.className = 'boardProgress'

secondBlock.append(headerSecondBlock, boardProgress)

//the third block

const thirdBlock = document.createElement('div')
thirdBlock.className = 'thirdBlock'

const headerThirdBlock = document.createElement('div')
headerThirdBlock.className = 'headerThirdBlock'

const logoDone = document.createElement('div')
logoDone.className = 'logoDone'
logoDone.innerHTML = 'DONE'

headerThirdBlock.append(logoDone)

export const boardDone = document.createElement('div')
boardDone.className = 'boardDone'

const footerThirdBlock = document.createElement('div')
footerThirdBlock.className = 'footerThirdBlock'

import { btnDeleteAll } from './components/Buttons/deleteAllBtn'

footerThirdBlock.append(btnDeleteAll)

thirdBlock.append(headerThirdBlock, boardDone, footerThirdBlock)

//the container

export const container = document.createElement('div')
container.className = 'container'
container.append(firstBlock, secondBlock, thirdBlock)