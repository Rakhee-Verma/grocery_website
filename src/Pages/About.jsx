export const About=()=>{
    return(
        <>
       <div className='container' style={{ marginTop:"2rem" ,}}>
        <div className='row grid grid-two--cols'>
          <div className='about-text'>
            <h1 className='about-heading'>About Our Store</h1>
            <p>We offer a wide selection of high-quality products at affordable prices.
              Our mission is to provide the best online Shopping experience for our customers.
            </p>
            <button type='submit' className='Shopbtn'>Shop Now</button>
          </div>
          <div className='about-image'>
            <img src="/images/food-cart.jpg"  alt="leptop" width=" 100%" height="350px" />
          </div>
        </div>

      </div>
        </>
    )
}