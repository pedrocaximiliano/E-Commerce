import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './styles.css';

import { DeleteShoppingProduct } from '../../store/addReducer'

import { FaTrashAlt } from 'react-icons/fa';


export default function Cart() {

    const products = useSelector(state => state);
    const [totalValue, setTotalValue] = useState(0);

    const [totalUnid, setTotalUnid] = useState(0);

    const dispacth = useDispatch();

    function deleteState(product, name) {
        dispacth(DeleteShoppingProduct(product, name));
    }

    useEffect(() => {

        let prodValue = [];

        products.add.map((pro) => {

            prodValue.push(parseFloat(pro.totalValue))

            const total = prodValue.reduce((acumulador, valorAtual) => acumulador + valorAtual);

            return setTotalValue(total);
        })

        let arrayNameProducts = [];
        if (products.add.length > 0) {

            products.add.map(car => {
                return arrayNameProducts.push(car.name)
            })
        }
        const newArrayNameProducts = arrayNameProducts.filter((callBack, thisArg) => arrayNameProducts.indexOf(callBack) === thisArg);
        return setTotalUnid(newArrayNameProducts.length)

    }, [products.add]);

    return (
        products && products.add.length <= 0 ?
            <div style={{ display: 'flex', justifyContent: 'center', height: '50%' }}>
                <p className="emptyCart"> Sem produtos no Carrinho...</p>
            </div> : (
                <>
                    {products.add.map((product, index) => (
                        <div key={index}>
                            <div style={{ display: 'flex', flexDirection: 'row', }}>
                                <img style={{ width: 200 }} src={product.url} className="card-img-top" alt={product.name} />
                                <div style={{
                                    flexDirection: 'column',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    margin: 5,
                                }}>
                                    <h1 className="name" style={{ marginTop: 5, fontSize: 24 }}><strong>{product.name} </strong></h1>
                                    <h2 className="name" style={{ marginTop: 5, fontSize: 18 }}> {product.unidade} </h2>
                                    <h3 className="productValue" style={{ marginTop: 5, fontSize: 18 }}>Quantidade: {product.addCount} de R$ {Number(product.valor)}</h3>
                                    <h3 className="productValue" style={{ marginTop: 5, fontSize: 18 }}>Valor total R$ {Number(product.totalValue)}</h3>
                                    <FaTrashAlt style={{ color: 'black', width: 20, height: 20, fontSize: 24, marginTop: 25 }} onClick={() => deleteState(product, product.name)} type='button'>excluir</FaTrashAlt>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'end', margin: 20 }}>
                        <p style={{color: 'black' }}>Quantidade de produtos{' '}
                            <scan>{totalUnid}</scan>
                        </p>
                        <p style={{color: 'black' }}>Valor total ${' '}
                            <scan>
                                {totalValue}
                            </scan>
                        </p>
                    </div>
                </>


            )
    );
}