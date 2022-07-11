import * as api from './api.js'

export function updateList() {
    const list = api.getTasks()

    const container = document.querySelector('.list')

    container.innerHTML = ''

    list.forEach(item => {
        container.appendChild(taskComponent(item))
    })
}

function taskComponent(task) {
    return stringToHTML(`
<div class="list-item ${task.done ? 'done' : ''}" onClick="updateTask(${task.id}, ${!task.done})">
    <input type="checkbox" name="" id="" ${task.done ? 'checked' : ''}>
    <div class="description">${task.description}</div>
    <button onClick="deleteTask(${task.id})">Delete</button>
</div>
`)
}

function stringToHTML(htmlString) {
    const parser = new DOMParser()
    const html = parser.parseFromString(htmlString, "text/html")
    return html.body.firstChild
}