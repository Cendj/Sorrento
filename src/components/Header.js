import {Link, NavLink} from 'react-router-dom'
import '../Styles/Header.css'

export function Header ( props ) {
    const navigation = props.nav.map( (item) => {
        return(
            <NavLink to={item.link} 
            activeClassName="active"
            exact={ (item.link==="/") ? true : false }>
                {item.name}
            </NavLink>
        )
    } )
    return (
        <header className="header">
            <img className="logo" src={props.logo}></img>
            <nav className ="navigation">
                {navigation}
            </nav>
        </header>
    )
}
export default Header