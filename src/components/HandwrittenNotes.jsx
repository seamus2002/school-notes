import React from 'react'
import Card from './Card'
import ComingSoonCard from './ComingSoonCard'

const HandwrittenNotes = () => {
  return (
    <section id='handwritten-notes'>
        <h2>Handwritten Notes</h2>
        <div className='row container-fluid'>
            <div className='col-lg-3 col-md-4 d-flex justify-content-center'>
                <Card 
                    course='CSCI 15000'
                    name="Discrete Structures"
                    description="Mathematical background required for computer science. Sets, relations, cardinality, propositional calculus, discrete functions, truth tables, induction, combinatorics."
                    link="https://cuny620-my.sharepoint.com/:o:/g/personal/seamus_english58_myhunter_cuny_edu/EjUNuvGICMdMrqCWZMilR3UB5h53r6kX_66eN5UvRK4Rog?e=1Ytmaa"
                />
            </div>

            <div className='col-lg-3 col-md-4 d-flex justify-content-center'>
                <Card
                    course='CSCI 16000'
                    name="Computer Architecture 1"
                    description="Boolean algebra, data representation, combinational circuits and minimization, sequential circuits."
                    link="https://cuny620-my.sharepoint.com/:o:/g/personal/seamus_english58_myhunter_cuny_edu/EpiTBwdeyT1LgmpH1eDR_lABeS_dR-4eRD7H2kL-W0Kl5Q?e=8bkBBh"
                />
            </div>

            <div className='col-lg-3 col-md-4 d-flex justify-content-center'>
                <ComingSoonCard
                    course='CSCI 26500'
                    name="Computer Theory"
                    description="Recursion, regular sets, regular expressions, finite automata, context-free grammars, pushdown automata."
                />
            </div>

            <div className='col-lg-3 col-md-4 d-flex justify-content-center'>
                <Card 
                    course='MATH 16000'
                    name="Matrix Algebra"
                    description="Systems of linear equations, matrices, determinants, introduction to vector spaces and linear transformations, applications."
                    link="https://cuny620-my.sharepoint.com/:o:/g/personal/seamus_english58_myhunter_cuny_edu/Ek9MSy7v0nlJh9ziLiWDeHIBrHgx8w9FFhcGLb0Z9J3MNw?e=fthILA"
                />
            </div>

        </div>
    </section>
  )
}

export default HandwrittenNotes