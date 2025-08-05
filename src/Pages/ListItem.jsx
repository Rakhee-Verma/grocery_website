import { useState } from "react";

export const ListItem = ({ item, setProductId }) => {
  const { id, title, price, img,baseQty, baseLabel } = item;
  const [inCart, setInCart] = useState(false);
  const [count, setCount] =  useState(1);

  const increase = () => setCount(prev => prev + 1);

  const decrease = () => {
    setCount(prev => {
      if (prev <= 1) {
        setInCart(false);
        return 1;
      }
      return prev - 1;
    });
  };

  const handleAddToCart = () => {
    setInCart(true);
    setProductId(id); 
    setCount(1);
  };

  return (
    <li className="card">
      <div>
        <img src={img} alt={title} className="img-div" />
      </div>
      <div className="card-content">
        <p className="item-name">{title}</p>
        <p className="item-Qty">
          {/* Qty: <span>{qty.toLowerCase()}</span> */}
          Qty:  <span>{count * baseQty} {baseLabel}</span>
        </p>
        <h4 className="text-content"> Rs: {price * count}</h4>

        {!inCart ? (
          <button onClick={handleAddToCart} className="btn">
            Add to Cart
          </button>
        ) : (
          <button className="btn">
            <small onClick={decrease} className="addBtn">-</small>
            <span className="num">{count}</span>
            <small onClick={increase} className="addBtn">+</small>
          </button>
        )}
      </div>
    </li>
  );
};