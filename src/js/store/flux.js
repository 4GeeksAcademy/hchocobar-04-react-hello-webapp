const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [{title: "FIRST", background: "white", initial: "white"},
 						 {title: "SECOND", background: "white", initial: "white"}],
			cohorte: 'Spain-50',
			isLogin: false,
			myArray: [],
			myObjeto: {},
			users: []
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
				const url = 'https://jsonplaceholder.typicode.com/users';
				const options = {
					method: 'GET'
				};
				const response = await fetch(url, options);
				if (response.ok) {
					const data = await response.json()
					setStore({ "users": data })
				} else {
					console.log('Error:', response.status, response.statusText)
				}
				return
			}
		}
	};
};

export default getState;
