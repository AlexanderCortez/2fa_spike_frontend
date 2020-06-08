import React from 'react';
import { Step } from './Step';
import { QRComponent } from './steps/QRComponent';
import { Verification } from './steps/Verification';

export const Steps = () => (
  <div>
    <Step
      step="1"
      title="Download a two-step verification app"
    />
    <Step
      step="2"
      title="Scan this QR code with your verification app"
      component={<QRComponent />}
    />
    <Step
      step="3"
      title="Enter the resulting verification code"
      component={<Verification />}
    />
  </div>
);
