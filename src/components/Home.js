import '../Styles/Home.css'
import '../Styles/text.css'
export function Home(props) {
    return (
        <div className="Home">
            
            <h2 className="main">Home</h2>
            <div className="video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/KE0SbDBw-ok" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            
                <h3 className="sub">Company information</h3>
                <div className="content">
                <p>On the Mornington Peninsula (one hour from Melbourne) next door to Portsea.</p>

                <p>Our apartment is a lazy 10-minute walk from the relaxed township of Sorrento that offers restaurants, cafes, a chemist, a supermarket, a butcher and lots more. It is located in a quiet avenue, just 4 houses from the beach. It is in easy walking distance of the ocean beaches and surf.</p>

<p>Your private luxury apartment consists of a spacious living area with leather lounge suite overlooking a sun drenched, tree-filled private garden.</p>

<p>A separate kitchenette has everything you need to make your stay relaxed and comfortable. A queen sized bedroom and an amazing bathroom complete with free standing black bath entices you to relax and unwind.</p>

<p>Two TVs are sure to make everyone happy!  An undercover BBQ area with seating offers plenty of space to stretch out and enjoy that cup of freshly brewed coffee or a glass of wine.</p>

<p>This is the perfect place for a home away from home.</p>
</div>
<h3 className="sub">How to get to Sorrento by the Sea </h3>
<div className="content">
<p>It is easy to find. From Melbourne, take the Monash Freeway, connect onto the Eastlink heading for Portsea, then onto the Peninsula link to Sorrento.  
Another option is the scenic drive around the beach. Although longer, it allows you to experience the coastline from Port Melbourne to Sorrento. 
If you choose to come across on the Queenscliff/Sorrento Ferry, it is only a 2 minute drive from the Ferry Depot. 
If you are a foot passenger we are happy to meet you at the Sorrento ferry at. Just phone us on <b>0435 123 456</b> as you arrive.</p>


            </div>
        </div>
    )
}

export default Home