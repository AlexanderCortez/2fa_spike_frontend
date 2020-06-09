import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const QRComponent = ({
  qrImage,
  userEmail,
  secretKey,
}) => qrImage && (
  <Wrapper>
    <img
      alt=""
      src={qrImage}
      width="162"
      height="162"
    />
    <div className="instructions">
      <p>
        <span className="title">
          Can&apos;t scan the code?
        </span>
        <span>You can add the code to your application manually using the following details:</span>
      </p>
      <p>
        <span className="title">
          Account:
        </span>
        <span>{userEmail}</span>
      </p>
      <p>
        <span className="title">
          Key:
        </span>
        <span>{secretKey}</span>
      </p>
    </div>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  .instructions {
    * { font-size: 14px !important; }
    width: 450px;
    padding-left: 20px;
    padding-top: 20px;
    .title {
      margin-right: 5px;
      color: #172B4D;
      font-weight: 500;
    }
  }
`;

QRComponent.propTypes = {
  qrImage: PropTypes.string.isRequired,
  userEmail: PropTypes.string.isRequired,
  secretKey: PropTypes.string.isRequired,
};
