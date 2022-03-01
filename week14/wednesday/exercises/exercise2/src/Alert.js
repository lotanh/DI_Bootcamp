import { React } from "react";

export const Alert = (props) => {
    const {text} = props
    return (
        <div className="alert alert-danger" role="alert">
            {text}
        </div>
    )
}