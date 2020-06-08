import React from 'react';
import PropTypes from 'prop-types';

export const QRComponent = ({ qrImage }) => (
  <img
    alt=""
    src={qrImage}
    width="162"
    height="162"
  />
);

QRComponent.propTypes = {
  qrImage: PropTypes.string.isRequired,
};
