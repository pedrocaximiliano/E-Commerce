import React from 'react';
import { useSelector } from 'react-redux';
import './styles.css';

export default function Cart() {
	const products = useSelector(state => state);

	return (
		products.add.length <= 0 ? <p className="emptyCart"> Sem produtos no Carrinho...</p> : (
			<section style={{flex: 1, margin: 10, maxWidth: 300, minWidth: 300, border: 'solid', borderColor: '#929eaa'}}>
            <div className="card-body">
                <div className="containerItens">
            <img style={{ width:180 }} src={products.add[0].url} className="card-img-top" alt={products.add.name} />
                    <h1 className="name"><strong>{products.add[0].name}</strong></h1>
                    <h2 className="unid">{products.add[0].unidade}</h2>
                    <h3 className="productValue">DR${products.add[0].valor}/unid</h3>
                </div>
            </div>
    </section>
		));
}
