import { Outlet } from "react-router-dom";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
// import { Header } from "./Header/Header";

const AppLayOut = ({ onFilterText,
    onCategorySelect,
    onHeaderItem,
    cartAllProduct }) => {
    return (
        <>
            <Header onFilterText={onFilterText}
                onCategorySelect={onCategorySelect}
                onHeaderItem={onHeaderItem}
                cartAllProduct={cartAllProduct} />
            <Outlet />
            <Footer />
        </>
    )
}
export default AppLayOut; 