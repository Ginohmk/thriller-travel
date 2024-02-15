import styled from 'styled-components';

export const SidebarContainer = styled.section`
  max-width: 340px;
  width: 100%;
  flex: 1;

  padding-top: 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0 20px 15px 0;
  color: var(--white);
  background-color: var(--primary-color);
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  /* Remove scroll */

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  .userProfile {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    &-profileImg {
      height: 150px;
      width: 150px;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }

    &-details {
      h2 {
        font-weight: bold;
        text-transform: uppercase;
      }
    }
  }

  .sideBarButtom {
    background-color: var(--semi-primary-color);
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    padding-left: 2rem;
    padding-bottom: 2.5rem;

    &-nav {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
      width: 100%;

      padding-top: 2rem;

      li:has(.active-link) {
        width: calc(100% + 1.5rem);
        background-color: var(--bg-color);
        color: var(--font-color);
      }

      li {
        list-style: none;
        display: flex;
        gap: 2rem;
        align-items: center;
        padding: 0.8rem 1rem;
        border-radius: 35px;

        /* .active-link {
          border: 2px solid red;
        } */

        svg {
          color: var(--secondary-color);
          width: 35px;
          height: 35px;
        }
        a {
          font-size: clamp(1.35rem, 1vw, 2rem);
          text-transform: uppercase;
        }
      }
    }

    &-activeUser {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
      padding-left: 1rem;

      h3 {
        color: var(--secondary-color);
      }

      &__imgContainers {
        display: flex;
        align-items: center;

        &-item {
          position: relative;
          &::before {
            display: flex;
            align-items: center;
            content: ' ';
            width: 50px;
            height: 50px;
            margin-left: -10px;
            position: absolute;
            border-radius: 50%;
            background-color: var(--primary-color);
          }

          img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            position: relative;
            z-index: 2;
            margin-left: -5px;
          }
        }

        &-totalUsers {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: var(--secondary-color);
          margin-left: -10px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 5;
          padding-left: 0.2rem;
        }
      }
    }

    &-worldImg {
      max-width: 210px;
      margin-top: -10px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;
