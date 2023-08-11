import React from 'react';
import "../Style/contact.scss";

const Contact = () => {
  return (
    <>
    <section>
        <main>
            <h1>Contact Us</h1>
            <form>
                <div>
                    <label>Name :</label>
                    <input type="text" placeholder='Enter Your Name'/>
                </div>
                <div>
                    <label>Email :</label>
                    <input type="text" placeholder='Enter Your Email'/>
                </div>
                <div>
                    <label>Message :</label>
                    <input type="text" placeholder='Enter Your Message'/>
                </div>
                <button type="submit">Send</button>
                
            </form>
        </main>
    </section>
    </>
  )
}

export default Contact