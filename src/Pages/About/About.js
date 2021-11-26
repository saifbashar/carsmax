import React from 'react';
import './About.css';
import { Image } from 'react-bootstrap';
const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="text-center">
          <h1>
            About the <span className="text-danger">Founders</span>
          </h1>
          <Image
            src="https://codeshikho-saifbashar.netlify.app/static/media/my-bg2.e72d9790.png"
            className="img-fluid"
            width="300px"
          ></Image>
          <p>
            As students at Stanford University in 1991, Anoop Goyal and Prakash
            Sikchi bonded over their passion for travel. Over time, they
            graduated from spontaneous bachelor backpacking trips to organized
            family holidays with their spouses and kids.
          </p>
          <p>
            Seeing a need to simplify the trip planning process, the idea for
            Inspirockp was born while they were on one of their adventures.
            Perched on a rock overlooking Inspiration Lake in the Eastern
            Cascades in Washington state. Inspirock encompasses both an
            inspiration and a vision. It is rooted in the belief that travel
            universally connects us all and helps people discover themselves.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
