
import React from "react";


export default function Details() {
    const [details, setDetails] = React.useState({
       address: "123 Example Avenue",
       phone: "0123476789",
       email: "example@example.com",
       previewDisplay: true
    })

    function handleChange(event){
        const{name, value} = event.target;
        setDetails(prevDetails => ({
            ...prevDetails,
            [name]: value
        }))
    }

    function handleSubmit(event) {
        event.preventDefault();
        setDetails(prevDetails => ({
            ...prevDetails,
            previewDisplay: true
        }))
    }
    
    function handleEdit(){
        setDetails(prevDetails => ({
            ...prevDetails,
            previewDisplay: false
        }))
    }


        return (
            
            <div id="details">
                {!details.previewDisplay && <form id="detailsForm" className ="form" onSubmit={handleSubmit}>
                   Address: <input id="editAddressField"
                        type="text"
                        name="address"
                        onChange={handleChange}
                        value={details.address}
                    />
                    Phone Number: <input id="editPhoneField"
                        type="text"
                        name="phone"
                        onChange={handleChange}
                        value={details.phone}
                    />
                     Email Address: <input id="editEmailField"
                        type="text"
                        name="email"
                        onChange={handleChange}
                        value={details.email}
                    />
                    <button className="form-submit updateButton">Update</button>
                </form>}
                {details.previewDisplay && 
                        <div id="detailsDiv">
                                <h2 id="detailsHeading">Details</h2>
                                <button  className="editButton" id="editDetailsButton" onClick={handleEdit}>Edit</button> 
                                <p className="bold" id="addressHeading">Address</p>
                                <p id="address">{details.address}</p>
                                <p className="bold" id="phoneHeading">Phone Number</p>
                                <p id="phone">{details.phone}</p>
                                <p className="bold" id="emailHeading">Email Address</p>
                                <p id="email">{details.email}</p>
                                
                        </div>}
            </div>
        );
    

}

