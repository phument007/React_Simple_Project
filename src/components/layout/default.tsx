import React from "react";
import './style.css'
type DefaultProps = {
    children: React.ReactNode
}
const DefaultLayout :React.FC<DefaultProps> = (props) => {
    return (
        <div className="container">
            {props.children}
        </div>
    );
}


export default DefaultLayout;