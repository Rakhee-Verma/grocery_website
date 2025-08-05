import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { Cart } from './Assets/Cart';
import { ConstentData } from './Context/ConstentData';
import { useEffect, useState } from 'react';
import { Home } from './Pages/Home';
import AppLayOut from './Components/AppLayOut';
import { About } from './Pages/About';
import { Shop } from './Pages/Shop';
import { Blog } from './Pages/Blog';
import { Contact } from './Pages/Contact';

const App = () => {
  // ----Search and filter state----
  const [searchItems, setSearchItems] = useState(ConstentData);
  const [filterText, setFilterText] = useState('');
  const handleFilterText = (text) => setFilterText(text);
  const handleCategoryFilter = filteredList => {
    setSearchItems(filteredList);
  };

  const handleHeaderClick = category => {
    if (category === 'Home') {
      setSearchItems(ConstentData);
    } else {
      setSearchItems(ConstentData.filter(e => e.product === category));
    }
  };

  const filteredData = searchItems.filter(item =>
    item.product.toLowerCase().includes(filterText.toLowerCase()) || item.name.toLowerCase().includes(filterText.toLowerCase())
  );
  //-----Cart state-----
  const [productId, setProductId] = useState('');
  const [cartAllProduct, setCartAllProduct] = useState([]);
  useEffect(() => {
    if (!productId) return;
    const filterObject = ConstentData.find(product => product.id === productId);
    if (filterObject) {
      setCartAllProduct(prev => [...prev, filterObject]);
    }
  }, [productId]);
  // ----Router-------
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayOut onFilterText={handleFilterText}
        onCategorySelect={handleCategoryFilter}
        onHeaderItem={handleHeaderClick}
        cartAllProduct={cartAllProduct} />,
      children: [
        {
          path: "/",
          element: <Home filterData={filteredData} setProductId={setProductId} filterText={filterText} />
        },
        { path: "/about", element: <About /> },
        { path: "/shop", element: <Shop /> },
        { path: "/blog", element: <Blog /> },
        { path: "/contact", element: <Contact /> },
        {
          path: "/cart",
          element: <Cart cartAllProduct={cartAllProduct} setCartAllProduct={setCartAllProduct} />
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  );
};

export default App;




