import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { addShoppingProduct} from '../../store/addReducer'

import { Link } from 'react-router-dom';


import { IoIosAddCircle} from 'react-icons/io';
import { MdRemoveCircle } from 'react-icons/md';

import './styles.css';

export default function Products({ products }) {

    const dispacth = useDispatch();

    const [count, setCount] = useState(0);

    const [itemAdd, setItemAdd] = useState('adicionar');
    const [corAddItem, setCorAddItem] = useState('#fff');
    const [borderCorlorItem, setBorderCorlorItem] = useState('blue');
    
    function handlerShoppingCar(prod, action) {
        action === 'add' ? setCount(count + 1) : setCount(count > 0 ? count - 1 : 0);
    }

    function addCart(prod, action, index) {
        if (action === 'add' && count > 0) {
            setItemAdd('adicionado');
            setCorAddItem('#d3d3d3');
            setBorderCorlorItem('black');
            setCount(0);
            dispacth(addShoppingProduct(prod, index));

        } 
    }

    return (
        <section style={{flex: 1, margin: 10, maxWidth: 270, minWidth: 250, border: 'solid', borderColor: '#929eaa', borderRadius: 15}}>
            <div className="card-body">
                <div className="containerItens">
            <img style={{ width:180 }} src={products.url} className="card-img-top" alt={products.name} />

                    <h1 className="name"><strong>{products.name}</strong></h1>
                    <h2 className="unid">{products.unidade}</h2>
                    <h3 className="productValue">DR${products.valor}/unid</h3>
                    <Link to='/' className="viewDetails">view details</Link>
                </div>

                <section className="flexAdd">
                    <MdRemoveCircle className="item" fontSize={25}  onClick={() => handlerShoppingCar(products, 'sub')} />    
                    <input style={{border: 'none', paddingBottom: 5 }}  type="text" name="name" value={count} />
                    <IoIosAddCircle className="item"  fontSize={25} onClick={() => handlerShoppingCar(products, 'add')} />
                    <button className="item"  style={{ backgroundColor: corAddItem, borderColor: borderCorlorItem, margin: 10, borderRadius: 15, fontSize: 14}} onClick={() => addCart(products, 'add')}>{itemAdd}</button>
                </section>
            </div>
    </section>
    );
}
