import React from 'react'

import {Link} from 'react-router-dom'


const Tabs = (props) => {

    const setTabs =[
        {
            type:'tabItem',
            icon:'',
            text:'Cuando',
            link:'/cuando',
            restricted: false,
        },
        {
            type:'tabItem',
            icon:'',
            text:'Donde',
            link:'/donde',
            restricted: false,
        },
        {
            type:'tabItem',
            icon:'',
            text:'Enque',
            link:'/enque',
            restricted: false,
        }

    ]

    return(
        <div className='tabs_container'>
            {
                setTabs.map((tab, key) => (
                    <div  className='tab' key={key} >
                        <Link to={tab.link}>
                            {tab.text}
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}

export default Tabs