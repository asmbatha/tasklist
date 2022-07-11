import * as api from './api.js'
import { updateList } from './ui.js'

window.onload = function () {
    updateList()
}

window.submitTask = function () {
    const inputEl = document.querySelector('input')

    const description = inputEl.value.trim()

    inputEl.value = ''

    api.createTask(description)

    updateList()
}

window.updateTask = function (id, done) {
    api.updateTask(id, done)
    updateList()
}

window.deleteTask = function (id) {
    api.deleteTask(id)
    updateList()
}