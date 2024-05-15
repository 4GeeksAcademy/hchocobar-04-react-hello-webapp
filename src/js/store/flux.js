const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			cohorte: 'Spain-65',
			isLogin: false,
			favorites: [],
			characters: [],
			currentCharacters: {},
			planets: [],
			contacts: [],
			currentContact: {full_name: '', phone: '', email: '', address:''}
		},
		actions: {
			currentContact: (contact) => { setStore({ currentContact: contact}) },
			currentCharacters: (character) => { setStore({ currentCharacters: character}) },
			addFavorites: (item) => {
				const store = getStore();
				setStore({favorites: [...store.favorites, item ]})  // opcion 1
				// setStore({favorites: [ ...getStore().favorites, item  ]})  // opcion 2
			},
			removeFavorites: (name) => {
				const store = getStore();
				setStore({favorites: store.favorites.filter( (item, id) => { return item != name; }  )})
			},
			getCharacters: async () => {
				let characters = localStorage.getItem('characters')
				// verifico si characters es undefined o obtuve algo
				if (characters) {
					setStore({ characters: JSON.parse(characters)})
					// Que pasa si lo que tengo en el localStorage es distinto a lo que tengo en la API
					return
				}
				// const url = 'https://www.swapi.tech/api/' + 'people';
				const url = process.env.API_URL + 'people';
				const options = {method: 'GET'};
				const response = await fetch(url, options);
				// console.log('response: ',response);
				if (response.ok) {
					const data = await response.json();
					// console.log('data', data)
					// console.log('data.message', data.message)
					// console.log('data.results', data.results)
					// 1. grabar los datos en el store
					setStore({ characters: data.results })
					// 2. grabar los datos en el localStorage
					localStorage.setItem('characters', JSON.stringify(data.results))
				} else {
					// tratamos el error
					console.log('Error:', response.status, response.statusText);
				}
			},
			getCharactersDetails: async (id) => {
				const url = process.env.API_URL + 'people/' + id;
				const options = {method: 'GET'};
				const response = await fetch(url, options);
				if (response.ok) {
					const data = await response.json();
					console.log('data', data)
					console.log('data.message', data.message)
					console.log('data.result', data.result)   // va a pasar algo
					console.log('descripiton', data.result.description)
					console.log('properties', data.result.properties)
					// 1. grabar los datos en el store
					setStore({ currentCharacters: data.result })
					// 2. grabar los datos en el localStorage
					// localStorage.setItem('characters', JSON.stringify(data.results))
				} else {
					// tratamos el error
					console.log('Error:', response.status, response.statusText);
				}
			},
			getContacts: async () => {
				const urlBase = 'https://playground.4geeks.com/apis/fake/contact/agenda'
				const slugAgenda = '/spain50'
				const url = urlBase + slugAgenda;
				const options = {
					method: 'GET'
				};
				const response = await fetch(url, options);
				if (response.ok) {
					const data = await response.json()
					setStore({ "contacts": data })
					localStorage.setItem('usersLocal', JSON.stringify(data));
				} else {
					console.log('Error:', response.status, response.statusText)
				}
				return
			},
			createContact: async (newContact) => {
				const urlBase = 'https://playground.4geeks.com/apis/fake/contact/'
				const slugAgenda = '/spain50'
				const url = urlBase;
				console.log(newContact)
				const options = {
					method: 'POST',
					headers: {'Content-Type': 'application/json'},
					body: JSON.stringify(newContact)
				};
				const response = await fetch(url, options);
				if (response.ok) {
					const data = await response.json()
					getActions().getContacts();

				} else {
					console.log('Error:', response.status, response.statusText)
				}
				return
			},
			deleteContact: async (id) => {
				const urlBase = 'https://playground.4geeks.com/apis/fake/contact/'
				const url = urlBase + id
				const options = {
					method: 'DELETE'
				}
				const response = await fetch(url, options)
				if (response.ok) {
					const data = await response.json()
					getActions().getContacts();
				} else {
					// tratamiendo del error
					console.log('Error:', response.status, response.statusText)
				}
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