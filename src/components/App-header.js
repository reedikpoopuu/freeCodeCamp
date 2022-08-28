import logo from '../logo.svg';
function Header () {
    return(
    <nav>
        <img src={logo} className="nav--icon" alt="logo" />
        <h3 className='nav--logo_text'>React Lessons</h3>
        <ul className='nav--list'>
            <li>Pricing</li>
            <li>About</li>
            <li>Contacts</li>
        </ul>
    </nav>
    )
};

export default Header;