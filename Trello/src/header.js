export const header = document.createElement('div')
header.className = 'header'

const logo = document.createElement('div')
logo.className = 'logo'
logo.innerHTML = 'TRELLO'

import { clock } from './components/clock'

header.append(logo, clock)