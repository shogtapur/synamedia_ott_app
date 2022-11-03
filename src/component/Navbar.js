import { Link } from "react-router-dom"

const Navbar = () => {
    const getTime = () => {
        let today = new Date()
        let hours = today.getHours() 
        var minutes = today.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12 ? hours % 12 : 12; 
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }
    

    return (
        <div className="navbar">
            <div className="container-fluid">
                <nav className="navbar__nav">
                    <h3 className="nav_brand">
                        <Link to="/">
                            <i className="fas fa-video"> {process.env.REACT_APP_TARGET_VALUE} OTT</i>
                        </Link>

                    </h3>

                    <ul className="nav__links">
                        <li className="links_link">
                            <Link to="/">Home</Link>
                        </li>
                        <li  className="links_link">
                            <Link to="/catchup">Catch Up</Link>
                        </li>
                        <li  className="links_link">
                            <Link to="/boxset">Boxset</Link>
                        </li>
                        <li  className="links_link">
                            <Link to="/movies">Movies</Link>
                        </li>
                        <li  className="links_link">
                            <Link to="/kids">Kids</Link>
                        </li>
                        <li  className="links_link">
                            <Link to="/store">Store</Link>
                        </li>
                        <li  className="links_link">
                            <Link to="/sport">Sports</Link>
                        </li>
                        <li  className="links_link">
                            <Link to="/mylibraries">My library</Link>
                        </li>
                        <li  className="links_link">
                            <Link to="/about">About</Link>
                        </li>
                     </ul>
                
                    <ul className="nav__icon">
                     <li className="links_link">
                            <Link to="/">
                            <i class='fas fa-user-circle'></i>
                            </Link>
                        </li>
                        <li  className="links_link">
                        <Link to="/">
                            <i class='fas fa-search'></i>
                            </Link>
                        </li>
                        <li  className="links_link">
                        <Link to="/">
                            <i class='fas fa-cog'></i>
                            </Link>
                        </li>
                        <li  className="links_link">
                            <Link to="/">{getTime()}</Link> 
                        </li>

                    </ul>
                </nav>



            </div>



        </div>
    )
}

export default Navbar

