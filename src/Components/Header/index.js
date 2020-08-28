import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { IoMdCart } from 'react-icons/io';
import { FaUserCircle } from 'react-icons/fa';
import { useDispatch } from "react-redux";

import { userLogout } from '../../store/userReducer'

import './styles.css';

export default function Header() {

	const [index, setIndex] = useState(0)

	const [userName] = useState(0)

	const prducts = useSelector(state => state);

	const dispacth = useDispatch();

	useEffect(() => {

		let arrayNameProducts = [];
		if (prducts.add.length > 0) {

			prducts.add.map(car => {
				return arrayNameProducts.push(car.name)
			})
		}
		const newArrayNameProducts = arrayNameProducts.filter((callBack, thisArg) => arrayNameProducts.indexOf(callBack) === thisArg);
		return setIndex(newArrayNameProducts.length)

	}, [prducts]);

	async function onSubmit(e) {
		dispacth(userLogout(userName))
	}

	return (
		<form onSubmit={onSubmit}>
			<nav className="nav">
				<NavLink to="/" activeClassName="active">
					Produtos
			</NavLink>
				<ul className="menu">
					<li>
						<NavLink to="/add" activeClassName="active" >
							Adicionar
						</NavLink>
					</li>
				</ul>
				<ul>
					<NavLink to="/cartShopping" activeClassName="active">
						<IoMdCart fontSize={40} ></IoMdCart>
						<span style={{ color: "white", fontSize: 30 }}>{index}</span>
					</NavLink>
				</ul>
				<ul>
					{!prducts.user[0] ?
						<NavLink to="/login" activeClassName="active">
							<FaUserCircle fontSize={40} ></FaUserCircle>
						</NavLink>
						:
						<div>
							<p>Bem vindo  {prducts.user[0]}</p>
							<button type='submit'>Sair</button>
						</div>
					}
				</ul>
			</nav>
		</form>

	);
}
