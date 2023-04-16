import React from 'react';
import './Profile.css';
import Profilepic from './img/pofile_pic.jpg';


function Profile() {
    return (
        <div className="profile__data">
            <img className='profile__pic' src={Profilepic} alt="Profile_pic" />
            <h2>Jen, 25</h2>
            
            <h3>All happy girls are alike; every unhappy girl is unhappy in her own way. My kind of unhappy is full of self-deprecating humor, double IPAs, and is actually pretty rad.
                <br></br>
                <br></br>
                Let me know if you want to be miserable together.</h3>

        </div>
    )
}

export default Profile
