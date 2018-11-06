import React, { Component } from 'react';
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
                    
                        pestaña
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
