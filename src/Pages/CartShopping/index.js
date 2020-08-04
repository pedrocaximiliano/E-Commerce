import React from 'react';
import { useSelector } from 'react-redux';
import './styles.css';

export default function Cart() {
    const products = useSelector(state => state);
    { console.log('fff', products) }

    return (
        products && products.add.length <= 0 ?
            <div style={{ display: 'flex', justifyContent: 'center', height: '50%' }}>
                <p className="emptyCart"> Sem produtos no Carrinho...</p>
            </div> : (
                products.add.map(product => (
                    <section style={{ flex: 1, margin: 10, maxWidth: 300, minWidth: 250, border: 'solid', borderColor: '#929eaa' }}>
                        <div className="card-body">
                            <div className="containerItens">
                                <img style={{ width: 180 }} src={product.url} className="card-img-top" alt={product.name} />
                                <h1 className="name"><strong>{product.name}</strong></h1>
                                <h2 className="unid">{product.unidade}</h2>
                                <h3 className="productValue">DR${product.valor}/unid</h3>
                            </div>
                        </div>
                    </section>
                ))

            ));
}
