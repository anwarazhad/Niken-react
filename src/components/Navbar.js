import { Component } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { MenuItems } from "./MenuItems";
import nikenLogo from "./nikenLogo.png";

class Navbar extends Component {
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            <nav className='NavbarItems'>
                <Link to='/home' className='navbar-logo'>
                    <img src={nikenLogo} width={130} height={40} />
                </Link>

                <div className='menu-icons' onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>

                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>
                                    <i className={item.icon}></i>{item.title}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav >
        )
    }
}

export default Navbar;