
import { Typography } from '@mui/material'
import React from 'react'
import "./About.css";
const About = ({ about }) => {
  return (
    <div className='about'>
        <div className="aboutContainer"> 
            <Typography>As a passionate learner, I stays updated with the latest trends</Typography>
        </div>
        <div className="aboutContainer2">
            <div>
                <img
                 src={"https://avatars.githubusercontent.com/u/132006575?v=4"} 
                 alt="PKR"
                className='aboutAvatar'
                />



                
                <Typography
                 variant="h4" 
                 style={{ margin: "1vmax 0", color: "black" }}
                
                >Prince Kumar Ram</Typography>
                <Typography > <b>Full stack Developer</b></Typography>
                <Typography
                 style={{ margin: "1vmax 0", textAlign: "center" }}
                
                ><b>Student</b></Typography>
            </div>

            <div>
              <Typography
              style={{
                wordSpacing:"5px",
                lineHeight:"59px",
                letterSpacing:"5px",
                textAlign:"right"
              }}
              
              >
I am a dedicated and skilled full stack developer with a passion for creating dynamic and user-friendly web applications. As a student with a strong foundation in both front-end and back-end technologies.
              </Typography>
            </div>

         </div>
    </div>
  )
}

export default About
