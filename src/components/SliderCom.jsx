import React, { useState } from "react";
import "../styles/slider.css";
import { Slider } from "antd";

export default function SliderCom({ text, field, val, handleChange }) {
  const [inputValue, setInputValue] = useState(val);

  const handleSlideChange = (value) => {
    if (field === "amt") {
      value = Math.max(100000, Math.min(10000000, value));
    } else if (field === "int") {
      value = Math.max(1, Math.min(30, value));
    } else if (field === "yrs") {
      value = Math.max(1, Math.min(30, value));
    }
    setInputValue(value);
    handleChange(value);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputBlur = () => {
    const value = parseFloat(inputValue.replace(/[^\d.]/g, ''));
    if (!isNaN(value)) {
      handleSlideChange(value);
    } else {
      setInputValue(val); // Reset to the last valid value
    }
  };

  const getSliderProps = () => {
    if (field === "amt") {
      return {
        min: 100000,
        max: 10000000,
        step: 1000
      };
    } else if (field === "int") {
      return {
        min: 1,
        max: 30,
        step: 0.1
      };
    } else if (field === "yrs") {
      return {
        min: 1,
        max: 30,
        step: 1
      };
    }
    return {};
  };

  return (
    <div className="sliderMainContainer">
      <div className="sliderHeader">
        <span className="sliderTitle">{text}</span>
        <span className="sliderField">
        <span>{field == "amt" ? "₹ " : "" }</span>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          className="sliderFieldInput"
        />
        <span>{field == "int" ? " %" : field == "yrs" ? " Yr" :""} </span>
        </span>
      </div>
      <div className="sliderMain">
        <Slider
          {...getSliderProps()}
          value={val}
          tooltip={{ open: false }}
          onChange={handleSlideChange}
        />
      </div>
    </div>
  );
}
