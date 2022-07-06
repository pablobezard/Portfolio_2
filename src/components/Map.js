import React from 'react';
import styled from 'styled-components';
import MapImg from '../assets/images/map.jpg';
import PText from './PText';

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    right: 10%;
    bottom: 10%;
    padding: 2rem;
    background: var(--deep-dark);
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">Here is me</h3>
          <PText>Nueva Córdoba, Córdoba, Córdoba</PText>
          <a
            className="map__card__link"
            href="https://www.google.com/maps/place/Av.+V%C3%A9lez+Sarsfield+1055,+X5000+C%C3%B3rdoba/data=!4m2!3m1!1s0x9432a3e07900ca7f:0x9a85d8fe56de5f72?sa=X&ved=2ahUKEwiCnoK7l9L4AhVMr5UCHSGJDLAQ8gF6BAgCEAE"
            target="_blank"
            rel="noreferrer"
          >
            Open in google map
          </a>
        </div>
      </div>
      {/* <img src={MapImg} alt="Map" /> */}
    </MapStyles>
  );
}
