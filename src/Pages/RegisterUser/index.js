
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import API from '../../service/api'

export default function Register() {

    const history = useHistory();

    const [form, setForm] = useState({});

    function formChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function onSubmit (e) {
        e.preventDefault();
        const { username, email, password, phone } = form;
        if (!username || !email || !password || !phone) {
          alert("Preencha todos os dados para se cadastrar");
        } else {
          try {
             await API.post(`https://jsonbox.io/box_f486e56d8b1637c82740/user`, {
				username, email, password, phone 
			})
            history.push("/login");

            alert('cadastro realizado com sucesso');
          } catch (err) {
            alert("Ocorreu um erro ao registrar sua conta. T.T");
          }
        }
    }

    return (
        <div style={{flex: 1}}>
            <form style={{ width: '50%'}} className="container mt-5" onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Nome do Usuário</label>
                    <input required="required" onChange={formChange} type="text" name="username" value={form.name} className="form-control" placeholder="Nome..." />
                </div>
                <div className="form-group">
                    <label>E-mail</label>
                    <input required="required" onChange={formChange} type="email" name="email" value={form.unity} className="form-control" placeholder="E-mail..." />
                </div>
                <div className="form-group">
                    <label>Telefone</label>
                    <input required="required" onChange={formChange} type="number" name="phone" value={form.value} className="form-control" placeholder="Telefone..." />
                </div>
                <div className="form-group">
                    <label>Senha</label>
                    <input required="required" onChange={formChange} type="password" name="password" value={form.url} className="form-control" placeholder="senha..." />
                </div>
                <button type="submit" className="btn btn-primary">
                    cadastrar
			</button>
            </form>
        </div>

    );

}
