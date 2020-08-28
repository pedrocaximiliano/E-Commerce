
import React, { useEffect, useState } from 'react';
import Products from '../../Components/Produts';
import ReactLoading from 'react-loading';

import { useSelector } from "react-redux";

import API from '../../service/api'

export default function Home() {

	const productsRedux = useSelector(state => state);

	const [products, setproducts] = useState({});

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		try {
			getItens()
		} catch (error) {
			alert('erro de conexão')
		}
	}, [])

	async function getItens() {
		try {
			const data = await API.get('/products')
			if (data.status === 200) {
				setproducts(data.data);
				setLoading(false);
			} else {
				alert('erro para carregar os Item');
			}
		} catch (error) {
			alert('not found')
		}
	}

	return (
		<>
			{loading ?
				<div className="loading">
					<ReactLoading type={'spinningBubbles'} color={'#ccc'} height={167} width={175} />
				</div>
				: (
					<>
						<div>
							<div style={{ margin: 20 }} className="row">
								{products.length > 0 ?
									products.map((product, i) => 
									<Products key={product._id}
										idx={productsRedux.add.length > 0 ? productsRedux.add : 0} index={i} products={product.form} />
									) :
									<h1 className="emptyStore">Loja vazia</h1>
								}
							</div>
						</div>
					</>
				)
			}
		</>
	);

}
