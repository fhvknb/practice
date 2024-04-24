import React, { useState, FC, ChangeEvent } from 'react';

import { Product } from '../data/entities';


interface Props {
    product: Product,
    callback: (product: Product, quantity: number) => void
}


const ProductItem: FC<Props> = (props) => {

    const [quantity, setQuantity] = useState<number>(1);


    const handleQuantityChange = (ev: ChangeEvent<HTMLSelectElement>): void => {

        setQuantity(+ev.target.value)
    }

    const handleAddToCard = (): void => {
        props.callback(props.product, quantity)
    }

    return <div className="card m-1 p-1 bg-light">
        <h4>
            {props.product.name}
            <span className='badge badge-pill badge-primary float-right'>{props.product.price.toFixed(2)}</span>
        </h4>
        <div className="card-text bg-white p-1">

            {props.product.description}
            <button className="btn btn-success btn-sm float-right" onClick={handleAddToCard}>Add to Cart</button>
            <select className="form-control-inline float-right m-1" onChange={handleQuantityChange}>
                <option >1</option>
                <option >2</option>
                <option >3</option>
            </select>
        </div>
    </div>
}

export default ProductItem;

