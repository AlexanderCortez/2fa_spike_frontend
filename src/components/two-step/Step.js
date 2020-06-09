import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Step = ({ step, title, component }) => (
  <Wrapper>
    <div className="header">
      <Circle>
        <span>{step}</span>
      </Circle>
      <span
        className="step-title"
      >
        {title}
      </span>
    </div>
    <div className="content">
      {component}
    </div>
  </Wrapper>
);

Step.propTypes = {
  step: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  component: PropTypes.node,
};

Step.defaultProps = {
  component: <div />,
};

const Wrapper = styled.div`
    margin: 20px 0;
  .header {
    display: flex;
    align-items: center;
    .step-title {
      color: #172B4D;
    }
  }
  .content {
    padding: 10px 0 0 30px;
  }
`;

const Circle = styled.div`
  background-color: rgba(7, 71, 166, 0.6);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 500;
  margin-right: 10px;
`;
