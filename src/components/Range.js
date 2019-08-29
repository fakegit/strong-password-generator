import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  .range-slider__range {
    -webkit-appearance: none;
    width: calc(100% - 73px);
    height: 10px;
    border-radius: 5px;
    background: #d7dcdf;
    outline: none;
    padding: 0;
    margin: 0;
    &::-webkit-slider-thumb {
      appearance: none;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #2196f3;
      cursor: pointer;
      transition: background 0.15s ease-in-out;

      &:hover {
        background: #219699;
      }
    }

    &:active::-webkit-slider-thumb {
      background: #219699;
    }

    &::-moz-range-thumb {
      width: 20px;
      height: 20px;
      border: 0;
      border-radius: 50%;
      background: #2196f3;
      cursor: pointer;
      transition: background 0.15s ease-in-out;

      &:hover {
        background: #219699;
      }
    }

    &:active::-moz-range-thumb {
      background: #219699;
    }
    &:focus {
      &::-webkit-slider-thumb {
        box-shadow: 0 0 0 3px #fff, 0 0 0 6px #219699;
      }
    }
  }

  .range-slider__value {
    display: inline-block;
    position: relative;
    width: 60px;
    color: #fff;
    line-height: 20px;
    text-align: center;
    border-radius: 3px;
    background: #2196f3;
    padding: 5px 10px;
    margin-left: 8px;

    &:after {
      position: absolute;
      top: 8px;
      left: -7px;
      width: 0;
      height: 0;
      border-top: 7px solid transparent;
      border-right: 7px solid #2196f3;
      border-bottom: 7px solid transparent;
      content: '';
    }
  }

  ::-moz-range-track {
    background: #d7dcdf;
    border: 0;
  }

  input::-moz-focus-inner,
  input::-moz-focus-outer {
    border: 0;
  }
`;
const RangeSlider = ({ value = 0, onChange }) => {
  return (
    <Wrapper>
      <input
        className="range-slider__range"
        onChange={onChange}
        type="range"
        value={value}
        min="4"
        max="32"
        step="1"
      />
      <span className="range-slider__value">{value}</span>
    </Wrapper>
  );
};

export default RangeSlider;
