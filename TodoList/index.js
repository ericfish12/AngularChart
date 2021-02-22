
let array = [];

// MVC, MVVM
const todoAPI = (() => {
    const baseurl = 'https://jsonplaceholder.typicode.com';
    const todoPath = 'todos';

    const getAllTodos = () =>
        fetch([baseurl, todoPath].join('/'))
            .then((response) =>array =  response.json());

    const deleteTodo = (id) => 
        fetch([baseurl, todoPath, id].join('/'), {
            method: 'DELETE',
        });

    return {
        getAllTodos,
        deleteTodo
    }
})();

const View = (() => {
    const domString = {
        todolist: 'todolist-content',
        removebtn: 'btn-remove'
    }
    const render = (element, htmlTemplate) => {
        element.innerHTML = htmlTemplate;
    }
    const inittodolsitTmp = (todoArray) => {
        let template = '';
        todoArray.forEach(ele => {
            template += `
                <li>
                    <span>${ele.title}</span>
                    <button class="btn-remove" id="${ele.id}">X</button>
                </li>
            `;
        });
        return template;
    }

    return {
        domString,
        render,
        inittodolsitTmp
    }
})();



const AppController = ((view) => {
  //  const state = new module.State();

    const addListenerOnRemove = () => {
        const todoElement = document.querySelector('#' + view.domString.todolist);
        todoElement.addEventListener('click', (event) => {
            array = array.filter(todo => +todo.id !== +event.target.id);
            view.render( document.getElementById('todolist-content'),view.inittodolsitTmp(array))
        });
    }

const addListenerOnAdd = ()=>{
const toAddItem = document.getElementById('add_item');
toAddItem.addEventListener('click',(e)=>{
const inputContentss =( document.getElementsByClassName(
    ' todolist__input'))
  array.unshift({title:inputContentss[0].value})
  view.render( document.getElementById('todolist-content'),view.inittodolsitTmp(array))
  inputContentss[0].value=''


})

}




    const init = async() => {
     todoAPI.getAllTodos().then(data => {
         console.log(data)
        array = data;
          view.render( document.getElementById('todolist-content'),view.inittodolsitTmp(data))
            addListenerOnRemove();
            addListenerOnAdd();
        });
    }
    return {
        init
    }
})(View);

AppController.init();

// $( "button.continue" ).html( "Next Step..." )