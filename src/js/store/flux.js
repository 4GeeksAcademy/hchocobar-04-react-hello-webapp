const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites : [],
			isLogin : false
		},
		actions: {
			// Use getActions to call a function within a fuction
			addFavorite: (title) => {
				setStore({favorites: [...getStore().favorites, title]})
			},
			removeFavorite: (id) => {
				setStore({favorites: getStore().favorites.filter((item, i) => {
					return i != id;
					})})
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
		}
	};
};

export default getState;
