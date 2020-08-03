import React, { useState } from "react";

import ReactLoading from 'react-loading';

import API from '../../service/api'

export default function Add() {

	const [form, setForm] = useState({});

	const [loading, setLoading] = useState(false);

	function formChange(e) {
		setForm({ ...form, [e.target.name]: e.target.value });
	}

	function onSubmit(e) {
		e.preventDefault();
		
		postItem(form);

	}

	async function postItem() {
		setLoading(true);
		try {
			const data = await API.post(`https://jsonbox.io/box_f486e56d8b1637c82740/products`, {
				form
			})

			if (data.status === 200) {
				alert('item salvo com sucesso!');
				setLoading(false);

			} else {
				alert('erro ao salvar Item');
			}
		} catch (error) {
			alert('erro de conexão')
		}
	}

	return (
		<>
		{loading ?
			<div className="loading">
				<ReactLoading type={'spinningBubbles'} color={'#ccc'} height={167} width={175} />
			</div>
			
			: (
		<form className="container mt-5" onSubmit={onSubmit}>
			<div className="form-group">
				<label>Nome do Item</label>
				<input required="required"  onChange={formChange} type="text" name="name" value={form.name} className="form-control" placeholder="Nome..." />
			</div>
			<div className="form-group">
				<label>unidade:</label>
				<input required="required"  nChange={formChange} type="text" name="unidade" value={form.unity} className="form-control" placeholder="Unidade..." />
			</div>
			<div className="form-group">
				<label>valor</label>
				<input  required="required"  onChange={formChange} type="text" name="valor" value={form.value} className="form-control" placeholder="valor..." />
			</div>
			<div className="form-group">
				<label>imagem (URL):</label>
				<input required="required"  onChange={formChange} type="text" name="url" value={form.url} className="form-control" placeholder="URL:https://produto" />
			</div>
			<button type="submit" className="btn btn-primary">
				Adicionar item
			</button>
		</form>
		)
			}
		</>
	);
}