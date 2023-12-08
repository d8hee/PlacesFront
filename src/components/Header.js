import { Link } from "react-router-dom"

const Header = (props) => {

    return (
        <div>
            <nav className="headerNav">
                <Link to="/"><div>HOME</div></Link>
                {/* <Link to="/places/builders"><div>BUILDERS</div></Link> */}
                {/* <Link to="/places/projects"><div>PROJECTS</div></Link> */}
                <Link to="/places/listings"><div>LISTINGS</div></Link>

                <Link to="/places/newproject"><div>CREATE A NEW PROJECT</div></Link>
                <Link to="/places/newlisting"><div>CREATE A NEW LISTING</div></Link>
            </nav>
        </div>
    )
}

export default Header