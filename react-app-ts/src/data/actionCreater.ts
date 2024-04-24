import { ACTIONS, AddProductsAction, ModifyProductsAction, ResetOrderAction, } from './types';
import { Product } from './entities';



export const addProduct = (...products: Product[]): AddProductsAction => ({
    type: ACTIONS.ADD_PRODUCTS,
    payload: products
})

export const modifyProduct = (product: Product, quantity: number): ModifyProductsAction => ({
    type: ACTIONS.MODIFY_ORDER,
    payload: { product, quantity }
});


export const resetProduct = (): ResetOrderAction => ({
    type: ACTIONS.RESET_ORDER
})