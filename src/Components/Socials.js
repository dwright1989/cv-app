
import React from "react";
import linkedInLogo from '../Icons/linkedin.png';
import facebookLogo from '../Icons/facebook.png';
import instagramLogo from '../Icons/instagram.png';
import gitHubLogo from '../Icons/github.png';
import editIcon from '../Icons/edit.png';


export default function Socials(props) {
    const [socials, setSocials] = React.useState({
       linkedIn: "",
       facebook: "",
       instagram: "",
       gitHub: "",
       previewDisplay: true
    })

    function handleChange(event){
        const{name, value} = event.target;
        setSocials(prevSocials => ({
            ...prevSocials,
            [name]: value
        }))
    }

    function handleSubmit(event) {
        event.preventDefault();
        setSocials(prevSocials => ({
            ...prevSocials,
            previewDisplay: true
        }))
    }
    
    function handleEdit(){
        setSocials(prevSocials => ({
            ...prevSocials,
            previewDisplay: false
        }))
    }



        return (
            
            <div id="socials">
                {(!socials.previewDisplay && !props.preview) && <form id="socialsForm" className ="form" onSubmit={handleSubmit}>
                   LinkedIn: <input id="editLinkedInField" className="socialsFormItem"
                        type="text"
                        name="linkedIn"
                        onChange={handleChange}
                        value={socials.linkedIn}
                    />
                    Facebook: <input id="editFacebookField" className="socialsFormItem"
                        type="text"
                        name="facebook"
                        onChange={handleChange}
                        value={socials.facebook}
                    />
                     Instagram: <input id="editInstagramField" className="socialsFormItem"
                        type="text"
                        name="instagram"
                        onChange={handleChange}
                        value={socials.instagram}
                    />
                    GitHub: <input id="editGitHubField" className="socialsFormItem"
                        type="text"
                        name="gitHub"
                        onChange={handleChange}
                        value={socials.gitHub}
                    />
                    <button className="form-submit updateButton">Update</button>
                </form>}
                {(socials.previewDisplay || props.preview ) &&
                        <div id="socialsDiv">
                                <div id="socialsHeadingDiv">
                                    <h2 id="socialsHeading">SOCIALS</h2>
                                    {!props.preview && <img src={editIcon} alt="Edit" className="editButton" id="editSocialsButton" onClick={handleEdit}/>}
                                </div>
                                
                                <div id="socialLinksDiv">
                                    {socials.linkedIn && 
                                    <div className="socialLinks">
                                        <a href={socials.linkedIn}><img src={linkedInLogo} alt="Linked In" className="social-icon"/></a>
                                        <p className="url">{socials.linkedIn}</p>
                                    </div>
                                    }
                                    {socials.facebook && 
                                    <div className="socialLinks">
                                        <a href={socials.facebook}><img src={facebookLogo} alt="Facebook" className="social-icon"/></a>
                                        <p className="url">{socials.facebook}</p>
                                        </div>
                                    }
                                    {socials.instagram && 
                                    <div className="socialLinks">
                                        <a href={socials.instagram}><img src={instagramLogo} alt="Instagram" className="social-icon"/></a>
                                        <p className="url">{socials.instagram}</p>
                                    </div>
                                    }
                                    {socials.gitHub && 
                                    <div className="socialLinks">
                                        <a href={socials.gitHub}><img src={gitHubLogo} alt="GitHub" className="social-icon"/></a>
                                        <p className="url">{socials.gitHub}</p>

                                    </div>
                                    }
                                </div>
                        </div>}
            </div>
        );
    

}

