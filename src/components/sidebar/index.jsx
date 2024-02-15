import React from 'react';
import { SidebarContainer } from './Sidebar.style';
import { activeUsersData, sideBarLink } from './Sidebar.mockData';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <div className="userProfile">
        <div className="userProfile-profileImg">
          <LazyLoadImage
            src="/images/user-one.jpg"
            alt="User"
            width={100}
            height={100}
          />
        </div>

        <div className="userProfile-details">
          <h2>Alex Johnson</h2>
          <p>alex.johnson@gmail.com</p>
        </div>
      </div>

      <section className="sideBarButtom">
        <ul aria-label="nav" className="sideBarButtom-nav">
          {sideBarLink.map(({ link, text, id, icon }) => (
            <li key={id}>
              {icon}
              <NavLink
                className={({ isActive }) => (isActive ? 'active-link' : '')}
                to={link}
              >
                {text}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="sideBarButtom-activeUser">
          <h3>ACTIVE USERS</h3>

          <div className="sideBarButtom-activeUser__imgContainers">
            {activeUsersData?.users.map(({ image, id }) => (
              <div
                key={id}
                style={{ zIndex: `${id}` }}
                className="sideBarButtom-activeUser__imgContainers-item"
              >
                <LazyLoadImage
                  src={image}
                  width={100}
                  height={100}
                  alt="Active user"
                />
              </div>
            ))}

            <div className="sideBarButtom-activeUser__imgContainers-totalUsers">
              {activeUsersData?.totalUsers}
            </div>
          </div>
        </div>

        <div className="sideBarButtom-worldImg">
          <LazyLoadImage
            src="/images/world.png"
            alt="world image"
            width={100}
            height={100}
          />
        </div>
      </section>
    </SidebarContainer>
  );
};

export default Sidebar;
