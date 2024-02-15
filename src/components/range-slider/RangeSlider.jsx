import React, { useEffect, useRef, useState } from 'react';
import { RangeSliderContainer } from './RangeSlider.style';

const RangeSlider = () => {
  const sliderMinValue = 9000;
  const sliderMaxValue = 8000;
  const [minValue, setMinValue] = useState(1000);
  const [maxValue, setMaxValue] = useState(5000);
  const progressTrack = useRef(null);
  const minToolTip = useRef(null);
  const maxToolTip = useRef(null);

  const slideMin = (event) => {
    setMinValue(event.target.value);
  };

  const slideMax = (event) => {
    setMaxValue(event.target.value);
  };

  useEffect(() => {
    minToolTip.current.style.left = (minValue / sliderMinValue) * 100 + '%';

    progressTrack.current.style.right =
      100 - (maxValue / sliderMaxValue) * 100 + '%';
    maxToolTip.current.style.right =
      100 - (maxValue / sliderMaxValue) * 100 + '%';
  }, [minValue, maxValue]);

  return (
    <RangeSliderContainer>
      {/* Slider track */}
      <div className="slider-progress" ref={progressTrack}></div>

      {/* Double Range Inputs */}
      <input
        type="range"
        value={minValue}
        min="1000"
        max="5000"
        name="min-val"
        className="slider sliderMin"
        onChange={(e) => slideMin(e)}
      />
      <input
        type="range"
        value={maxValue}
        min="5000"
        max="8000"
        name="max-val"
        className="slider sliderMax"
        onChange={(e) => {
          slideMax(e);
        }}
      />

      {/* Tool tips */}
      <div className="toolTip minTooltip" ref={minToolTip}>
        ${minValue}
      </div>
      <div className="toolTip maxTooltip" ref={maxToolTip}>
        ${maxValue}
      </div>
    </RangeSliderContainer>
  );
};

export default RangeSlider;
