import React from 'react';

import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';

import "./footer.css"

function Footer_() {

  const title_footer: string = "Heberto Urribarri | Universidad Rafael Urdaneta";
  
  return (
    <div className="footer-content">
      <h3 className="text-footer">{title_footer}</h3>
      <a href="https://www.linkedin.com/in/heberto-urribarri-2223601a8/" target="_blank" rel="noreferrer">
        <LinkedinOutlined className="icon-footer"/>
      </a>
      <a href="https://github.com/0trebeh" target="_blank" rel="noreferrer">
        <GithubOutlined className="icon-footer"/>
      </a>
    </div> 
  ); 
}
  
export default Footer_;