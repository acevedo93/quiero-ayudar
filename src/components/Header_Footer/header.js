import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Nav from './sidenav'

class Header extends Component {
    
    state = {
        showNav: false
    }

    onHideNav = () => {
        this.setState({
            showNav:false
        })
    } 
    render() {
        return (
            <div>
                <header className='header_container'>
                    
                    <div className='open_nav'
                    onClick= {() => this.setState({showNav:true})}
                    >
                        <FontAwesomeIcon
                            icon={faBars}
                        />
                    </div>
                    <div>Q_ayudar</div>
                    <div>login</div>
                    
                </header>
                <Nav
                    showNav = {this.state.showNav}
                    onHideNav = {()=> this.onHideNav()}
                    />
            </div>
        );
    }
}

export default Header;
