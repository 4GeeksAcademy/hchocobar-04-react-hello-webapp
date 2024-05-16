const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [{title: "FIRST", background: "white", initial: "white"},
				     {title: "SECOND", background: "white", initial: "white"}],
			cohorte: 'Spain-70',
			user: 'hector',
			isLogin: false,
			users: [],
			title: '',
			currentUser: null,
			message: null,
			planets: null,
			currentPlanetUrl : '',
			currentPlanet: null,
			apiContact: 'https://playground.4geeks.com/contact/',
			agenda: 'spain',
			contacts: null
		},
		actions: {
			exampleFunction: () => {getActions().changeColor(0, "green");}, // Use getActions to call a function within a fuction
			loadSomeData: () => {/**fetch().then().then(data => setStore({ "foo": data.bar }))*/},
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
			},
			getUsersJPH: async () => {
				// Preguntar si estos datos lo tengo en localStorage
				if (localStorage.getItem('usersLocalStorage')) {
					// si, Llevar los datos del localStorage al store (flux)
					setStore({ users: JSON.parse(localStorage.getItem('usersLocalStorage')) });
					return;
				} 
				// no, traer los datos de la API (fetch) y luego grabarlos en el localStorage
				const response = await fetch('https://jsonplaceholder.typicode.com/users');
				if (!response.ok) {
					console.log('Error');
					return
				}
				const data = await response.json();
				console.log(data);
				setStore({ users: data });
				localStorage.setItem('usersLocalStorage', JSON.stringify(data))
			},
			settingUser: (user) => {setStore({currentUser: user}) },
			settingMessage: (text) => {setStore({message: text})},
			settingPlanetURL: (text) => {setStore({currentPlanetUrl: text})},
			settingUsers: (users) => {setStore({users: users}) },
			getPlanets: async () => {
				if (localStorage.getItem('planets')) {
					setStore({ planets: JSON.parse(localStorage.getItem('planets')) });
					return;
				} 
				const response = await fetch('https://www.swapi.tech/api/planets');
				if (!response.ok) {
					console.log('Error');
					return
				}
				const data = await response.json();
				console.log(data);
				setStore({ planets: data.results });
				localStorage.setItem('planets', JSON.stringify(data.results))
			},
			getCurrentPlanet: async () => {
				const uri = getStore().currentPlanetUrl;
				console.log(uri);
				const response = await fetch(uri);
				if (!response.ok) {
					console.log('Error');
					return
				}
				const data = await response.json();
				console.log(data.result);
				setStore({ currentPlanet: data.result });
			},
			getContacts: async () => {
				const uri = getStore().apiContact + 'agendas/' + getStore().agenda + '/contacts'
				const response = await fetch(uri);
				if (!response.ok) {
					console.log('error', response.status, response.statusText);
					return
				}
				const data = await response.json();
				setStore({contacts: data.contacts});
				console.log(data.contacts);
			},
			addContact: async (dataToSend) => {
				const uri = `${getStore().apiContact}agendas/${getStore().agenda}/contacts`;
				const otptions = {
					method: 'POST',
					headers: {
						'Content-type': 'application/json'
					},
					body: JSON.stringify(dataToSend)
				}
				const response = await fetch(uri, otptions);
				if (!response.ok) {
					console.log('error', response.status, response.statusText);
					return
				}
				// const data = await response.json();
				getActions().getContacts();
			}
		}
	};
};

export default getState;