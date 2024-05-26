import React, { useEffect } from 'react';

const Home = ({ visits, incrementVisits }) => {
  useEffect(() => {
    incrementVisits();
  }, [incrementVisits]);

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page</p>
      <p>Banner ID: B00942565</p>
      <p>Home page visited {visits} times</p>
    </div>
  );
};

export default Home;
