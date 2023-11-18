import React, { useState } from "react";


export const TodoListFetch = () => {
  // estados
  const [task, setTask] = useState("");
  const [user, setUser] = useState('hector')
  const [list, setList] = useState([]);  // array de objetos.
  const url_base = 'https://playground.4geeks.com/apis/fake/todos';


  const createTodo = async () => {
    const url = url_base + '/user/' + user;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify([])
    };
    const response = await fetch(url, options);
    if (response.ok) {
      const data = await response.json();
      console.log(data)
    } else {
      // tratamiento del error
      console.log('Error: ', response.status, response.statusText)
    }
  }


  const getTodos = async () => {
    const url = url_base + '/user/' + user;
    const options = {
      method: 'GET'
    };
    const response = await fetch(url, options);
    if (response.ok) {
      const data = await response.json();
      console.log(data)
      setList(data)
      // actualizar list mediante setList()

    } else {
      // tratamiento del error
      console.log('Error: ', response.status, response.statusText)
    }
  }


  const updateTodos = async (newTask) => {
    const url = url_base + '/user/' + user;
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify([...list, newTask])
    };
    const response = await fetch(url, options);
    if (response.ok) {
      const data = await response.json();
      console.log(data)
    } else {
      // tratamiento del error
      console.log('Error: ', response.status, response.statusText)
    }
  }


  const deleteTodos = async () => {
    const url = url_base + '/user/' + user;
    const options = {
      method: 'DELETE'
    };
    const response = await fetch(url, options);
    if (response.ok) {
      const data = await response.json();
      setList([])
      console.log(data)
    } else {
      // tratamiento del error
      console.log('Error: ', response.status, response.statusText)
    }

  }


  // Funcion onClick del icono trash
  const deleteTask = (item) => {
    setList(list.filter((element, id) => {
      return item !== element;
    }))
  };


  const addTask = (event) => {
    event.preventDefault();
    if (task.trim() === "") {
      return
    };
    const newTask = {label: task, done: false}
    setList([...list, newTask]);
    updateTodos(newTask)
    setTask("");
  }


  return (
    <div className="container col-xs-10 col-md-8 col-lg-6 my-3">
      <h1 className="text-center">Todos</h1>
      <button onClick={createTodo} className="btn btn-warning m-3">Crear Usuario</button>
      <button onClick={getTodos} className="btn btn-warning m-3">Obtener Tareas</button>
      <button onClick={deleteTodos} className="btn btn-warning m-3">Borrar Usuario</button>
      {/* Formulario para agregar tareas */}

      <div className="mb-3">
        <form onSubmit={addTask}>
          <input className="form-control" placeholder="Write a new task" type="text"
            value={task}
            onChange={(event) => { setTask(event.target.value); }} />
        </form>
      </div>


      {/* Lista de Tareas */}
      <h2 className="text-primary">Todos List</h2>
      <div className="list">
        <ul className="list-group">

          {list.map((item, id) => {
            return <li key={id} className="list-group-item d-flex justify-content-between hidden-icon">
              {item.label} - {item.done ? 'terminado' : 'pendiente'}
              <span key={id} onClick={() => { deleteTask(item) }}>
                <i className="fas fa-trash text-danger"></i>
              </span>
            </li>
          })
          }

          <span className="list-group-item bg-light text-end fw-lighter">
            {list.length === 0 ? "No tasks, add a task" : list.length + " Item Left"}
          </span>
        </ul>
      </div>
    </div>
  );
};

// agregar el contenido finla del input en el estado list 