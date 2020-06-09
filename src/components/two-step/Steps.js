import React from 'react';
import PropTypes from 'prop-types';
import { Step } from './Step';
import { QRComponent } from './steps/QRComponent';
import { Verification } from './steps/Verification';

export const Steps = ({
  qrImage,
  handleActivation,
  userEmail,
  secretKey,
}) => (
  <div>
    <Step
      step="1"
      title="Download a two-step verification app"
    />
    <Step
      step="2"
      title="Scan this QR code with your verification app"
      component={(
        <QRComponent
          qrImage={qrImage}
          userEmail={userEmail}
          secretKey={secretKey}
        />
      )}
    />
    <Step
      step="3"
      title="Enter the resulting verification code"
      component={(
        <Verification
          handleActivation={handleActivation}
        />
      )}
    />
  </div>
);

Steps.propTypes = {
  qrImage: PropTypes.string,
  handleActivation: PropTypes.func.isRequired,
  userEmail: PropTypes.string.isRequired,
  secretKey: PropTypes.string.isRequired,
};

Steps.defaultProps = {
  qrImage: '',
};
