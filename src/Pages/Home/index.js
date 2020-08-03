
import React, { useEffect, useState } from 'react';
import Products from '../../Components/Produts';
import ReactLoading from 'react-loading';

import  API  from '../../service/api'

export default function Home() {

	const [products, setproducts] = useState({});

	const [loading, setLoading] = useState(true);

	useEffect(( ) => {
		try {
			getItens()
		} catch (error) {
			alert('erro de conexão')
		}
	}, [])

	async function getItens() {
		const data = await API.get(`https://jsonbox.io/box_f486e56d8b1637c82740/products`)
		if (data.status === 200) {
			 setproducts(data.data);
			 setLoading(false);
		} else {
			alert('erro para carregar os Item');
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
							<div style={{margin: 20}} className="row">{products.length > 0 ?  products.map(product =><Products key={product._id} products={product.form} />) : <h1 className="emptyStore">Loja vazia</h1>}</div>
						</div>
					</>
				)
			}
		</>
	);

}
