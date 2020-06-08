import { connect } from 'react-redux';
import { LoginComponent } from './LogInComponent';
import { signIn } from '../../actions/appActions';

const mapStateToProps = (state) => {
  const { logged, currentUser } = state.AppReducer;
  return {
    logged,
    currentUser,
  };
};

const mapDispatchToProps = (dispatch) => ({
  signIn: (data) => dispatch(signIn(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
