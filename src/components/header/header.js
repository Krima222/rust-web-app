import { Component } from "react"
import './header.scss' 
import hist from '../img/hist.svg'
import temp from '../img/temp.svg'
import disconnectedIcon from '../img/disconnected-icon.svg'

class Header extends Component {

    
    render() {
        return (
            <header>
                <img className="disconnected-icon" src={disconnectedIcon} alt="disconnect"/>
                <div className="menu">
                    <span className="menu__temp-value">27.5°</span>
                    <img className="menu__temp-icon" src={temp} alt="temp"/>
                    <img className="menu__hist-icon" src={hist} alt="hist"/>
                </div>
            </header>
        )
    }
}

export default Header;