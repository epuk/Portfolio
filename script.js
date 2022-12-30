
  let content = document.querySelector("#pro")
  let getRes = async(url) => {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`status: ${res.status}`);
    }
    return await res.json()
}


    getRes('bd.json')
        .then(data => {
            console.log(data);
            for(let key in data) {
                const block = document.createElement("div")
                const img = data[key].img
                const description = data[key].description
                const link = data[key].link


                block.innerHTML = 
                    `<div class="block">
                        <img class="lol" src="${img}" alt="" width="500">
                        <div class="col">
                            <p class="pip">${description}</p>
                            <a href="${link}" class="pip">Перейти в GitHub</a>
                        </div>
                    </div>`
                
             content.append(block)   
            }
        })



        const textInputField = document.querySelector('#text-input-field');
        const addButton = document.querySelector('#add-button');
        const todosContainer = document.querySelector('.todos-container');
        addButton.addEventListener('click', () => {

        if (textInputField.value.trim().length == '')
        return;

    const todoItemContainer = document.createElement('div');
    todoItemContainer.classList.add('todo-item-container');

    todosContainer.appendChild(todoItemContainer);

    const todoText = document.createElement('p');
    todoText.id = 'todo-text';
    todoText.innerText = textInputField.value;
    todoItemContainer.appendChild(todoText);

    todoText.addEventListener('click', () => {
        todoText.classList.add('line-through');
        editButton.setAttribute("disabled", "disabled");
    })
        });