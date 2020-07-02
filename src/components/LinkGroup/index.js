import React from 'react';

import IconGithub from '../../assets/icons/github.png'
import IconBlog from '../../assets/icons/blog.png'
import IconInstagram from '../../assets/icons/instagram.png'
import IconMail from '../../assets/icons/mail.png'

const LinkGroup = (props) => {
  return (
    <nav className="link-group">
      <a className="link-btn" href="https://github.com/jyun9504">
        <img className="link-icon" alt="github icon" src={ IconGithub } />
      </a>
      <a className="link-btn" href="https://jyun9504.github.io/">
        <img className="link-icon" alt="blog icon" src={ IconBlog } />
      </a>
      <a className="link-btn" href="https://www.instagram.com/jyun9504/">
        <img className="link-icon" alt="instagram icon" src={ IconInstagram } />
      </a>
      <a className="link-btn" href="mailto:jyun9504@gmail.com">
        <img className="link-icon" alt="mail icon" src={ IconMail } />
      </a>
    </nav>
  )
}

export default LinkGroup;