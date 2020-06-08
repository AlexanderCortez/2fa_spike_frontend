import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const Auth = (AppComponents) => {
  class Authenticate extends Component {
    constructor(props) {
      super(props);
      this.state = {
        canAccess: false,
      };
    }

    componentDidMount() {
      const { logged, history } = this.props;
      this.setStateToComponent({ logged, history });
    }

    setStateToComponent = ({ logged, history }) => {
      if (!logged) {
        history.push('/signin');
      } else {
        this.setState({
          canAccess: true,
        });
      }
    }

    render() {
      const { canAccess } = this.state;
      return (
        canAccess && <AppComponents />
      );
    }
  }

  Authenticate.propTypes = {
    logged: PropTypes.bool.isRequired,
    history: PropTypes.objectOf(PropTypes.any).isRequired,
  };

  const mapStateToProps = (state) => {
    const { logged } = state.AppReducer;
    return { logged };
  };

  return connect(mapStateToProps)(withRouter(Authenticate));
};

export default Auth;
