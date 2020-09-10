import React from 'react'
import './Chats.css'

import Chat from './Chat.js'


function Chats() {
    return (

        <div className="chats">
            <Chat 
            name="Harry"
            message="Hi! How are you 🙂"
            timestamp='4 seconds ago'
            profilePic='https://aws.revistavanityfair.es/prod/designs/v1/assets/2189x1809/172094.jpg'
            />

            <Chat 
            name="Timothy Granaderos"
            message="Hi! 💛 "
            timestamp='3 hours ago'
            profilePic='https://i.pinimg.com/originals/b6/3d/11/b63d11f2ab2ef9ef68831e8606d0e903.jpg'
            />

            <Chat 
            name="Tyler Barnhardt"
            message="What's up ❤ ? "
            timestamp='1 day ago'
            profilePic='https://pbs.twimg.com/profile_images/1274045249292316672/4Eq4mTQg.jpg'
            />


        </div>
    )
}

export default Chats;
