import React, { Component } from 'react';
import Header from './Header';
import { broswerHistory, Link } from 'react-router';

const AddReservation = (props) => {
  return (
    <div>
      <Header />
        <section id="status-messages">
          <div className="container">
            <h1>Add a Reservation</h1>
          </div>
        </section>
        <section id="main">
          <div className="container cf">
            hello world
          </div>
        </section>
    </div>
  )
}

export default AddReservation;