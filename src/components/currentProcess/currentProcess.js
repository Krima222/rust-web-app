import { Component } from "react";
import "./currentProcess.scss"
import top from "../img/top.svg"

class CurrentProcess extends Component {
    render() {
        return(
            <div className="current-process">
                <div className="current-process__position" id="position">
                    <img className="current-process__icon" src={top} alt="temp"/>
                    <span className="current-process__text">Вверху</span>
                    <span className="current-process__col">5/30</span>
                </div>
                <div className="current-process__lable-position">
                    <label className="current-process__position-left" for="position">вверх: 15мин</label>
                    <label className="current-process__position-rigth" for="position">вниз: 20мин</label>
                </div>
                <div className="current-process__working-hours" id="time">12:30:30/20:20:20</div>
                <div className="current-process__lable">
                    <label className="current-process__left" for="time">начало: 12:30:31 07.04</label>
                    <label className="current-process__rigth" for="time">окончание: 20:20:20 09.04</label>
                </div>
                <textarea className="current-process__notes">
                        Когда пиздец придет – не знаю
                        Прошла зима, пришла весна
                        Какой уж вирус убиваю
                        Работы нынче до хрена.

                        Как бурундук заразу тру я
                        Купюр шуршанье, звон монет,
                        Скажите, на какого хуя
                        Ебланы лезут в интернет?

                        Сижу, компьютеры спасаю
                        На речках тихо тает лед…
                        … Когда пиздец придет – не знаю,
                        Но – обязательно придет.</textarea>
                <button className="current-process__button">Завершить</button>
            </div>
        )
    }

}

export default CurrentProcess;