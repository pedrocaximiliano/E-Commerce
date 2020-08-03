import React from 'react';
import { NavLink } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { IoMdCart } from 'react-icons/io';


import './styles.css';

export default function Header() {

	const cars = useSelector(state => state);
	return (
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
					<span style={{color: "white", fontSize: 30}}>{cars.add.length}</span>
					</NavLink>
				</ul>
		</nav>
	);
}
