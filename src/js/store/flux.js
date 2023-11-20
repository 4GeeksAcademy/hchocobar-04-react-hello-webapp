const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [{title: "FIRST", background: "white", initial: "white"},
 						 {title: "SECOND", background: "white", initial: "white"}],
			cohorte: 'Spain-50',
			isLogin: false,
			myArray: [],
			myObjeto: {},
			users: [],
			favorites: [{name: 'primer favorito'}, {name: 'segundo favorito'}]
		},
		actions: {
			exampleFunction: () => {getActions().changeColor(0, "green");},  // Use getActions to call a function within a fuction
			loadSomeData: () => { /*fetch().then().then(data => setStore({ "foo": data.bar }))*/ },
			changeColor: (index, color) => {
				const store = getStore();  // Get the store
				// We have to loop the entire demo array to look for the respective index and change its color
				const demo = store.demo.map((element, i) => {
					if (i === index) {
						element.background = color
					};
					return element;
				});
				setStore({ demo: demo });  // Reset the global store
			},
			getUsers: async () => {
				const urlBase = 'https://playground.4geeks.com/apis/fake/contact/agenda'
				const slugAgenda = '/spain50'
				const url = urlBase + slugAgenda;
				const options = {
					method: 'GET'
				};
				const response = await fetch(url, options);
				if (response.ok) {
					const data = await response.json()
					setStore({ "users": data })
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
					getActions().getUsers();

				} else {
					console.log('Error:', response.status, response.statusText)
				}
				return
			},
			deleteContact: async (id) => {
				// url = urlBase + id
				// options (delete)
				// response = await fetch( url, options)
				// if response.ok ----> 
						// data = await response.json()
						// 					getActions().getUsers();

				// sino es ok...
				   // tratamiendo del error
			}
		}
	};
};

export default getState;
