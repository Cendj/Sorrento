import'../Styles/Apartment.css'
import {Banner} from './Banner'
import BannerImage from '../Banner/Beach.jpg'
export function Apartment ( props ) {
    return(
        <div className="Apartment">
            <Banner image={BannerImage}  text="sorento"/>
            <h2>Apartment</h2>
            <div className="content">
            <p>On the Mornington Peninsula (one hour from Melbourne) next door to Portsea.</p>

<p>Our apartment is a lazy 10-minute walk from the relaxed township of Sorrento that offers restaurants, cafes, a chemist, a supermarket, a butcher and lots more. It is located in a quiet avenue, just 4 houses from the beach. It is in easy walking distance of the ocean beaches and surf.</p>

<p>Your private luxury apartment consists of a spacious living area with leather lounge suite overlooking a sun drenched, tree-filled private garden.</p>

<p>A separate kitchenette has everything you need to make your stay relaxed and comfortable. A queen sized bedroom and an amazing bathroom complete with free standing black bath entices you to relax and unwind.</p>

<p>Two TVs are sure to make everyone happy!  An undercover BBQ area with seating offers plenty of space to stretch out and enjoy that cup of freshly brewed coffee or a glass of wine.</p>

<p>This is the perfect place for a home away from home.</p>
            </div>
        </div>
    )
}

export default Apartment