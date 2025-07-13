import { Footeritem } from "./FooterItem"
import './Footer.css';
export const Footer=()=>{
    return(
         <footer>
            <div className="footer-container">
                <div className=" grid grid-five--cols">
                        {Footeritem.map((curEl,id)=>{
                            return(
                            <div  className="footer-text" key={id}>
                                 <h2>{curEl.title}
                                 </h2>
                                 <>
                                    {curEl.items.map((items,i)=><li key={i}>{items}</li>
                                    )}
                                 </>
                            </div>
                       ) })}
                </div>
                <p className="footer-txt"> Copyright © 2025-2026  Grocery Supplies Pvt Ltd</p>
            </div>
        </footer>
    )
}