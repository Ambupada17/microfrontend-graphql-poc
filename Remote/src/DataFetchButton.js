import React from "react";
import './DataFetchButton.scss';


const DataFetchButton = ({ onClick }) => {
    return (
        <button className="fetch-button" onClick={onClick}>Click Me!!</button>
    )
}
export default DataFetchButton;