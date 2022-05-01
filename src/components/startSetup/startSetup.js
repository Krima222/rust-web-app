import { Component } from "react";
import "./startSetup.scss"

class StartSetup extends Component {
    render() {
        return(
            <form className="start-setup">
                <input className="start-setup__name" type="text" placeholder="название"/>
                <hr/>
                <div className="start-setup__position">
                    <input 
                        className="start-setup__settings start-setup__input" 
                        type="text" 
                        placeholder="укажите время"
                    />
                    <input 
                        className="start-setup__settings start-setup__input" 
                        type="text" 
                        placeholder="укажите время "
                    />
                </div>
                
                <input 
                    className="start-setup__cycle start-setup__input" 
                    type="text" 
                    placeholder="колличество циклов"
                />
                <input 
                    className="start-setup__all-time start-setup__input" 
                    type="text" 
                    disabled="disabled"
                    value="общее время работы"
                />
                
                <label className="start-setup__lable" for="notes" >заметки</label> 
                <textarea className="start-setup__notes start-setup__input" id="notes" name="notes"></textarea>
                <div className="start-setup__btn-group">
                    <button className="start-setup__btn_red">отмена</button>
                    <button className="start-setup__btn_green">запуск</button>
                </div>
                
            </form>
        )
    }
}

export default StartSetup;