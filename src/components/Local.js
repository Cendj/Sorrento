import '../Styles/text.css'
import '../Styles/Local.css'
import { Banner } from './Banner'
import BannerImage from '../Banner/Beach.jpg'
export function Local(props) {
    return (
        <div className="Local"> 
        
        <h2 className="main">Highlights of local area</h2>
            <Banner image={BannerImage} text="Sunrise" />
            <div className="grid">
           
            <div>
                <h3 className="sub">Wineries and Restaurants</h3>
                <p>There are more than 55 wineries to choose from - offering cellar door sales, restaurants, cafes and tours. Along the way discover a foodie’s paradise. Meet the growers, producers, providers and chefs. Experience the fun of picking your own produce or buying dinner ingredients at the farm gate. Dine with views of the sea, lakes and vineyards.</p>
            </div>
            <div>
            <h3 className="sub">Map</h3>
            <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25033.806706117557!2d144.72555105456343!3d-38.34375464821312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad434fd0d956f7b%3A0x5045675218ce590!2sSorrento%20VIC%203943!5e0!3m2!1sen!2sau!4v1623115178291!5m2!1sen!2sau"></iframe></div>
            <div>
                <h3 className="sub">Golf</h3>
                <p>The Mornington Peninsula is blessed with 19 courses that both challenge and excite. Many golf courses provide the most exhilarating views over Port Phillip Bay, Western Port and Bass Strait. The sand hills and coastal hinterland provide wonderful examples of links, resort and traditional courses. Visitors are always welcome. </p>
            </div>
            <div>
                <h3 className="sub">Peninsula Hot Springs</h3>
                <p>Another world awaits. Enjoy the thermal bathing area or book a private indoor or outdoor hot springs bath experience.
                Activities include reflexology treatments, foot and hand baths, sauna, steam baths, cold plunges and yoga. The cafe at the bath house provides light meals and gourmet pizzas. Feel revitalised and relaxed at the same time.</p>
            </div>
            <div>
                <h3 className="sub">Queenscliff-Sorrento Ferry</h3>
                <p>There's no better way to cross the Bay either with your car or as a foot passenger. It only takes 40 minutes. Spot the playful dolphins whilst enjoying a coffee and light refreshments. The ferries run every day of the year on the hour. Wonderful restaurants at historic Queenscliff on the Bellarine peninsula offer perfect lunchtime adventures.</p>
            </div>
            <div>
                <h3 className="sub">Walking Tracks</h3>
                <p>Fabulous walking tracks in any direction for all ages. Beautiful beach walks, amazing cliff top strolls and for the more serious walkers, a 100km walk combines the Bay trial, National Parks and the two Bays walk through the hinterland.</p>
            </div>
            <div>
                <h3 className="sub">Arts and Culture</h3>
                <p>The Mornington Peninsula hosts an array of exhibitions and galleries, featuring fine art, sculpture, ceramics, jewelry, hand blown glass and clothing. Small local galleries and craft markets are in abundance across the region.</p>
            </div>
            <div>
                <h3 className="sub">Shopping Escapades</h3>
                <p>Lovely, leisurely shopping - for pure pleasure - is listed as the number one activity for holidaymakers.
                Sorrento and Mornington will not disappoint. Bookshops, giftware, home living and of course the odd handbag or "must have that" top is yours for the exploring. </p>
            </div>
            <div>
                <h3 className="sub">Water Sports</h3>
                <p>Endless Fun for all the family. Sailing, fishing, kayaking, paddle boarding, snorkeling, scuba diving and surfing are all on offer, not to mention the cricket match on the beach.</p>
            </div>
            
            
            </div>
            
        </div>
         

    )
}

export default Local