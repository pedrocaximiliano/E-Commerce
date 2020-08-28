import React, { useState } from 'react';
import { Link, withRouter, useHistory } from "react-router-dom";

import { useDispatch } from "react-redux";

import API from '../../service/api'
import { user } from '../../store/userReducer'

import './styles.css';

function Login() {

    const dispacth = useDispatch();

    const [form, setForm] = useState({});

    const history = useHistory();

    function formChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function onSubmit(e) {
       e.preventDefault()
        const { username, password } = form;

        if (!username || !password) {
            alert("Preencha e-mail e senha para continuar!");
        } else {
            try {
                const response = await API.get(`https://jsonbox.io/box_f486e56d8b1637c82740//user?q=password:${password},username:${username}`);
                if (response.data) {
                    dispacth(user(response.data[0].username));
                    history.push("/");
                } else {
                    alert("usuario não encontrado");
                }
            } catch (err) {
                alert("Houve um problema com o login, verifique suas credenciais. T.T");
            }
        }
    }

    return (
        <div style={{ flex: 1 }}>
            <form style={{ width: '50%' }} className="container mt-5" onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Usuário</label>
                    <input required="required" onChange={formChange} type="text" name="username" value={form.name} className="form-control" placeholder="email, usuário, nome..." />
                </div>
                <div className="form-group">
                    <label>Senha</label>
                    <input required="required" onChange={formChange} type="password" name="password" value={form.url} className="form-control" placeholder="senha..." />
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                    <button type="submit" className="btn btn-primary">
                        Logar
			    </button>
                    <Link to="/registro">
                        <p style={{ color: 'black' }}>Não sou cadastrado</p>
                    </Link>
                </div>
            </form>
        </div>
    );

}

export default withRouter(Login);
