import { Component } from "react"
import arrow from '../img/arrow.svg'
import './startPage.scss';

class StartPage extends Component {
    render() {
        return (
            <div>
                <button className="start-button">Новый процесс</button>
                <button className="previous-process"> 
                    <img src={arrow} alt="previous-process-arrow"/>  
                    <span>предыдущий процесс</span>
                </button>
            </div>
            
        )
    }
}

export default StartPage;