import * as data from './localStorage.js'

let list = data.getList()

// read
export function getTasks() {
    return list
}

// create
export function createTask(description) {
    const task = {
        description,
        done: false,
        id: Date.now()
    }

    list.push(task)

    data.saveList(list)
}

// update
export function updateTask(id, done) {
    const task = list.find(item => item.id == id)

    if (!task) return

    task.done = done
    data.saveList(list)
}

// delete
export function deleteTask(id) {
    list = list.filter(item => item.id != id)
    data.saveList(list)
}
