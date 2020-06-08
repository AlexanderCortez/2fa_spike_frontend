import { connect } from 'react-redux';
import { SignUpComponent } from './SignUpComponent';
import { signUp } from '../../actions/appActions';

const mapDispatchToProps = (dispatch) => ({
  signUp: (data) => dispatch(signUp(data)),
});

export default connect(null, mapDispatchToProps)(SignUpComponent);
