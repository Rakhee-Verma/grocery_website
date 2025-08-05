// Header.js
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Model } from '../Model';
import { CategoryModal } from '../CategoryModal';
import { FaCartShopping } from 'react-icons/fa6';
import { NavLink, useNavigate} from 'react-router-dom';
import './Header.css';
import { Address } from '../../Assets/Address';

// const uniqueList = [
//     'Home',
//     ...new Set(ConstentData.map(item => item.product)),
// ];

export const Header = ({ onFilterText, onCategorySelect, onHeaderItem, cartAllProduct }) => {
    const navigate = useNavigate();
    const [showModal, setShowModel] = useState(false);
    const [showCategoryModal, setShowCategoryModal] = useState(false);
    const [, setShowMenu] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [showAddress, setShowAddress] = useState('false')
    const closeAddress = () => setShowAddress(false)
    const closeModel = () => setShowModel(false);

    const handleSearchInput = e => {
        const val = e.target.value;
        setSearchText(val);
        onFilterText(val);
    };

    const handleHeaderClick = item => {
        setSearchText('');
        onHeaderItem(item);
        if (item === 'Home') {
            navigate('/');
        }
    };

    const handleCategoryClick = categoryName => {
        setSearchText('');
        setShowCategoryModal(false);
        onCategorySelect(categoryName);
    };

    const toggleMenu = () => setShowMenu(prev => !prev);


    return (
        <>
            <header className="section-navbar">
                <div className="container">
                    <div className="grid navbar-grid">
                        <div className="logo">
                            <img src="/images/logo.jpg" alt="logo" width={90} height={40} />
                        </div>
                        <div className="address" onClick={() => setShowAddress(!showAddress)}>
                            <i className="fa-solid fa-location-dot" />
                            <p>Select Address</p>
                        </div>
                        {showAddress && <Address closeAddress={closeAddress} />}
                        <div className="nav-search">
                            <i className="fa-solid fa-magnifying-glass" />
                            <input
                                className="search"
                                placeholder="Search For Products"
                                value={searchText}
                                onChange={handleSearchInput}
                            />
                        </div>
                        <div className="navbar-login" onClick={() => setShowModel(!showModal)}>
                            <p>Login/Sign </p>
                            <p>up</p>
                        </div>
                        {showModal && <Model closeModel={closeModel} />}
                        <NavLink to="/cart" className="topBarIcon">
                            <FaCartShopping />
                            <span className="topbarIconBadge">{cartAllProduct.length}</span>
                        </NavLink>
                    </div>

                    <nav>
                        <div className="navbar-item">
                            <p>Shop By</p>
                            <div className="item">
                                <li>Category</li>
                                <div onClick={() => setShowCategoryModal(prev => !prev)} className='iconDownUp'>
                                    {showCategoryModal
                                        ? <i className="fa-solid fa-caret-up" />
                                        : <i className="fa-solid fa-caret-down" />}
                                </div>
                                {showCategoryModal && (
                                    <CategoryModal closeCategoryModal={handleCategoryClick} />
                                )}
                            </div>
                        </div>
                        <div className="ham-menu">
                            <button onClick={toggleMenu}>
                                <GiHamburgerMenu />
                            </button>
                        </div>
                        <div>
                            <ul>
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="/about">About Us</NavLink></li>
                                <li><NavLink to="/shop">Shop</NavLink></li>
                                <li><NavLink to="/blog">Blog</NavLink></li>
                                <li><NavLink to="/contact">Contact Us</NavLink></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
};
