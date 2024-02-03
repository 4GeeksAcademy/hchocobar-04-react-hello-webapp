const getState = ( {getStore, getActions, setStore} ) => {
	return {
		store: {
			demo: [{title: "FIRST", background: "white", initial: "white"},
 						 {title: "SECOND", background: "white", initial: "white"},
						 {title: "SECOND", background: "white", initial: "white"}],
			titulo: 'Flux con React',
			myArray: [],
			myObject: {},
			isLogin: false,
			cohorte: 'Spain 54',
			favorites: [],
			users: [],
			isAdmin: false,
			agenda: 'agenda-Irene',
			contacts: null
		},
		actions: {
			login: () => {
				setStore( { isLogin: true } );
				localStorage.setItem('isLogin', true)
			},
			logout: () => {
				setStore( { isLogin: false } );
				localStorage.removeItem('isLogin');
				localStorage.removeItem('usuarios');
			},
			getUsers: async () => {
				const userLocal = localStorage.getItem('usuarios')
				if (userLocal) {
					// setStore( () => { users: userLocal } );
					// return
				}
				const url = 'https://jsonplaceholder.typicode.com/users'; 
				const options = {
					method: 'GET'
				};
				const response = await fetch(url, options);
				if (!response.ok) {
					// Tratar error
					console.log('Error en el fetch', response.status, response.statusText)
					return response.status
				}
				const data = await response.json()
				console.log(data)
				// El código con la lógica que necesito 
				setStore( { users: data } )
				localStorage.setItem('usuarios', JSON.stringify(data))
			},
			addContact: async (dataToSend) => {
				const options = {
					method: 'POST',
					body: JSON.stringify(dataToSend),
					headers: {'Content-type': 'application/json'}
				}
				const response = await fetch('https://playground.4geeks.com/apis/fake/contact/', options)
				if (!response.ok) return
				const data = await response.json();
				// invocar el actions que me obtenga todos los contactos.
				getActions().getContacts();
			},
			getContacts: async () => {
				const response = await fetch('https://playground.4geeks.com/apis/fake/contact/agenda/' + getStore().agenda )
				if (!response.ok) return
				const data = await response.json();
				setStore({ contacts: data })
				localStorage.setItem('contactList', JSON.stringify(data))
			},
			exampleFunction: () => {getActions().changeColor(0, "green");},  // Use getActions to call a function within a fuction
			loadSomeData: () => { /*fetch().then().then(data => setStore({ "foo": data.bar }))*/ },
			changeColor: (index, color) => {
				/* const store = getStore();  // Get the store
				// We have to loop the entire demo array to look for the respective index and change its color
				const demo = store.demo.map((element, i) => { */
				const demo = getStore.demo.map((element, i) => { 
					if (i === index) {
						element.background = color
					};
					return element;
				});
				setStore({ demo: demo });  // Reset the global store
			}
		}
	};
};

export default getState;


/* 
Syntax into actions:

1. Usar getActions() para llamar a otra actions(function) dentro de una actions(fuction)
	getActions().changeColor(0, "green")

2. Utilizar getStore() para acceder al valor de un "store" dentro de un "actions"
		2.1
			const store = getStore();
			store.demo.map()
		2.2
			getStore().demo.map()

3. Utilizar setStore() para guardar un valor en un "store" (recordar que store es un objeto)
	setStore({ demo: demo });

*/