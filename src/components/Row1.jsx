import React from 'react'
import Card from './Card'
import ComingSoonCard from './ComingSoonCard'

import notes from '../notes'


const createCard = (note) => {
    return (
        <div className='col-lg-3 col-md-4 d-flex justify-content-center'>
            <Card 
                course={note.course}
                name={note.name}
                description={note.description}
                link={note.link}
            />
        </div>
    );
}


const HandwrittenNotes = () => {
  return (
    <section id='handwritten-notes'>
        <h2>Handwritten Notes</h2>
        <div className='row container-fluid'>
            {notes.map(createCard)}

            <div className='col-lg-3 col-md-4 d-flex justify-content-center'>
                <ComingSoonCard
                    course='CSCI 26500'
                    name="Computer Theory"
                    description="Recursion, regular sets, regular expressions, finite automata, context-free grammars, pushdown automata."
                />
            </div>

        </div>
    </section>
  )
}

export default HandwrittenNotes