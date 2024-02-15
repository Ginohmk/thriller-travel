import React, { useRef, useState } from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import { FaArrowRightLong, FaArrowLeftLong } from 'react-icons/fa6';
import { DashboardConatiner } from './UserDashboard.style';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { VscCalendar } from 'react-icons/vsc';
import { RiUser3Fill } from 'react-icons/ri';
import dayjs from 'dayjs';
import { searchResult, tripValues, userTrips } from './UserDashboard.mockData';
import { MdChair } from 'react-icons/md';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const UserDashboard = () => {
  const calendarRef = useRef();
  const [startDate, setStartDate] = useState(new Date());
  const [tripId, setTripId] = useState(1);
  const [minRange, setMinRange] = useState(0);
  const [maxRange, setMaxRange] = useState(5000);
  const [ticketValue, setTicketValue] = useState('TICKET OF CLASS');

  const [tripValue, setTripValue] = useState({ id: 1, text: 'NON STOP' });
  const [searchValue, setSearchValue] = useState(searchResult);

  const handleUpdateSearch = (updateValue) => {
    setSearchValue((preState) =>
      preState.map((value) => {
        return {
          ...value,
          type: updateValue?.text,
        };
      })
    );
  };
  return (
    <DashboardConatiner>
      <section className="tripSection">
        <div className="topSection">
          <div className="topSection-arrival">
            <div className="topSection-arrival__location">
              <IoLocationSharp />
              <p>New York (JFK)</p>
            </div>

            <div className="topSection-arrival__trip">
              {tripId === 2 && <FaArrowLeftLong />}
              <FaArrowRightLong />
            </div>

            <div className="topSection-arrival__location">
              <IoLocationSharp />
              <p>MUMBAI (BOM)</p>
            </div>
          </div>

          <div
            className="topSection-date container"
            onClick={() => {
              calendarRef.current.setOpen(true);
            }}
          >
            <VscCalendar />

            <div className="dateDisplay">
              <div className="dateDisplay-view">
                <p>{dayjs(startDate).format('DD MMMM YYYY')}</p>
              </div>
              <DatePicker
                ref={calendarRef}
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="dd MMMM YYYY"
                minDate={new Date()}
              />
            </div>
          </div>

          <div className="container">
            <RiUser3Fill />
            <p>2 Travellers</p>
          </div>
        </div>

        <div className="tripWay topSection  ">
          <div className="tripWay-trip">
            {userTrips.map(({ text, id }) => (
              <p
                className={id === tripId ? 'slectedTrip' : ''}
                key={id}
                onClick={() => setTripId(id)}
              >
                {' '}
                {text}
              </p>
            ))}
          </div>

          <div className="tripWay-class">
            <MdChair />
            <p>
              {ticketValue === 'TICKET OF CLASS' ? 'FIRST CLASS' : ticketValue}
            </p>
          </div>

          <div className="tripWay-search">
            <p>SEARCH</p>
          </div>
        </div>
      </section>

      <section className="tripSearchResult">
        <header>
          <h3>RESULT (25)</h3>
          <div className="header-rightSection">
            <button>FILTER</button>

            <div className="header-rightSection__selectContainer">
              <select onChange={(e) => setTicketValue(e.target.value)}>
                <option value="FIRST CLASS" defaultValue="TICKET OF CLASS">
                  TICKET OF CLASS
                </option>
                <option value="FIRST CLASS">FIRST CLASS</option>
                <option value="ECONOMIC CLASS">ECONOMIC CLASS</option>
              </select>
            </div>
          </div>
        </header>

        <div className="tripSearchResult-details">
          <div className="tripSearchResult-details__resutDetails">
            {searchValue.map(
              ({
                name,
                image,
                id,
                price,
                dest,
                destTime,
                from,
                fromTime,
                duration,
                type,
              }) => (
                <>
                  <div className="tripSearchResult-details__resutDetails-item">
                    <div className="tripSearchResult-details__resutDetails-item__imgCon">
                      <LazyLoadImage
                        src={image}
                        alt={name}
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className="tripSearchResult-details__resutDetails-item__locationTime">
                      <p>{from}</p>
                      <span>{fromTime}</span>
                    </div>

                    <div className="tripSearchResult-details__resutDetails-item__flightDetail">
                      <span className="tripSearchResult-details__resutDetails-item__flightDetail-flightName">
                        {name}
                      </span>
                      <p className="tripSearchResult-details__resutDetails-item__flightDetail-flightTime">
                        {duration}
                      </p>
                      <p>{type}</p>
                    </div>

                    <div className="tripSearchResult-details__resutDetails-item__locationTime">
                      <p>{dest}</p>
                      <span>{destTime}</span>
                    </div>

                    <div className="tripSearchResult-details__resutDetails-item__flightPrice">
                      <p>{price}</p>
                      <button>BOOK NOW</button>
                    </div>
                  </div>
                  {id !== searchResult.length && (
                    <div className="tripSearchResult-details__resutDetails-line">
                      <div className="tripSearchResult-details__resutDetails-line__circle circleLeft"></div>
                      <div className="tripSearchResult-details__resutDetails-line__circle circleRight"></div>
                    </div>
                  )}
                </>
              )
            )}
          </div>

          <div className="tripSearchResult-details__ticket">
            <div className="tripSearchResult-details__ticket-header">
              <div className="tripSearchResult-details__ticket-header__locationItem">
                <p>From</p>
                <h2>JFK</h2>
              </div>

              <p className="tripSearchResult-details__ticket-header__locationItemRoute">
                {tripValue?.text}
              </p>

              <div className="tripSearchResult-details__ticket-header__locationItem">
                <p>To</p>
                <h2>BOM</h2>
              </div>
            </div>

            <div className="tripSearchResult-details__ticket-imgCon">
              <LazyLoadImage
                src="/images/dest-source.png"
                width={100}
                height={100}
                alt="source to dest picture"
              />
            </div>

            <div className="tripSearchResult-details__ticket-tripDetails">
              <div className="tripSearchResult-details__ticket-tripDetails__tripValues">
                {tripValues.map(({ id, text }) => (
                  <p
                    key={id}
                    className={tripValue?.id === id ? 'active-trip' : ''}
                    onClick={() => {
                      setTripValue({ id, text });
                      handleUpdateSearch({ id, text });
                    }}
                  >
                    {text}
                  </p>
                ))}
              </div>

              <div className="tripSearchResult-details__ticket-tripDetails__tripPriceRange">
                <p>PRICE</p>

                <div className="tripSearchResult-details__ticket-tripDetails__tripPriceRange-priceRangeCon">
                  <input
                    type="range"
                    value={minRange}
                    min="0"
                    max="5000"
                    onChange={(e) => setMinRange(e.target.value)}
                  />
                  <input
                    type="range"
                    min="5000"
                    max="10000"
                    value={maxRange}
                    onChange={(e) => setMaxRange(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DashboardConatiner>
  );
};

export default UserDashboard;
