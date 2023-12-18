const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contacto: [],
			contenidoCard: []
		},
		actions: {
			getUsers: function() {
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda/DiegoAvila")
					.then(response => response.json())
					.then(data => setStore({ contenidoCard: data }))
					.catch(error => console.log(error));
			},
			crearContacto: function(enviarContacto) {
				fetch("https://playground.4geeks.com/apis/fake/contact", {
					method: "POST",
					body: JSON.stringify([]),
					headers: { "Content-Type": "application/json" }
				})
					.then(response => {
						response.json();
					})
					.then(data => contacto(data))
					.catch(error => console.log(error));
			}
		}
	};
};

export default getState;
