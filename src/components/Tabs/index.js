import React from 'react'

import {Link} from 'react-router-dom'


const Tabs = (props) => {

    const items =[
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
                items.map((item, key) => (
                    <div  className='tab' key={key} >
                        <Link to={item.link}>
                            {item.text}
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}

export default Tabs