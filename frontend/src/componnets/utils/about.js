import React from "react";

const About = (props) => {

    // use inline style to render the component
    const aboutStyle = {
        display:'flex',
        // alignItems:'center',
        // justifyContent:'center',
        // height:'-webkit-fill-available',
        border:'1px solid',
        width:'auto',
        margin:'100px 600px',
        background:'white',
        paddingTop:'0',
        height:'400px',

    }
    return <div style={aboutStyle}>
        <p>This is a project combined with
        <b>Spring Boot Stack</b> and <b>React Stack</b></p>
        </div>
}

export default About
