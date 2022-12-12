import React from 'react';
import { NavLink } from 'react-router-dom';
import './ActivitiesComponent.css';

function ActivitiesComponent() {
  return (
    <div className="activitiesComponent">
      <div className="activities__list">
        <div className="activity__box">
          <NavLink to="ladiesFashion">
            <img
              src={
                process.env.PUBLIC_URL +
                `/imgs/majestic_ladies_fashion_division.jpg`
              }
              alt="activity picture"
            />
          </NavLink>
          <div className="box__information">Ladies Fashion</div>
        </div>
        <div className="activity__box">
          <NavLink to="kidsFashion">
            <img
              src={
                process.env.PUBLIC_URL +
                `/imgs/majestic_kids_fashion_division.jpg`
              }
              alt="activity picture"
            />
          </NavLink>
          <div className="box__information">Kids Fashion</div>
        </div>
        <div className="activity__box">
          <NavLink to="mensFashion">
            <img
              src={
                process.env.PUBLIC_URL +
                `/imgs/majestic_mens_fashion_division.jpg`
              }
              alt="activity picture"
            />
          </NavLink>
          <div className="box__information">Mens Fashion</div>
        </div>
        <div className="activity__box">
          <NavLink to="watches">
            <img
              src={
                process.env.PUBLIC_URL +
                `/imgs/majestic_fashion_watches_division.jpg`
              }
              alt="activity picture"
            />
          </NavLink>
          <div className="box__information">Watches</div>
        </div>
        <div className="activity__box">
          <NavLink to="rucolineShoes">
            <img
              src={
                process.env.PUBLIC_URL +
                `/imgs/majestic_fashion_accessories_division.jpg`
              }
              alt="activity picture"
            />
          </NavLink>
          <div className="box__information">Rucoline Shoes</div>
        </div>
      </div>
    </div>
  );
}

export default ActivitiesComponent
