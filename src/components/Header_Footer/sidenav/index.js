import  React from 'react'
import SideNav from 'react-simple-sidenav'
import SideNavItems from './sideNavItems'


const Nav = ({showNav,onHideNav}) => (
    <SideNav
        showNav = {showNav}
        onHideNav = {onHideNav}
        navStyle = {{
            background:"#ffffff",
            maxWidth:'220px'
        }}
    >
        <SideNavItems/>
    </SideNav>
)

export default Nav