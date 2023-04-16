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
            name="Kim Tae-Hyung"
            message="Hi! 💛 "
            timestamp='3 hours ago'
            profilePic='https://www.soundpark.news/__export/1672336968320/sites/debate/img/2022/12/29/v-bts_x3x_x1x.jpg_1758632412.jpg'
            />

            <Chat 
            name="Tyler Barnhardt "
            message="What's up ❤ ? "
            timestamp='1 day ago'
            profilePic='https://theimagista.com/wp-content/uploads/2019/09/Nolwen_Cifuentes_Tyler_Barnhardt_Imagista08-e1568376103460.jpg'
            />


        </div>
    )
}

export default Chats;
