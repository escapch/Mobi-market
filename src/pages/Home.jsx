import { useSelector } from 'react-redux';
import Header from '../components/Header';

import axios from 'axios';
import { useState } from 'react';
import { Navigate } from 'react-router';
// import { useSelector } from 'react-redux';

const Home = () => {
  const [navigate, setNavigate] = useState(false);

  const token = localStorage.getItem('token');

  // const getData = async () => {
  //   const axiosInstance = axios.create({
  //     baseURL: url,
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //       'Content-Type': 'application/json',
  //     },
  //   });

  //   axiosInstance
  //     .get('/product')
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error);
  //     });
  // };

  return (
    <div className="home__wrapper">
      <div className="home__container">
        <div className="home__content">
          <div className="home__header">
            <Header />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
