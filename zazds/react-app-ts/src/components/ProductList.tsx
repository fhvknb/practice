import React, { useState, FC, useEffect, useCallback } from 'react';

import Header from './Header';
import ProductItem from './ProductItemFC';
import CategoryList from './CatogroyList';
import { Product, Order } from '../data/entities';


interface Props {
    products: Product[],
    categories: string[],
    order: Order,
    addToOrder: (product: Product, quantity: number) => void
}


const ProductList: FC<Props> = (props) => {

    const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
    const [products, setProducts] = useState<Product[]>([]);



    const selectCategory = (cat: string): void => {
        setSelectedCategory(cat);
    }


    const callbackProduct = useCallback<() => Product[]>(() => props.products.filter(p => selectedCategory === "ALL" || p.category === selectedCategory), [props.products, selectedCategory]);

    useEffect(() => {
        setProducts(callbackProduct());
    }, [selectedCategory, callbackProduct])

    return <div >
        <Header order={props.order} ></Header>
        <div className="container-fluid">
            <div className="row">
                <div className="col-3 p-2">
                    <CategoryList categories={props.categories}
                        selected={selectedCategory}
                        selectCategory={selectCategory}>

                    </CategoryList>
                </div>
                <div className="col-9 p-2">
                    {
                        products.map(p => <ProductItem key={p.id}
                            product={p}
                            callback={props.addToOrder}></ProductItem>)
                    }
                </div>
            </div>
        </div>
    </div>
}

export default ProductList;

