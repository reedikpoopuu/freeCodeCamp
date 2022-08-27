import logo from './logo.svg';
function Header () {
    return(
    <div className="nav">
        <img src={logo} className="App-logo" alt="logo" />
        <ul className='nav-items'>
            <li>Pricing</li>
            <li>About</li>
            <li>Contacts</li>
        </ul>
    </div>
    )
};

export default Header;