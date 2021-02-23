let array = [];

// MVC, MVVM
const todoAPI = (() => {
  const baseurl = "https://jsonplaceholder.typicode.com";
  const todoPath = "todos";

  const getAllTodos = () =>
    fetch([baseurl, todoPath].join("/")).then(
      (response) => (array = response.json())
    );

  const deleteTodo = (id) =>
    fetch([baseurl, todoPath, id].join("/"), {
      method: "DELETE",
    });

const addTodo = (body)=>{

  return fetch('https://jsonplaceholder.typicode.com/todos',{
method:'POST',
body:JSON.stringify(body),
headers: {
  "Content-type": "application/json; charset=UTF-8",
},
}).then((data)=>data.json());
}


  const editTodo = (id, body) =>
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        title: `${body.title}`,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => response.json());

  return {
    getAllTodos,
    deleteTodo,
    editTodo,
    addTodo
  };
})();

const View = (() => {
  const domString = {
    todolist: "todolist-content",
    removebtn: "btn-remove",
  };
  const render = (element, htmlTemplate) => {
    element.innerHTML = htmlTemplate;
  };
  const inittodolsitTmp = (todoArray) => {
    let template = "";
    todoArray.forEach((ele) => {
      template += `
                <li>
                    <span id= 'span${ele.id}'>${ele.title}</span>

                    <button class="btn-edit"  name="${ele.id}" >EDIT</button>
                    <button class="btn-remove" id="${ele.id}">X</button>
                </li>
            `;
    });
    return template;
  };

  return {
    domString,
    render,
    inittodolsitTmp,
  };
})();

const AppController = (() => {
  

  const addListenerOnRemove = () => {
    const todoElements = document.getElementsByClassName('btn-remove')
  Array.from( todoElements).forEach((element)=>{
    
      element.addEventListener("click", (event) => {
  
          array = array.filter((todo) => +todo.id !== +event.target.id);
         View.render(document.getElementById("todolist-content"),View.inittodolsitTmp(array));
         addListenerOnEdit();
         addListenerOnRemove()
    })
    });
  };

  const addListenerOnAdd = () => {
    const toAddItem = document.getElementById("add_item");
    toAddItem.addEventListener("click", () => {
     
      const inputContentss = document.getElementsByClassName(" todolist__input");
  
      todoAPI.addTodo({ title: inputContentss[0].value, id: 911 }).then(
        (data)=>{
         
          array.unshift(data)
          View.render(
            document.getElementById("todolist-content"),
            View.inittodolsitTmp(array)
          );
          inputContentss[0].value = "";
          addListenerOnEdit();
        }
      )
   

    });
  };

  const addListenerOnEdit = () => {
    const toEditItems = document.getElementsByClassName("btn-edit");

    Array.from(toEditItems).forEach((element) => {
      element.addEventListener("click", (event) => {
        document.getElementById("edit_input").style.visibility = "visible";
        document.getElementById("edit_input_button")
          .addEventListener("click", () => {
            const temp = document.getElementById("edit_input_input").value;

            todoAPI.editTodo(event.target.name, { title: temp })
              .then((json) => {
                document.getElementById(`span${event.target.name}`).innerText =
                  json.title;
              });

            document.getElementById("edit_input").style.visibility = "hidden";
          });
      });
    });
  };

  const init = async () => {
    todoAPI.getAllTodos().then((data) => {
      console.log(data);
      array = data;
      View.render(
        document.getElementById("todolist-content"),
        View.inittodolsitTmp(data)
      );

      addListenerOnAdd();
       addListenerOnRemove();
      addListenerOnEdit();
    });
  };
  return {
    init,
  };
})(View);

AppController.init();

// $( "button.continue" ).html( "Next Step..." )
