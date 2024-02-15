import styled from 'styled-components';

export const RangeSliderContainer = styled.section`
  position: relative;
  width: 100%;
  height: 5px;

  .slider {
    position: absolute;
    width: 50%;
    top: 50%;
    transform: translateY(-50%);
    height: 0.1rem;
    border-radius: 0.4rem;
    appearance: none;
    -webkit-appearance: none;
    background-color: var(--slider-bg);

    &::-webkit-slider-thumb {
      appearance: none;
      -webkit-appearance: none;
      transition: 0.3s ease-in-out;
      height: 0.9rem;
      width: 0.9rem;
      border-radius: 50%;
      background-color: var(--secondary-btn-color);
      cursor: pointer;

      &:hover {
        box-shadow: 0 0 0 0.4rem var(--secondary-btn-color-opac);
      }

      &:active {
        box-shadow: 0 0 0 0.8rem var(--secondary-btn-color-opac);
      }
    }

    /* Mozila */
    &::-moz-range-thumb {
      -moz-appearance: none;
      transition: 0.3s ease-in-out;
      height: 0.9rem;
      width: 0.9rem;
      border-radius: 50%;
      background-color: var(--secondary-btn-color);
      cursor: pointer;

      &:hover {
        box-shadow: 0 0 0 0.4rem var(--secondary-btn-color-opac);
      }

      &:active {
        box-shadow: 0 0 0 0.8rem var(--secondary-btn-color-opac);
      }
    }
  }

  .sliderMax {
    right: 0;
  }

  /* Tool Tip */

  .toolTip {
    padding: 0.7rem 1.2rem;
    border: none;
    background-color: var(--secondary-btn-color);
    color: var(--white);
    position: absolute;
    text-align: center;
    white-space: nowrap;
    border-radius: 35px;
    top: 1000%;
  }

  .minTooltip {
    left: 50%;
    transform: translateX(-50%) translateY(-100%);
    z-index: 5%;
  }

  .maxTooltip {
    right: 50%;
    transform: translateX(50%) translateY(-100%);
    z-index: 5%;
  }
`;
