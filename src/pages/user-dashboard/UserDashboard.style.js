import styled from 'styled-components';

export const DashboardConatiner = styled.section`
  display: flex;
  flex-direction: column;

  gap: 3rem;

  .tripSection {
    background-color: var(--white);
    padding: 1rem;
    border-radius: 25px;
    font-weight: 600;

    display: flex;
    flex-direction: column;
    gap: 2rem;

    .topSection {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;

      .container {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        background-color: var(--light-primary-color);

        padding: 1.4rem;
        border-radius: 35px;
        flex: 1;

        svg {
          width: 25px;
          height: 25px;
        }
      }

      &-arrival {
        background-color: var(--light-primary-color);
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1.3rem;
        flex: 2;
        border-radius: 35px;

        &__trip {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 45px;
          height: 45px;
          background-color: var(--primary-color);
          border-radius: 50%;

          svg {
            color: var(--white);
          }
        }

        &__location {
          display: flex;
          align-items: center;
          gap: 1rem;

          svg {
            width: 25px;
            height: 25px;
          }
        }
      }

      &-date {
        cursor: pointer;

        .dateDisplay {
          position: relative;
          &-view {
            padding: 0.2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            position: relative;
            z-index: 2;
            background-color: var(--light-primary-color) !important;
          }

          .react-datepicker-wrapper {
            outline: none;
            border: 2px solid red;
            position: absolute;
            top: 0;
            z-index: 0;

            .react-datepicker__input-container {
              input[type='text'] {
                border: none;
                background-color: var(--light-primary-color) !important;
                outline: none;
                color: var(--font-color);
                font-size: clamp(1.36rem, 1vw, 1.5rem);
                font-weight: 600;

                width: 100%;
                &:focus,
                &:active {
                  outline: none;
                  border: none;
                }
              }
            }
          }
        }
      }
    }

    .tripWay {
      &-class,
      &-search,
      &-trip {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        padding: 1.4rem;
        border-radius: 35px;
        flex: 1;
        background-color: var(--light-primary-color);

        svg {
          width: 25px;
          height: 25px;
        }
      }

      &-search {
        background-color: var(--secondary-btn-color);
        color: var(--white);
      }

      &-trip {
        flex: 2;
        display: flex;
        align-items: center;

        justify-content: space-between;
        gap: 2rem;

        padding: 0.3rem 0.5rem;

        p {
          padding: 1.35rem 1.3rem;
          cursor: pointer;
          height: 100%;
          border-radius: 35px;
          border: 2px solid transparent;

          &:hover {
            border: 2px solid var(--primary-color);
          }
        }

        .slectedTrip {
          background-color: var(--primary-color);
          color: var(--white);
        }
      }
    }
  }

  .tripSearchResult {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding: 1rem;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .header-rightSection {
        display: flex;
        align-items: center;
        gap: 2rem;

        button {
          border: none;
          outline: none;
          background-color: var(--white);
          max-width: 160px;
          width: 100%;
          padding: 1rem 3rem;
          border-radius: 25px;
          color: var(--font-color);
          font-size: clamp(1rem, 1vw, 1.5rem);
          font-weight: bold;
          cursor: pointer;
        }

        &__selectContainer {
          height: 50px;
          width: 210px;
          padding: 0 0.3rem;
          background-color: var(--white);
          border-radius: 25px;

          select {
            font-weight: bold;
            width: 100%;
            height: 100%;
            color: var(--font-color);
            font-size: clamp(1rem, 1vw, 1.5rem);
            border: none;
            outline: none;
            background-color: var(--white);
            border-radius: 25px;
          }
        }
      }
    }

    &-details {
      display: flex;
      gap: 3.5rem;
      width: 100%;

      &__resutDetails {
        flex: 2;
        background-color: var(--white);
        padding: 2rem 0;
        max-width: 750px;
        border-radius: 35px;

        &-item {
          padding: 1.8rem 1.4rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          justify-content: space-between;

          &__imgCon {
            height: 100%;

            img {
              object-fit: contain;
              image-rendering: crisp-edges;
            }
          }

          &__locationTime {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            p {
              font-weight: bold;
              font-size: clamp(2rem, 1vw, 2.3rem);
            }

            span {
              font-size: clamp(1.3rem, 1vw, 1.63rem);
            }
          }

          &__flightDetail {
            display: flex;
            flex-direction: column;
            gap: 0.8rem;

            &-flightTime {
              color: var(--secondary-color);
              font-weight: bold;
            }
          }

          &__flightPrice {
            display: flex;
            flex-direction: column;
            gap: 0.8rem;

            p {
              font-weight: bold;
              align-self: flex-end;
            }

            button {
              cursor: pointer;
              background-color: var(--secondary-btn-color);
              color: var(--white);
              font-weight: bold;
              border: none;
              outline: none;
              padding: 0.8rem 1.4rem;
              border-radius: 35px;
            }
          }
        }

        &-line {
          white-space: nowrap;
          position: relative;
          overflow: hidden;
          width: 100%;
          position: relative;

          &__circle {
            height: 40px;
            width: 40px;
            border-radius: 50%;
            background-color: var(--bg-color);
            position: absolute;
          }

          .circleLeft {
            left: -1rem;
          }

          .circleRight {
            right: -1rem;
          }

          &::after {
            content: '----------------------------------------------';
            letter-spacing: 6px;
            font-size: 30px;
            color: var(--light-primary-color);
            display: inline-block;
            vertical-align: 3px;
            padding-left: 10px;
            overflow-x: hidden;
            width: 100%;
          }
        }
      }

      &__ticket {
        height: 100%;
        background-color: var(--semi-primary-color);
        flex: 1;
        border-radius: 35px;
        color: var(--white);

        &-header {
          display: flex;
          align-items: flex-end;
          gap: 1rem;
          justify-content: space-between;
          padding: 2rem 1.7rem 0 1.7rem;
        }

        &-imgCon {
          padding: 2rem 1.7rem 0 1.7rem;
          margin-top: 8rem;
          max-width: 400px;
          width: 100%;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        &-tripDetails {
          width: 100%;
          margin-top: 3rem;
          display: flex;
          flex-direction: column;
          gap: 4rem;
          background-color: var(--primary-color);
          padding: 3rem 1rem;

          &__tripValues {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;

            .active-trip {
              background-color: var(--secondary-btn-color);
            }

            p {
              cursor: pointer;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 35px;
              font-size: clamp(0.96rem, 1vw, 1rem);
              padding: 1rem;
            }
          }

          &__tripPriceRange {
            display: flex;
            flex-direction: column;

            gap: 3rem;

            &-priceRangeCon {
              background-color: var(--secondary-btn-color);
              display: flex;
              input[type='range'] {
                width: 100%;
              }
            }
          }
        }
      }
    }
  }
`;
