const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			favorites : []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			getUsers: async () => {
					// 1. Verifico si tengo los usersLocal en el localStorage
					//   1.1. Si están, actualizo "estado" mediante setUsers() desde los datos del "localStorage"
					//   1.2. Sino no están, realizo el fetch, guardo datos en el "estado" y en el "localStore"
					//     1.2.1. Realizo el fetch()
					//     1.2.2. Almaceno data en el "estado"
					//     1.2.3. Almaceno data en "localStorage"
					if (localStorage.getItem("usersLocal") === null) {  // 1.
					  const response = await fetch("https://jsonplaceholder.typicode.com/users")  // 1.2.1
					  if (response.ok) {
						const data = await response.json()
						// setUsers(data)  // 1.2.2.
						localStorage.setItem('usersLocal', JSON.stringify(data))  // 1.2.3
					  } else {
						console.log("error: ", response.status, response.statusText);
					  }
					}
			},
			getPosts: async () => {
				if (localStorage.getItem('postsLocal') === null) {
				  const url = "https://jsonplaceholder.typicode.com/posts/"
				  const request = {
					method: "GET"
				  }
				  const response = await fetch(url, request)
				  if (response.ok) {
					const data = await response.json();
					// setPosts(data)
					localStorage.setItem("postsLocal", JSON.stringify(data))
				  } else {
					// redirecionar a una pagina 404
					// analizar el error que me devuelve el back (no javascript)
					   // si el user es incorrecto, entonces avisarle al usuario
					   // 
					// si el erros est timeout redireccionar a un Intetnte mas tarde
					console.log("error: ", response.status, response.statusText);
				  }
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
