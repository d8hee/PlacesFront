import { Link } from "react-router-dom"
import Lottie from "lottie-react"
import animateMap from "../lotties/animateMap.json"

const Header = (props) => {

    return (
        <div class="flex flex-row justify-between">
            <div class="px-10 py-8">
                <Link to="/places">
                <h1 class="">Places App</h1>
                <h4>The place to find your new home.</h4>

                </Link>
            </div>
            <div ><Lottie animationData={animateMap} loop={true} /></div>
            <div class="px-10 py-10">
                <Link to="/places" class="px-5">HOME</Link>
                <Link to="/places/newproject" class="px-5">CREATE A NEW PROJECT</Link>
                <Link to="/places/newlisting" class="px-5">CREATE A NEW LISTING</Link>
                {/* <Link to="/places/builders"><div>BUILDERS</div></Link> */}
                {/* <Link to="/places/projects"><div>PROJECTS</div></Link> */}
                {/* <Link to="/places/listings"><div>LISTINGS</div></Link> */}
            </div>
        </div>
    )
}

export default Header