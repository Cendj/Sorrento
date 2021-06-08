import '../Styles/Book.css'
import '../Styles/text.css'
import { Banner } from './Banner'
import BannerImage from '../Banner/Beach.jpg'
export function Book ( props ) {
    return(
        <div className="Book">
            <h2 className="main">Book</h2>
            <Banner image={BannerImage} text="Sunrise" />
                        
            <form id="booking-form" action="https://example.com/handler"
            method="post">
                {/* Name */}
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text"placeholder="Your Name"/>
                {/* Email */}
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email" placeholder="you@domain.com" />
                {/* Phone */}
                <label for="phone">Enter a phone number:</label>
                <input type="tel" id="phone" name="phone" placeholder="04643319"/>
                {/* Check-in */}
                <label for="check-in">Check-in date:</label>
                <input type="date" id="myDate" value="dd-mm-yyyy"></input>
                {/* Check-Out */}
                <label for="check-out">Check-Out date:</label>
                <input type="date" id="myDate" value="dd-mm-yyyy"></input>
                {/* Message */}
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5"cols="24" placeholder="If you have any special requests"></textarea>
                <button type="reset">Clear</button>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default Book
