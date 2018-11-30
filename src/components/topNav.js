import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TopNav extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper purple_grad">
        <div className="row">
          <div className="col s12 m4 l2 center-align"><Link className="brand-logo" to='/'>Logo</Link></div>

          <Link to='/infographics'><div id='infographics' className="col s1 center-align hoverable">Infographics</div></Link>
          <Link to='/diet-exercise'><div className="col s1 center-align hoverable">Diet & Exercise</div></Link>
          <Link to='/hormones'><div className="col s1 center-align hoverable">Hormones</div></Link>
          <Link to='/surgeries'><div className="col s1 center-align hoverable">Surgeries</div></Link>
          <Link to='/hrt-access'><div className="col s1 center-align hoverable">Access to HRT</div></Link>
          <Link to='/surgeons'><div className="col s1 center-align hoverable">Surgeons</div></Link>
          <Link to='/store'><div className="col s1 center-align hoverable">Store</div></Link>
          <Link to='/contact'><div className="col s1 center-align hoverable">Contact</div></Link>

          <div className="col s12 m4 l2"></div>
        </div>
        </div>
      </nav>
    );
  }
}

export default TopNav;

