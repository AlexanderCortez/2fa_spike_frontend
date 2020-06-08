import { connect } from 'react-redux';
import { SignUpComponent } from './SignUpComponent';
import { signUp } from '../../actions/appActions';

const mapStateToProps = (state) => {
  const { logged } = state.AppReducer;
  return {
    logged,
  };
};

const mapDispatchToProps = (dispatch) => ({
  signUp: (data) => dispatch(signUp(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpComponent);
