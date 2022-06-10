const input = document.getElementById("user-input")
const btn = document.getElementById("addNew")
const list = document.getElementById("myTodo")
const completedBtn = document.querySelectorAll(".myBtn")

list.addEventListener("click", deleteItem)

btn.addEventListener("click", (e) => {
    e.preventDefault();
    createElement()
    clearInput();
})

function clearInput() {
    input.value = "";
    input.textContent = '';
}

function createElement() {
    const listItem = document.createElement('li')
    const container = document.createElement('div')
    const decorationBlock = document.createElement('div')
    const button1 = document.createElement('button')
    const button2 = document.createElement('button')
    const deleteBtn = document.createElement('img')
    const completedBtn = document.createElement('img')

    listItem.textContent = input.value
    list.appendChild(listItem)

    decorationBlock.classList.add('list-item-decor')
    listItem.appendChild(decorationBlock)

    const myDiv = listItem.appendChild(container)
    myDiv.classList.add('icons')

    button1.appendChild(deleteBtn)
    button2.appendChild(completedBtn)
    myDiv.appendChild(button1)
    myDiv.appendChild(button2)
    button1.classList.add("myBtn")
    button2.classList.add("myBtn")
    deleteBtn.src = './images/trash-solid.svg'
    completedBtn.src = './images/check-solid.svg'
    
    console.log(`Button 1 classlist: ${button1.classList}`)
    console.log(`Button 2 classlist: ${button2.classList}`)
}

function deleteItem(e) {
    let item = e.target
    console.log(`Elements classlist: ${item.classList}`)
}
