import PropTypes from 'prop-types';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome'
// import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
// import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
// import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
// import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About Us</h2>
          <ul>
            <li>              
              <p>We believe in principles of bringing to the world an alternate truth through technology to help the society adopt our ideas for social innovation and integration.</p>
            </li>
            <li>
              <p>Our vision is to improve standard of living and hygiene of food consumed by growing middle class population in India, by providing healthy and clean food which people can cook themselves in the hygiene of their own kitchen.</p>
            </li>
            <li>
              <p>We aim to start operations form Pune and other tier 1&2 cities of Maharashtra before expanding pan-India.</p>
            </li>
          </ul>
          {close}
        </article>

        <article id="services" className={`${this.props.article === 'services' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Services</h2>
          <ul>
            <li>              
              <p>ShiDOORi Foodtech offers a range of ready-to-cook and ready-to-eat products and services through its FMCG product line, cloud kitchen-based meal kit offerings through FSAs and a complete grocery delivery service according to individual recipes, subscriptions on basis of eating habits.</p>
            </li>
            <li>
              <p>We eliminate the mundane task of grocery buying and provide you complete delivery option through our platform. You no longer need to put extra efforts for food preparations, our reliable cloud kitchen service caters to your specific taste and eating habits.</p>
            </li>
            <li>
              <p>With that we plan to expand our offering by launching a FMCG brand for ready-to-cook and ready-to-eat food which you can buy at any supermarkets or through online grocery delivery services.</p>
            </li>
            <li>
              <p>Providing hygienic and healthy food throughout our platforms which is required to live in a post-pandemic world, is our promise.</p>
            </li>
          </ul>
          {close}
        </article>

        <article id="team1" className={`${this.props.article === 'team1' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Our Team</h2>
          <div className="team">
            <div className="member">
              <img src="/static/images/pranav.jpeg" alt="" className="avatar" />
              <p className="name">Pranav Kardale</p>
              <p className="role">Finance, Governance and Strategy</p>
            </div>
            <div className="member">
              <img src="/static/images/anurag.jpg" alt="" className="avatar" />
              <p className="name">Anurag Raina</p>
              <p className="role">Technology Developments</p>
            </div>
            <div className="member">
              <img src="/static/images/dheeraj.jpg" alt="" className="avatar" />
              <p className="name">Dheeraj Bhurewar</p>
              <p className="role">Head of Operations</p>
            </div>
            <div className="member">
              <img src="/static/images/abdul.jpg" alt="" className="avatar" />
              <p className="name">Abdulkadir Malpurwala</p>
              <p className="role">Digital Marketing and Web Presence</p>
            </div>
          </div>
          {close}
        </article>

        {/* <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a></li>
            <li><a href="#">
              <FontAwesomeIcon icon={faFacebook} />
            </a></li>
            <li><a href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a></li>
            <li><a href="#">
              <FontAwesomeIcon icon={faGithub} />
            </a></li>
          </ul>
          {close}
        </article> */}

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool
}

export default Main