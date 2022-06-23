import { LeftSidebar } from "./LeftSidebar/LeftSidebar"
import { Navbar } from "./Nav/Navbar"
import { RightBox } from "./RightBox/RightBox"
import './Home.css'

export const Home = () => {
    return (
        <div>
            <Navbar/>
            <div className="flexBox">
                <LeftSidebar/>
                <RightBox/>
            </div>
            <div style={{fontSize:10}}> Icons made by <a href="https://www.flaticon.com/authors/iconic-panda" title="Iconic Panda"> Iconic Panda </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div>
        </div>
    )
}