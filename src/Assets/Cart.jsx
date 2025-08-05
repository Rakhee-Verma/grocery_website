// import { useState } from 'react';
import { MdDelete } from "react-icons/md";
import './cart.css'
export const Cart = ({ cartAllProduct, setCartAllProduct }) => {
    // const [count, setCount] = useState(1);

    const increase = id => {
        setCartAllProduct(prev =>
            prev.map(item =>
                item.id === id
                    ? { ...item, qty: parseInt(item.qty) + 1 }
                    : item
            )
        );
    };

    const decrease = id => {
        setCartAllProduct(prev =>
            prev.map(item =>
                item.id === id && item.qty > 1
                    ? { ...item, qty: parseInt(item.qty) - 1 }
                    : item
            )
        );
    };
    const handleDeleteBtn = id => {
        setCartAllProduct(prev =>
            prev.filter(item => item.id !== id)
        );
    };
    console.log("filterObject", cartAllProduct);
    return (
        <>
            <div className="container">
                {cartAllProduct.map((item) => {
                    return <li className="cart">
                        <div className='cart-image' >
                            <img src={item.img} alt={item.title} />
                        </div>
                        <div className="cart-data">
                            <div className="cart-text">
                                <p className="item-name">{item.title}</p>
                                <p className="item-Qty">
                                    {/* Qty: <span>{item.qty}</span> */}
                                     Qty:  {item.baseQty * item.qty} {item.baseLabel}
                                </p>
                            </div>
                            <div className="cart-price">
                                {/* <h4>Rs: {item.price}</h4> */}
                                 Total Price: ₹{item.price * item.qty}
                            </div>
                            <div className="cart-btn">
                                <button className="btn">
                                    <small onClick={() => decrease(item.id)} className="addBtn">-</small>
                                    <span className="num">{item.qty}</span>
                                    <small onClick={() => increase(item.id)} className="addBtn">+</small>
                                </button>
                            </div>
                            <MdDelete className="deletebtn" onClick={() => handleDeleteBtn(item.id)} />
                        </div>

                    </li>
                })}
                {cartAllProduct.length === 0 && <div className="cart-col-2">
                    <h4>No Product Available in Cart</h4>
                </div>}
            </div>
        </>
    )
}