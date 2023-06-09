const span = document.querySelector('span')
const formAdd = document.querySelector('form.add')
const formSearch = document.querySelector('form.search')
const ulList = document.querySelector('ul')

const addInput = document.querySelector('.add input')
const searchInput = document.querySelector('.add search')

const tasks = []

const addindTask = (e) => {
    e.preventDefault()
    const taskName = addInput.value
    if (taskName === '') return
    const liElement = document.createElement('li')
    liElement.className = 'del'
    liElement.innerHTML = taskName + ' <button>delate</button>'
    tasks.push(liElement)

    showList()

    span.textContent = tasks.length
    liElement.querySelector('button').addEventListener('click', removeTask)
    addInput.value = ''
}

showList = () => {
    ulList.textContent = ''
    tasks.forEach((task, key) => {
        task.dataset.num = key
        ulList.appendChild(task)
    })
}

const removeTask = (e) => {
    const index = e.target.parentNode.dataset.num
    tasks.splice(index, 1)
    showList()
    span.textContent = tasks.length
}

const searchTask = (e) => {
    e.preventDefault()
    const inputValue = e.target.value.toLowerCase()
    let taskArray = [...tasks]
    taskArray = taskArray.filter((li) => li.textContent.toLowerCase().includes(inputValue))
    console.log(taskArray);
    ulList.textContent = ''
    taskArray.forEach(li => ulList.appendChild(li))
}


formAdd.addEventListener('submit', addindTask)
formSearch.addEventListener('input', searchTask)