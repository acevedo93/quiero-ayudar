import React from 'react';
import { Link } from 'react-router-dom'

const SideNavItems = () => {

    const items = [
        {
            type : 'navItem',
            icon : 'home',
            text : 'Home',
            link : '/',
            restricted : false
        },
    ]

    const element = (item,key) => (
        
        <div key = { key } className={ item.type }>
            <Link to = { item.link }>
                {item.text}
            </Link>
        </div>
    )

    const showItems = () => (
        items.map((item,key) => element(item,key) )
    )
    
    return (
        <div>
            {showItems()}
        </div>
    )

}

export default SideNavItems