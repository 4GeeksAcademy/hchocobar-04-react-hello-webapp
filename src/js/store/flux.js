const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			titulo: 'Hola Mundo',
			users: [],
			demo: [{title: "FIRST",
							background: "white",
							initial: "white"},
 						 {title: "SECOND",
							background: "white",
							initial: "white"}]
		},
		actions: {
			// Use getActions to call a function within a fuction
			getUsers: async () => {
				// const url = 'https://jsonplaceholder.typicode.com/users';
				const url = 'https://playground.4geeks.com/apis/fake/contact/agenda/spain46';
				const options = {
					method : 'GET'
				}
				const response = await fetch(url, options);
				if (response.ok) {
					const data = await response.json();
					setStore({users: data })
				} else {
					console.log('Error: ', response.status, response.statusText)
				}
			},
			addContact: async (newUser) => {
				const url = 'https://playground.4geeks.com/apis/fake/contact/';
				const options = {
					method: 'POST',
					headers: {"Content-Type": "application/json"},
					body: JSON.stringify(newUser)
				}
				const response = await fetch(url, options);
				if (response.ok) {
					const data = await response.json();
					console.log(data);
					getActions().getUsers();
				} else {
					console.log('Error', response.status, response.statusText)
				}
			},
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				// Get the store
				const store = getStore();
				// We have to loop the entire demo array to look for the respective index and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});
				// Reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
