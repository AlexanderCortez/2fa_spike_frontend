import React, { Component } from 'react';
import styled from 'styled-components';
import options from './options.json';

export class Sidebar extends Component {
  getActualRoute = () => {

  }

  renderOption = (option) => {
    const { isLabel, text, id } = option;
    if (isLabel) {
      return (
        <span
          key={id}
          className="content__options-wrapper__option-label"
        >
          {text}
        </span>
      );
    }
    return (
      <button
        key={id}
        className="content__options-wrapper__option"
        type="button"
      >
        <span>
          {text}
        </span>
      </button>
    );
  }

  render() {
    return (
      <Wrapper>
        <div className="content">
          <div className="content__logo">
            <p>Personal Settings</p>
          </div>
          <div className="content__options-wrapper">
            {
              options.map((option) => this.renderOption(option))
            }
          </div>
        </div>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  position: fixed;
  width: 225px;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #fff;
  .content {
    &__logo {
      height: 60px;
      display: flex;
      align-items: center;
      p {
        width: 100%;
        text-align: center;
        font-size: 22px;
        color: #172B4D;
        font-weight: 400;
      }
    }

    &__options-wrapper {
      border-right: 1px solid gray;
      height: calc(100vh - 60px);
      &__option {
        outline: none;
        cursor: pointer;
        background: none;
        width: 100%;
        padding-left: 25px;
        display: flex;
        align-items: center;
        border-style: none;
        height: 35px;
        color: rgb(7, 71, 166);
        font-size: 14px;
        font-weight: 400;
        &:hover {
          background-color: rgba(7, 71, 166, 0.05);
        }
      }

      &__option-label {
        padding: 20px 5px 10px 15px;
        color: #707070;
        font-weight: 500;
        display: block;
        font-size: 12px;
        text-transform: uppercase;
      }
    }
  }
`;
