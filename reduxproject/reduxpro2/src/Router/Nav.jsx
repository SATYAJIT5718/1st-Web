import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
    render() {
        return (
            <>
                <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                    <a className='navbar-brand' href='#'>
                        Router Example
                    </a>
                    <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-aria-expanded='false' aria-label='Toggle navigation'><span className='navbar-toggler-icon'></span></button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link to="/home" className="nav-link">
                                    Home <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </>
        )
    }
};

export { Nav };
