import React from "react";

const SplitLine = (props) => {

    // use inline style to render the component
    const splitLineStyle = {
        boxSizing: 'border-box',
        height: '1px',
        border: '.5px solid #ddd'
    }
    return <div style={splitLineStyle}></div>
}

export default SplitLine
