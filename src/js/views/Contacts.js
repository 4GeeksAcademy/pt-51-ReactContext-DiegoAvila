import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";

export const Contacts = () => {
	const [state, setState] = useState({
		showModal: false,
		id: null
	});
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getUsers();
	}, []);

	const listaContacto = store.contenidoCard.map((elemento, index) => (
		<ContactCard
			key={index}
			full_name={elemento.full_name}
			email={elemento.email}
			address={elemento.address}
			phone={elemento.phone}
			onDelete={() => setState({ showModal: true, id: elemento.id })}
		/>
	));
	console.log(state);
	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{listaContacto}
					</ul>
				</div>
			</div>
			<Modal show={state.showModal} id={state.id} onClose={() => setState({ showModal: false })} />
		</div>
	);
};
