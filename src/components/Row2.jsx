import React from 'react'
import Card from './Card'
import ComingSoonCard from './ComingSoonCard'

const FlashCards = () => {
  return (
    <section id='flash-cards'>
        <h2>Flash Cards</h2>
        <div className='row container-fluid'>

        <div className='col-lg-3 col-md-4 d-flex justify-content-center'>
            <Card 
                course='SPAN 10100'
                name="Elementary Spanish 1"
                description="Elementary Spanish for English speakers."
                link="https://quizlet.com/seamuse/folders/span-10100/sets"
            />
        </div>

        <div className='col-lg-3 col-md-4 d-flex justify-content-center'>
            <ComingSoonCard 
                course='HIST 12200'
                name="19th and 20th Century Europe"
                description="Scientific and industrial revolutions, liberalism, imperialism, socialism and fascism, total war, reconstruction."
                link=""
            />
        </div>

        </div>
    </section>
  )
}

export default FlashCards