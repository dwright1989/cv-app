import React from "react";

const Name = (props)=>{
    const firstName = props.fullName.firstName;
    const lastName = props.fullName.lastName;
    return(
           <p id="fullName"><span id="firstName">{firstName}</span><span id="lastName"> {lastName}</span></p>
    );
};

export default Name;