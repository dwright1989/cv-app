
import React from "react";
import editIcon from '../Icons/edit.png';


export default function Details() {
    const [details, setDetails] = React.useState({
       address: "",
       phone: "",
       email: "",
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
                                <div id="detailsHeadingDiv">
                                    <h2 id="detailsHeading">DETAILS</h2>
                                    <img src={editIcon} alt="Edit" className="editButton" id="editDetailsButton" onClick={handleEdit}/>
                                </div>
                                <p className="bold" id="addressHeading">ADDRESS</p>
                                <p id="address">{(details.address) ?  details.address : "123 Example Avenue"}</p>
                                <p className="bold" id="phoneHeading">PHONE NUMBER</p>
                                <p id="phone">{(details.phone) ? details.phone : "012347678"}</p>
                                <p className="bold" id="emailHeading">EMAIL ADDRESS</p>
                                <p id="email">{(details.email)? details.email : "example@email.com"}</p>
                                
                        </div>}
            </div>
        );
    

}

