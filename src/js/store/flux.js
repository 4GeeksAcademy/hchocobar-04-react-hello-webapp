const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [{title: "FIRST", background: "white", initial: "white"},
 						 {title: "SECOND", background: "white", initial: "white"}]
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
			}
		}
	};
};

export default getState;
