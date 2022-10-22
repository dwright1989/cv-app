import React from "react";

const Name = (props)=>{
    const firstName = props.fullName.firstName;
    const lastName = props.fullName.lastName;
    return(
       <div id="fullName">
           <p><span id="firstName">First Name: {firstName}</span><span id="lastName"> Last name:  {lastName}</span></p>
       </div>
    );
};

export default Name;