import { StoreData } from './types';
import { modifyProduct } from './actionCreater';
import { connect } from 'react-redux';
import ProductList from '../components/ProductList';

const mapStateToProps = (data: StoreData) => ({
    products: data.products,
    categories: [...new Set(data.products.map(p => p.category))],
    order: data.order
})

const mapDispatchToProps = {
    addToOrder: modifyProduct
}

const connectFun = connect(mapStateToProps, mapDispatchToProps);

export const ConnectProductList= connectFun(ProductList);