import React from "react";
import { SiteFooter, Social } from "./Footer.styled";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <SiteFooter>
            <Social>
        <a rel="noreferrer" target='_blank'  href='https://www.linkedin.com/in/ozturkersen/'><FaLinkedin size={20} /></a>
        <a rel="noreferrer" href="https://github.com/ersenozturk" target='_blank' ><FaGithub size={20} /></a>
      </Social>
      <div>
        This application was created by <b> Ersen OZTURK</b>
      </div>

      <div>©{new Date().getFullYear()} DAMN DELICIOUS.</div>
    </SiteFooter>
  );
};

export default Footer;
