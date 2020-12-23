import { Header } from './Header';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { CarouselSlider } from './CarouselSlider';

export const Home = ({ user, slider }) => {
  return (
    <div>
      <Header user={user} />
      <CarouselSlider slider={slider} />
    </div>
  );
};

Home.propTypes = {
  user: PropTypes.shape({}),
};

Home.defaultProps = {
  user: null,
};
