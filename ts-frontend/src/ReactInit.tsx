import MainBody from "./MainBody"
import { Navbar, NavMenu } from "./Navbar"

export function ReactInit(){

    return (
        <div className="border-2 border-green-500 p-5 m-5">
            <Navbar />
            <NavMenu />
            <h1>Hello React</h1>
            <MainBody />
        </div>
    )
}