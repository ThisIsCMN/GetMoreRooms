import React, { Component } from 'react';
import Header from './Header';
import axios from 'axios';
import AddReservation from './AddReservation';
import { broswerHistory, Link } from 'react-router';


const Dashboard = (props) =>{
		return (
		<div>
			<Header />
			<section id="status-messages">
				<div className="container">
					<h1>Welcome, {props.children.user} </h1>
				</div>
			</section>
			<section id="main">
				<div className="container cf">
					<div id="reservations">
						<h2>Your Reservations</h2>
						<ul>
							{props.children.reservations}
						</ul>
						<Link to="add-reservation" className="dashboard-button">Make Reservation</Link>
					</div>

					<div id="rooms">
						<h2>Your Rooms</h2>
						<div id="room-headings" className="cf">
							<div className="name">Name</div>
							<div className="capacity">Capacity</div>
						</div>

						<ul>
							{props.children.rooms.map(function(room, index) {
								return (
									<li className="room" key={index}>
										<div className="room-name">{room.name}</div>
										<div className="room-size">{room.capacity}</div>
									</li>
								)
							})}
						</ul>
						<a href="#" className="dashboard-button">Add Room</a>
					</div>
				</div>
			</section>
		</div>
		)
  }
export default Dashboard;