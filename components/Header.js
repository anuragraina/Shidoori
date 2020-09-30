import PropTypes from 'prop-types';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome'
// import faGem from '@fortawesome/fontawesome-free-regular/faGem'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
            {/*<span className="icon fa-diamond"></span>*/}
            <img src="/static/images/logo.png" alt="Logo" className="logo" />
        
        <div className="content">
            <div className="inner">
                <h1>Shidoori</h1>
                <p>Coming soon...</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a onClick={() => {props.onOpenArticle('about')}}>About Us</a></li>
                <li><a onClick={() => {props.onOpenArticle('services')}}>Services</a></li>
                <li><a onClick={() => {props.onOpenArticle('team1')}}>Our Team</a></li>
                {/* <li><a onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li> */}
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
