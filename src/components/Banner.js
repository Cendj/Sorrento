const BannerStyle = {
    minHeight:'50vh',
    minWidth: '100%',
    position: 'relative',
}
const BannerImage = {
    position: 'absolute',
    width: '100%',
    height: '50vh',
    objectFit: 'cover',
    objectPosition: 'center',
    zindex: 9


}
const TextStle = {
    position: 'absolute',
    width: '100%',
    textAllign: 'center',
    zindex: 99
}
export function Banner ( props ) {
    return (
        <div className="banner" style={BannerStyle}>
            <img src = {props.image} alt ="Sorrento pic" className="banner-image" style = {BannerImage}/>
            <h2 className="banner-text">{props.text}</h2>
        </div>
    )
}
export default Banner