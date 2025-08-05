import { useEffect, useState } from "react";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
// import { ListItem } from "./ListItem";
// import { ConstentData } from "../Context/ConstentData";
export const Carousel = () => {
    const [perPageImg, setPerPageImg] = useState(1);
    const images = [
        { id: 1, img: "/images/woman-superpower.webp" },
        { id: 2, img: "/images/supermarket-banner.avif" },
        { id: 3, img: "/images/food-cart.jpg" },
        { id: 4, img: "/images/Detergent.jpg" },
    ];
    // const postsPerPageImg = 1;
    // const TotalPages = Math.ceil(images.length / postsPerPageImg)
    // const startIndex = (perPageImg - 1) * postsPerPageImg
    // const currentPage = images.slice(startIndex, startIndex + postsPerPageImg)
    // console.warn('currentPage', currentPage)
    // const handleNextPage = () => {
    //     if (perPageImg < TotalPages) setPerPageImg((pre) => pre + 1)
    // }

    // const handlePrevPage = () => {
    //     if (perPageImg > 1) setPerPageImg((pre) => pre - 1)
    // }
const totalPages = images.length;

  useEffect(() => {
    const iv = setInterval(() => {
      setPerPageImg(prev => (prev < totalPages ? prev + 1 : 1));
    }, 3000);
    return () => clearInterval(iv);
  }, [totalPages]);

  const handleNextPage = () =>
    setPerPageImg(prev => (prev < totalPages ? prev + 1 : 1));
  const handlePrevPage = () =>
    setPerPageImg(prev => (prev > 1 ? prev - 1 : totalPages));
    return (
        <div className="carousel-container">
            <div className="carousel-slide"
            style={{ transform: `translateX(-${(perPageImg - 1) * 100}%)` }}
            >
                {images.map((item) => (
                    <img
                        key={item.id}
                        src={item.img}
                        alt={`slide`}
                        className="carousel-img"
                    />
                ))}
            </div>
            <button className="carousel-btn prev"><GrFormPrevious onClick={handlePrevPage} /></button>
            <button className="carousel-btn next"><MdNavigateNext onClick={handleNextPage} /></button>
        </div>
    );
};
// MainCart.jsx
// export const MainCart = ({ setProductId }) => {
//   const [filterData, setFilterData] = useState(ConstentData);
//   const [showList, setShowList] = useState(false);

//   const cartImg = [
//     { id: 1, img: "/images/fruits&veg.jpeg", product: "fruits & vegetables" },
//     { id: 2, img: "/images/sweets&craving.webp", product: "sweet cravings" },
//     { id: 3, img: "/images/tea-coffee.jfif", product: "tea ,coffee & more" },
//     { id: 4, img: "/images/wathroom-cleaner.jpeg", product: "bathroom cleaner" },
//   ];

//   useEffect(() => {
//     setFilterData(ConstentData);
//   }, []);

//   const handleFilter = (category) => {
//     if (category === "all") {
//       setFilterData(ConstentData);
//     } else {
//       setFilterData(
//         ConstentData.filter(
//           (item) => item.name.toLowerCase() === category.toLowerCase()
//         )
//       );
//     }
//     setShowList(true);
//   };

//   return (
//     <>
//       <div className="cart-container">
//         <ul className="grid grid-four--cols">
//           {cartImg.map((cat) => (
//             <li
//               className="card"
//               key={cat.id}
//               onClick={() => handleFilter(cat.product)}
//             >
//               <img
//                 src={cat.img}
//                 className="cart-img"
//                 alt={cat.product}
//               />
//               <div className="card-content">
//                 <p className="cart-text">{cat.product}</p>
//               </div>
//             </li>
//           ))}
//           <li className="card" onClick={() => handleFilter("all")}>
//             <div className="card-content">
//               <p className="cart-text">Show All</p>
//             </div>
//           </li>
//         </ul>
//       </div>

//       {showList && (
//         <ul className="container grid grid-four--cols">
//           {filterData.map((item) => (
//             <ListItem
//               key={item.id}
//               item={item}
//               setProductId={setProductId}
//             />
//           ))}
//         </ul>
//       )}
//     </>
//   );
// };