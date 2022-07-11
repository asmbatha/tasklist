export function getList() {
    let list = localStorage.getItem('tasklist')
    try {
        list = JSON.parse(list)
        return Array.isArray(list) ? list : []
    } catch {
        return []
    }
}

export function saveList(list) {
    localStorage.setItem('tasklist', JSON.stringify(list))
}