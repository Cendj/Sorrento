import { Banner } from './Banner'
import '../Styles/text.css'
import BannerImage from '../Banner/Beach.jpg'
import '../Styles/Pricing.css'
export function Pricing(props) {
    return (
        <div className="Pricing">
           
            <h2 className = "main">Pricing</h2>
            <Banner image={BannerImage} text="Sunrise" />
            <div className="grid">
                <div className="card">



                    <h3 className="sub">Winter</h3>
                    <p>
                        <li>The pricing is for 2 people.</li>
                        <li>1st June - August 31st</li>
                        <li>The apartment is strictly non-smoking</li>
                        <li>$200 per night</li>
                    </p>
                </div>
                <div className="card">
                    <h3 className="sub">Summer     </h3>
                    <ul>                  
                    <li>1st September - December 18th</li>
                        <li>1st February - 31st May</li>
                        <li>Total amount is payable upon booking.</li>
                        <li>$220 per night</li>
                        </ul>
                    </div>
                    <div>
                    <h3 className="sub">Terms and Conditions</h3>
                    <ul>
                        
                        <li>A full refund will be given prior to 30 days cancellation</li>
                        <li>50% refund will be given after 30 days of cancellation.</li>
                        <li>In the event of a weekly or monthly booking the apartment will be serviced weekly unless by prior arrangement.</li>
                        <li>Weekly Price     $1,250</li>
                        <li>Monthly Price $5,400</li>
                    </ul>
                    </div>
                    
                </div>
            </div>
            

        
    )
}

export default Pricing