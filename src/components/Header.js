import { Link } from "react-router-dom"
import Lottie from "lottie-react"
import animateMap from "../lotties/animateMap.json"

const Header = (props) => {

    return (
        // <div class="flex flex-row justify-between sticky top-0 text-bloo ">
        <div class="sticky top-0 text-bloo flex flex-row justify-between bg-offwhite opacity-90">
            <div class="px-10  text-left">
                <Link to="/" class="flex flex-row justify-start items-center">
                    <div><h1 class="font-Pacifico text-5xl">Places</h1></div>
                    <div class="w-24 pt-2"><Lottie animationData={animateMap} loop={true} /></div>
                    <div><h4 class="font-Pacifico text-lg pt-4">The place to find your new home.</h4></div>
                </Link>
            </div>

            <div class="font-Inter px-4 pt-8">
                <Link to="/" class="px-2">HOME</Link>
                <Link to="/newproject" class="px-2">CREATE A NEW PROJECT</Link>
                <Link to="/newlisting" class="px-2">CREATE A NEW LISTING</Link>
                {/* <Link to="/builders"><div>BUILDERS</div></Link> */}
                {/* <Link to="/projects"><div>PROJECTS</div></Link> */}
                {/* <Link to="/listings"><div>LISTINGS</div></Link> */}
            </div>
        </div>
    )
}

export default Header