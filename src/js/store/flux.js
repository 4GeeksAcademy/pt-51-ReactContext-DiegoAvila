const getState = ({ getStore, getActions, setStore }) => {
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
			crearContacto: function(full_name, email, phone, address) {
				console.log(full_name, email, phone, address);
				const agenda_slug = "DiegoAvila";
				fetch("https://playground.4geeks.com/apis/fake/contact", {
					method: "POST",
					body: JSON.stringify({
						full_name,
						email,
						agenda_slug,
						address,
						phone
					}),
					headers: { "Content-Type": "application/json" }
				})
					.then(response => {
						response.json();
					})
					.then(data => data)
					.catch(error => console.log(error));
			},
			eliminarContacto: function(id) {
				console.log(id);
				fetch("https://playground.4geeks.com/apis/fake/contact/" + id, {
					method: "DELETE"
				})
					.then(response => {
						console.log(response);
						if (response.status === 201) {
							getActions().getUsers();
							// this.getUsers()
							// location.reload();
						}
						return response.json();
					})
					.then(data => console.log(data))
					.catch(error => console.log(error));
			}
		}
	};
};

export default getState;
