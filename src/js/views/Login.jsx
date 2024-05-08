// 1. Import React, Hooks
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


// 5 Exportar y 2 Crear el componente
export const Login = () => {
  // 3 Code JS
  // 3.1 Declarar estados
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkedMe, setCheckedMe] = useState(false);
  const [type, setType] = useState('1')
  const [viewPassword, setViewPassword] = useState(false)
  const navigate = useNavigate();


  // 3.x - Definir las funciones de los onChange
  // Funcion Estandar
  function handleEmail(event) {
    console.log(event);
    // console.log(event.target)
    // console.log(event.target.value)
    setEmail(event.target.value)
  }
  // Función flecha
  const handlePassword = (event) => {
    setPassword(event.target.value)
  }
  // Función flecha reducida
  const handleCheckedMe = event => setCheckedMe(event.target.checked);  // chequed para inputs: radio y checkbox


  // 3.x Manejador de Onclik
  const handleReset = () => {
    setEmail('');
    setPassword('');
    setCheckedMe(false);
  }


  // Maneja el ver password
  const handleViewPasswort = () => setViewPassword(!viewPassword)


  // 3.x Manejar el Submit del Formulario
  const handleSumbit = (event) => {
    // Tiene que ver con el DOM no tome el control, sino que el contron lo mantenga el DOM Virtual de React
    event.preventDefault();  // 1. Siemproe como primera línea de mi manejador del Submit
    // console.log(event)
    // Incio de la Lógica de lo que mi formulario realice.
    const dataToSend = {
      email: email,
      password: password,
      accept: checkedMe
    }
    console.log(dataToSend)
    // Fin de la  Lógica de lo que mi formulario realice.
    handleReset()
    // Redicccionar a otra pagina (Error, ingreso)
    // <Link to="/posts">Posts</Link>
    navigate('/users')
  }


  // 4 última instrucción JS, que retorna un solo elemento HTML
  return (
    <>  {/* fragment */}
      <h1>Login</h1>
      <div className="container text-start">
        <form onSubmit={handleSumbit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
              value={email} onChange={handleEmail} />  {/* 3.1. value 3.2. onChange */}
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>

          <div className="input-group mb-3">
            <div className="form-floating">

              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type={viewPassword ? "text" : "password"} className="form-control" id="exampleInputPassword1"
                value={password} onChange={handlePassword} />
            </div>
            <span className="input-group-text" onClick={handleViewPasswort}>
              {viewPassword ? <i className="far fa-eye-slash"></i> : <i className="far fa-eye"></i>}
            </span>
          </div>
          
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"
              checked={checkedMe} onChange={handleCheckedMe} />
            <label className="form-check-label" htmlFor="exampleCheck1">Aceptar condiciones</label>
          </div>
          <select className="form-select" aria-label="Default select example"
            value={type} onChange={event => setType(event.target.value)}>
            <option defaultValue>Open this select menu</option>
            <option value="1">User</option>
            <option value="2">Teacher</option>
            <option value="admin">Admin</option>
          </select>
          <button type="submit" className="btn btn-primary mt-3">Submit</button>
          <button type="reset" className="btn btn-secondary ms-3 mt-3"
            onClick={handleReset}>
            Cancel
          </button>
        </form>
      </div>
    </>
  )
}