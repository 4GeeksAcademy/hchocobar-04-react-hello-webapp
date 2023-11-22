const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [{title: "FIRST", background: "white", initial: "white"},
 						 {title: "SECOND", background: "white", initial: "white"},
						 {title: "SECOND", background: "white", initial: "white"}]
		},
		actions: {
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