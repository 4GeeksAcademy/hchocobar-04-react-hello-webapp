const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [{title: "FIRST", background: "white", initial: "white"},
 						 {title: "SECOND", background: "white", initial: "white"}]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {getActions().changeColor(0, "green");},
			loadSomeData: () => { /*fetch().then().then(data => setStore({ "foo": data.bar }))*/ },
			changeColor: (index, color) => {
				// Get the store
				const store = getStore();
				// We have to loop the entire demo array to look for the respective index and change its color
				const demo = store.demo.map((element, i) => {
					if (i === index) {
						element.background = color
					};
					return element;
				});
				// Reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
