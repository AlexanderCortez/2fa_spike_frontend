import { connect } from 'react-redux';
import { TwoStepComponent } from './TwoStepComponent';
import { generateQR, activateTwoStep, deactivateTwoStep } from '../../actions/twoFactorActions';
import { signOut } from '../../actions/appActions';

const mapStateToProps = (state) => {
  const { qrImage, secretKey } = state.TwoStepReducer;
  const { currentUser } = state.AppReducer;
  return {
    qrImage,
    currentUser,
    secretKey,
  };
};

const mapDispatchToProps = (dispatch) => ({
  generateQR: () => dispatch(generateQR()),
  activateTwoStep: (token) => activateTwoStep(token),
  deactivateTwoStep: () => dispatch(deactivateTwoStep()),
  signOut: (history) => dispatch(signOut(history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TwoStepComponent);
