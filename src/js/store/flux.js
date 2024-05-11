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
			message: null
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
				const response = await fetch('https://jsonplaceholder.typicode.com/users');
				if (!response.ok) {
					console.log('Error');
					return
				}
				const data = await response.json();
				console.log(data);
				setStore({ users: data });
			},
			settingUser: (user) => {setStore({currentUser: user}) },
			settingMessage: (text) => {setStore({message: text})}
		}
	};
};

export default getState;