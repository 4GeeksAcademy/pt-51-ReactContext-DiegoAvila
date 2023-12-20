import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

export const AddContact = () => {
	const [full_name, setFull_name] = useState([]);
	const [email, setEmail] = useState([]);
	const [phone, setPhone] = useState([]);
	const [Address, setAddress] = useState([]);

	function capturarFull_name(event) {
		setFull_name(event.target.value);
	}
	function capturarEmail(event) {
		setEmail(event.target.value);
	}
	function capturarPhone(event) {
		setPhone(event.target.value);
	}
	function capturarAddress(event) {
		setAddress(event.target.value);
	}
	function enviarContacto(full_name, email, Address, phone) {
		console.log(full_name, email, Address, phone);
		actions.crearContacto(full_name, email, Address, phone);
	}

	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form
					// onSubmit={event => {
					// 	event.preventDefault();
					// 	enviarContacto(full_name, email, Address, phone);}}
					onSubmit={() => enviarContacto(full_name, email, Address, phone)}>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							onChange={capturarFull_name}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							onChange={capturarEmail}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							onChange={capturarPhone}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							onChange={capturarAddress}
						/>
					</div>
					<button type="submit" className="btn btn-primary form-control">
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
