import React from 'react'
import './Card.css'

const ComingSoonCard = (props) => {
  return (
    <div className="card border border-dark">
        <div className="card-body d-flex flex-column">
            <h5 className="card-title">{props.course}</h5>
            <h6 className="card-subtitle text-muted">{props.name}</h6>
            <p className="card-text">{props.description}</p>
            <button 
              type="button"
              class="btn btn-outline-dark mt-auto"
              data-mdb-ripple-color="dark"
            >
              Coming Soon
            </button>
        </div>
    </div>
  )
}

export default ComingSoonCard