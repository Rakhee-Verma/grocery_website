import { GrClose } from "react-icons/gr";
// import { Form } from "react-router-dom";
import "./Model.css";
export const Model = ({ closeModel }) => {
    console.log(closeModel, "rrrr");
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.currentTarget.email.value;
        console.log("Form submitted:", email);
        closeModel();
    }
    return (
        <>
            <div className="model-wrapper"></div>
            <div className="modal-container">

                <p id="icon-cross" onClick={closeModel} ><GrClose /></p>
                <h2 id="model-text"> Login/Sign up</h2>
                <li className="para">Using OTP</li>
                <form onSubmit={handleSubmit}>
                    <input className="search-text" placeholder="Enter Phone number/Email Id" type="email" name="email" required autoComplete="off" />
                    <button className="modal-btn" type="submit">Continue</button>
                </form>
                <p id="model-content">By continuing, I accept all Terms and Conditions & Privacy PolicyThis site is protected by reCAPTCHA and the Google - Privacy Policy and & Terms of Service apply.</p>
            </div>
        </>



    )
}