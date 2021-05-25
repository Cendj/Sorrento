import '../Styles/Contact.css'

export function Contact ( props ) {
    return(
        <div className="Contact">
            <h2>Contact Us</h2>
            <h3>Information and Bookings</h3> 
            <p>0435 123 456</p>
            <p>42 Holyrood Avenue</p>
            <p>Sorrento VIC 3943</p>

            
            <form id="contact-form" action="https://example.com/handler"
            method="post">
                {/* Name */}
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text"placeholder="Your Name"/>
                {/* Email */}
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email" placeholder="you@domain.com" />
                
                {/* Message */}
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5"cols="24" placeholder="Hi, how is it going?"></textarea>
                <button type="reset">Clear</button>
                <button type="submit">Send</button>
            </form>
        </div>

            
        
    )
}

export default Contact