import { React } from "react";
import { render } from "react-dom";

export const Alert2 = (props) => {
    props = {
        text : '',
        show : true
    }
    render() ;{
        if (props.show === false) {
            return null
        } else {
            return (
                <div className="alert alert-danger" role="alert">
                    {props.text}
                </div>
            ) 
        }
    }
}