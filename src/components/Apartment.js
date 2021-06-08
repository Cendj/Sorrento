import'../Styles/Apartment.css'
import '../Styles/text.css'
import {Banner} from './Banner'
import BannerImage from '../Banner/Beach.jpg'
export function Apartment ( props ) {
    return(
        <div className="Apartment">
            
            <h2 className="main">Apartment</h2>
            <Banner image={BannerImage}  text="sorento"/>
            <div className="grid">
            
            <div>
            <h3 className="sub">About</h3> 
            <p>On the Mornington Peninsula (one hour from Melbourne) next door to Portsea.</p>


    <p>The apartment
    We offer a spacious living area overlooking a beautiful garden
    Modern and elegant bathroom
    Queen sized bedroom suite
    A private entrance allows you to come and go as you please.</p>

<p>
Car parking is close by with room for a boat as well!
Your luxury apartment consists of a spacious separate living area with leather furniture overlooking a private garden for you to enjoy. 
A separate Queen sized bedroom suite with quality linen also overlooks the garden. The modern, elegant bathroom has a luxurious bath that entices you to unwind and relax whilst overlooking a private courtyard fernery. </p>
<p>The kitchenette provides everything you will need for a relaxing breakfast. We include a coffee machine and a variety of coffee pods for your enjoyment. Two TVS will keep everyone happy along with a DVD player, stereo system and games galore. 
There is an undercover area complete with BBQ and shady seating that offers plenty of space to stretch out and enjoy that cup of freshly brewed coffee or glass of wine.  
Sit back and relax and take a breather. Read a book, go for a beach walk, have a sleep-in. It’s your private space to enjoy. </p><p>
Amenities include top quality bedding, fluffy towels, bath robes, vanity packs, hair dryer, beach towels and chairs, a picnic basket, coffee machine and pods, a microwave/convection oven, a toaster, a kettle, a sandwich maker and BBQ tools. 
We offer locally sourced provisions for a hearty breakfast together with home-made biscuits and chocolates.
</p>
</div>
<div>
    <h3 className="sub">Pet friendly</h3>
    <p>We understand that pets are an important part of the family.
    We are pet friendly by arrangement - so please talk to us about your needs.
    We offer a fully enclosed backyard, shady trees, water bowls, food bowls and a lead if you forget one.
    Only 3 minutes from a leash free beach, an oval close by and if you want to sleep in we are happy to take your dog (depending on its size) for a walk in the morning.  </p>
    
    <h3  className="sub">Testimonials</h3>
    <p>"So sorry we had to go home after only one night. We will definitely stay two nights next time!"</p>
    <p>"This apartment is close to everything. We didn't need the car as the walks were amazing"</p>
    <p>"Your attention to detail made our stay so relaxed and comfortable. It was such a shame we had to drive back to our little flat, which is smaller than your apartment. We want to move in!"</p>
    <p>"Cosy and comfortable. We imagined we owned it and enjoyed being spoilt.  Thank you." </p>
    <p>"What a magical stay at such an amazing place. Completely self-contained and very private. We loved it and will return again and again."</p>
    <p>"Never felt so spoilt. A perfect get away and so close to everything. We had the best bath ever!"</p>
    <p>"A few minutes’ walk from the beach, picnic basket in hand and towel over the shoulder - can't think of anything better except that wonderful breakfast. That bacon is the best in Melbourne!"</p>
    <p>"Relaxing in that sunny garden watching our dog chasing balls. Let me stay forever!"</p>
 </div>





            </div>
            </div>
        
    )
}

export default Apartment