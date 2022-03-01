import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className="card border border-dark">
		<div className="card-body d-flex flex-column">
			<h5 className="card-title">{props.course}</h5>
			<h6 className="card-subtitle text-muted">{props.name}</h6>
			<p className="card-text">{props.description}</p>
			<a
				href={props.link}
				target="_blank"
				rel="noreferrer noopener"
				class="btn btn-primary mt-auto"
			>
				View Notes
			</a>
		</div>
    </div>
  );
};

export default Card;