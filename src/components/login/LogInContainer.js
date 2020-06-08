import { connect } from 'react-redux';
import { LoginComponent } from './LogInComponent';
import { signIn, setAsLogged } from '../../actions/appActions';
import { validateTwoStepToken } from '../../actions/twoFactorActions';

const mapStateToProps = (state) => {
  const { logged, currentUser } = state.AppReducer;
  return {
    logged,
    currentUser,
  };
};

const mapDispatchToProps = (dispatch) => ({
  signIn: (data) => dispatch(signIn(data)),
  validateTwoStepToken: (token, accessToken) => dispatch(validateTwoStepToken(token, accessToken)),
  setAsLogged: (accessToken) => dispatch(setAsLogged(accessToken)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
