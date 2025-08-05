// import { useEffect, useState } from 'react';
import { ListItem } from './ListItem';
import './Main.css';
// import { Carousel } from './Carousel';
// import { ConstentData } from '../Context/ConstentData';
// import { useNavigate } from 'react-router-dom';


export const Home = ({ setProductId,filterData }) => {
  // const [filtertext, setFiltertext] = useState(filterData);
  // const [showList, setShowList] = useState(false);
  // const [showCarousel, setShowCarousel] = useState(true);
  // const navigate=useNavigate();
  // const cartImg = [
  //   { id: 1, img: "/images/fruits&veg.jpeg", product: "fruits & vegetables" },
  //   { id: 2, img: "/images/sweets&craving.webp", product: "sweet cravings" },
  //   { id: 3, img: "/images/tea-coffee.jfif", product: "tea ,coffee & more" },
  //   { id: 4, img: "/images/wathroom-cleaner.jpeg", product: "bathroom cleaner" },
  // ];

  // useEffect(() => {
  //   setFiltertext(ConstentData);
  // }, []);

  // const handleFilter = (category) => {
  //   setShowCarousel(false);
  //   if (category === "all") {
  //     setFiltertext(ConstentData);
    

  //   } else {
  //     setFiltertext(
  //       ConstentData.filter(
  //         (item) => item.name.toLowerCase() === category.toLowerCase()
  //       )
  //     );
  //   }
  //   setShowList(true);
   
  // }
  
  return (
    <>
    <ul className="container grid grid-four--cols">
          {filterData.map((item) => (
            <ListItem
              key={item.id}
              item={item}
              setProductId={setProductId}
            />
          ))}
        </ul>
      {/* {showCarousel && <Carousel />}
      <div className="cart-container">
        {showCarousel&&
        <ul className="grid grid-four--cols">
          {cartImg.map((cat) => (
            <li
              className="card"
              key={cat.id}
              onClick={() => handleFilter(cat.product)}
            >
              <img
                src={cat.img}
                className="cart-img"
                alt={cat.product}
              />
              <div className="card-content">
                <p className="cart-text">{cat.product}</p>
              </div>
            </li>
          ))}
          <li className="card" onClick={() => handleFilter("all")}>
            <div className="card-content">
              <img src="images/all-product.webp" alt="All product" className="cart-img"/>
              <p className="cart-text">Show All</p>
            </div>
          </li>
        </ul>}
        
      </div>

      {showList && (
        <ul className="container grid grid-four--cols">
          {filtertext.map((item) => (
            <ListItem
              key={item.id}
              item={item}
              setProductId={setProductId}
            />
          ))}
        </ul>
      )} */}
    </>
  );
};
