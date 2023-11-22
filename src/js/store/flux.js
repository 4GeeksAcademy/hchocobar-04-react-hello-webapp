const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			cohorte: 'Spain-50',
			isLogin: false,
			favorites: ['item 1', 'item 2', 'item 3'],
			characters: [],
			currentCharacters: {},
			planets: [],
		},
		actions: {
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