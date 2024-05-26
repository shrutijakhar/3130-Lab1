import React from 'react';

const About = ({ visits }) => {
  return (
    <div>
      <h1>About Page</h1>
      <p>Welcome to the About Page</p>
      <p>Home page visited {visits} times</p>
    </div>
  );
};

export default About;
