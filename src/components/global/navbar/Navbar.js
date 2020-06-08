import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signOut as LogOut } from '../../../actions/appActions';

const Navbar = (props) => {
  const { signOut, history } = props;
  return (
    <Wrapper>
      <Button
        onClick={() => signOut(history)}
        type="primary"
      >
        Sign out
      </Button>
    </Wrapper>
  );
};

Navbar.propTypes = {
  signOut: PropTypes.func.isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  signOut: (history) => dispatch(LogOut(history)),
});

export default connect(null, mapDispatchToProps)(Navbar);

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 20px;
  height: 50px;
`;
