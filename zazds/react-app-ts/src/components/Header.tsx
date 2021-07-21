import React, { FC } from "react";
import { NavLink } from 'react-router-dom'
import { Order } from '../data/entities';

interface Props {
    order: Order
}

const Header: FC<Props> = (props) => {

    let count = props.order.productCount;

    return <div className="p-1 bg-secondary text-white text-right">
        {count === 0 ? "(No Selection)" : `${count} product(s), $${props.order.total.toFixed(2)}`}
        {/* <button className="btn btn-sm btn-primary m-1"></button> */}

        <NavLink to="/order" className="btn btn-sm btn-primary m-1">Submit Order</NavLink>
    </div>
}
export default Header;
