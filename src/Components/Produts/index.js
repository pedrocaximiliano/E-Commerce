import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addShoppingProduct, DeleteShoppingProduct } from '../../store/addReducer'

import { Link } from 'react-router-dom';

import { IoIosAddCircle } from 'react-icons/io';

import { MdRemoveCircle } from 'react-icons/md';

import { FcCheckmark } from 'react-icons/fc';

import './styles.css';

export default function Products({ products, idx, index }) {

    const dispacth = useDispatch();
    const [count, setCount] = useState(0);

    const productsRedux = useSelector(state => state);

    const [disabled, setDisable] = useState(false);

    const [itemAdd, setItemAdd] = useState('adicionar');
    const [corAddItem, setCorAddItem] = useState('#fff');
    const [borderCorlorItem, setBorderCorlorItem] = useState('blue');

    function addValuesUnit(prod) {

        let prodValue = [];

        for (let index = 0; index < count; index++) {
            prodValue.push(parseFloat(prod.valor));
        }

        const totalValue = prodValue.reduce((acumulador, valorAtual) => acumulador + valorAtual);

        return totalValue
    }

    function handlerShoppingCar(prod, action) {
        if (!disabled) {
            action === 'add' ? setCount(count + 1) : setCount(count > 0 ? count - 1 : 0);
        }
    }

    function updateStyle() {
        setItemAdd('update');
        setBorderCorlorItem('black');
        setDisable(true);
        setCorAddItem('#f1f1f1')
    }

    useEffect(() => {
        if (productsRedux.add.length > 0) {
            productsRedux.add.map(x => {
                
                if (x.name === products.name) {
                    products.name = x.name;
                    products.unidade = x.unidade;
                    products.url = x.url;
                    products.valor = x.valor;
                    setCount(x.addCount);
                    updateStyle();
                }
                return null;
            });
        }
    })

    function upDate(prod, action) {
        dispacth(DeleteShoppingProduct(prod, prod.name));
        setItemAdd('adicionar');
        setCorAddItem('#fff');
        setBorderCorlorItem('blue');
        setDisable(false);
    }

    function addCart(prod, action, index) {
        if (prod && count > 0) {
            const totalValue = addValuesUnit(prod);

            const addItem = {
                name: prod.name,
                unidade: prod.unidade,
                url: prod.url,
                valor: prod.valor,
                addCount: count,
                totalValue: totalValue,
            }
    
            if (action === 'add' && count > 0) {
                updateStyle();
                dispacth(addShoppingProduct(addItem, index));
            } 
        }         
    }

    return (

        <section style={{ flex: 1, margin: 10, maxWidth: 270, minWidth: 250, border: 'solid', borderColor: '#929eaa', borderRadius: 15 }}>
            <div className="card-body" style={{ background: corAddItem }}>


                <div className="containerItens">
                    <img style={{ width: 180 }} src={products.url} className="card-img-top" alt={products.name} />

                    <h1 className="name"><strong>{products.name.length > 55 ? products.name.substring(55, 0) + '...' : products.name}</strong></h1>
                    <h2 className="unid">{products.unidade}</h2>
                    <h3 className="productValue">DR${products.valor}/unid</h3>
                    <div className="viewAndIcon">
                        <Link to='/' className="viewDetails">view details</Link>
                        {disabled ? <FcCheckmark fontSize={25} /> : null}
                    </div>
                </div>
                <section className="flexAdd">
                    <MdRemoveCircle className="item" fontSize={25} onClick={() => handlerShoppingCar(products, 'sub')} />
                    <input style={{ border: 'none', paddingBottom: 5, borderRadius: 18 }} type="text" name="name" value={count} onChange={() => alert('olko')} />
                    <IoIosAddCircle className="item" fontSize={25} onClick={() => handlerShoppingCar(products, 'add')} />
                    {disabled ?
                        <button className="item" style={{ borderColor: borderCorlorItem, borderRadius: 15, fontSize: 14 }} onClick={() => upDate(products, 'add')}>update</button>
                        :
                        <button className="item" style={{ borderColor: borderCorlorItem, borderRadius: 15, fontSize: 14 }} onClick={() => addCart(products, 'add')}>{itemAdd}</button>
                    }
                </section>
            </div>
        </section>
    );
}
