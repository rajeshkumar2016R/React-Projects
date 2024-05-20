


import './Navbar.css';

const Navbar = () => {
    return (
        <div className='nav'>
            <div className='logo'>EV-olution</div>
            <ul className='nav-menu'>
                <li>Home</li>
                <li>Expolre</li>
                <li>About</li>
                <li className='contact'>Contact</li>
            </ul>

        </div>
    )
}

export default Navbar;