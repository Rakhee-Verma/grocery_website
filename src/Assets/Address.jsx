import { GrClose } from "react-icons/gr";
import { TbCurrentLocation } from "react-icons/tb";
import "./cart.css";
export const Address = ({ closeAddress }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const address = e.currentTarget.location.value;
        console.log("Form submitted:", address);
        closeAddress();
    }
    return (
        <>
            <div className="model-wrapper bg-transparent"></div>
            <div className=" location-container">
                <nav class="header text-center">
                    <h1 className="text">Your Location</h1>
                    <p id="icon" onClick={closeAddress} ><GrClose /></p>
                </nav>
                <form onSubmit={handleSubmit}>
                    <div className="navbar-search">
                        <i className="fa-solid fa-magnifying-glass" />
                        <input
                            className="search-bar"
                            placeholder="Search a new address"
                            type="text"
                            name="location"
                            autoComplete="off"
                        />
                    </div>
                </form>
                <div className="select-address">
                    <span><TbCurrentLocation /></span>
                    <p><h6>Use My Current Location</h6>Enable your current location for better services</p>
                    <button className="enable-btn">Enable</button>
                </div>
            </div>
        </>
    )
}