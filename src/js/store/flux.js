const getState = ({ getStore, setStore }) => {
	return {
		store: {
			users: [],
			contacto: []
		},
		actions: {
			getUsers: function() {
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda/DiegoAvila")
					.then(response => response.json())
					.then(data => setStore({ contacto: data }))
					.catch(error => console.log(error));
			},
			getContacto: function() {
				// fetch('https://playground.4geeks.com/apis/fake/contact/agenda/{agenda_slug}')
				// .then((response)=>response.json())
				// .then((data)=>setContenido(data))
				// .catch((error)=>console.log(error))
			}
		}
	};
};

export default getState;
