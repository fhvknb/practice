import React, { FC } from "react";
import { StoreData } from "../data/types";
import { Order, Product } from "../data/entities";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";


const mapStateToProps = (data: StoreData) => ({
    order: data.order
});

interface Props {
    order: Order,
    submitCallback: () => void
}

const connectFun = connect(mapStateToProps);


const OrderDetail: FC<Props> = (props) => {


    return <div>
        <h3 className="text-center bg-primary text-white p-2">Order Summary</h3>
        <div className="p-3">
            <table className="table table-sm table-striped">
                <thead>
                    <tr>
                        <th>Quantity</th><th>Product</th>
                        <th className="text-right">Price</th>
                        <th className="text-right">Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {props.order.orderLines.map((line: { product: Product, total: number, quantity: number }) =>
                        <tr key={line.product.id}>
                            <td>{line.quantity}</td>
                            <td>{line.product.name}</td>
                            <td className="text-right">
                                ${line.product.price.toFixed(2)}
                            </td>
                            <td className="text-right">
                                ${line.total.toFixed(2)}
                            </td>
                        </tr>
                    )}
                </tbody>
                <tfoot>
                    <tr>
                        <th className="text-right" colSpan={3}>Total:</th>
                        <th className="text-right">
                            ${props.order.total.toFixed(2)}
                        </th>
                    </tr>
                </tfoot>
            </table>
        </div>
        <div className="text-center">
            <NavLink to="/products" className="btn btn-secondary m-1">
                Back
            </NavLink>
            <button className="btn btn-primary m-1"
                onClick={props.submitCallback}>
                Submit Order
            </button>
        </div>
    </div>
}


export const OrderDetailWrap = connectFun(OrderDetail);
