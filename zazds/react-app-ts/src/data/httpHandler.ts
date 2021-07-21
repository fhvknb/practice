import Axios from 'axios';

import { Product, Order, } from './entities';

const protool = "http";
const hostname = "localhost";
const port = 4600;


const url = {
    products: `${protool}://${hostname}:${port}/products`,
    orders: `${protool}://${hostname}:${port}/orders`,
}


export class HttpHander {
    static loadProducts(callback: (products: Product[]) => void): void {
        Axios.get(url.products).then(response => callback(response.data))
    }

    static storeOrder(order: Order, callback: (id: number) => void): void {
        let orderData = {
            lines: [...order.orderLines.values()].map(ol => ({
                productId: ol.product.id,
                productName: ol.product.name,
                quantity: ol.quantity
            }))
        }
        Axios.post(url.orders, orderData).then(response => {
            console.log(response.data);
            callback(response.data.id)

        })
    }
}