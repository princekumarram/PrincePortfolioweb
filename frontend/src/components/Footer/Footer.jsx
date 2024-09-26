import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsYoutube, BsInstagram, BsLinkedin } from "react-icons/bs";

import "./Footer.css";
import leetcode from "../../Images/leetcode.png"

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
      
Hey, I am  <b>Prince Kumar</b> and i am dedicated and skilled Computer Science student from the Department of Computer Science & Engineering, with a strong focus on full stack development. He is proficient in both front-end and back-end technologies, making him adept at building comprehensive web applications. His technical expertise includes HTML, CSS, JavaScript, React, Node.js, Express, and databases like MongoDB and SQL. He has successfully completed several projects that demonstrate his ability to design, develop, and deploy robust applications.
          
            <b>Prince  Coder</b>
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/princekumarram" target="black">
          <BsGithub />
        </a>
        <a href="https://youtube.com/6packprogrammer/" target="black">
          <BsYoutube />
        </a>
        <a href="https://www.instagram.com/prince_kumar_manmarjiya/?next=%2F&hl=en" target="black">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/in/princekumarram" target="black">
          <BsLinkedin />
        </a>

         
         <a className="leetcodeIcons" href="https://www.leetcode.com/princekumarram" target="_blank" rel="noopener noreferrer">
         <img src={leetcode} alt="Leetcode Icon" />
          </a>
         
         </div>
      </div>  
  );
};

export default Footer;
