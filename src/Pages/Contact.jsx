import { Link } from 'react-router-dom'
export const Contact = () => {
  return (
    <>
      <div className='container'>
        <h1>Contact Us</h1>
        <p>Get in tuch with us.We are always here to help you</p>
        <div className='grid grid-three--cols'>
            <ul className='contact-list'>
              <li>FAQs</li>
              <li>Oedering</li>
              <li>Shipping</li>
              <li>Return and Exchange</li>
            </ul>
          <div className='contected-form'>
            <form>
                <div>
                  <label htmlFor="fullname" className="form-label ">Full Name</label>
                  <input
                    type="text"
                    id="fullname"
                    className="form-control"
                    placeholder="Enter your name"
                    autoComplete="off"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="you@example.com"
                    autoComplete="off"
                  />
                </div>
              <div>
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="form-control"
                  placeholder="Title of your message"
                  autoComplete="off"
                />
              </div>
              <div>
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  className="form-control"
                  placeholder="Enter your message........."
                />
              </div>

              <button type="submit" className="contact-btn">Send Message</button>
            </form>
          </div>
          <div className='contact-details'>
            <h6>Support Hours:</h6>
            <p className='text'>Mon-fri 9:00am-5:00pm PST
              <span className='d-block'>*Excludes Holidays</span>
            </p>
            <p className='text'>Looking for more info on products,shipping,febric,and more.</p>
            <Link className="nav-link" to="/"><span className='view'>VIEW FAQ</span></Link>
          </div>
        </div>
      </div>
    
    </>
  )
}

