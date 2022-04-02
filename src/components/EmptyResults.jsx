import React from 'react';
import '../style/components/EmptyResults.css'

const EmptyResults = () => {
  return (
    <div className='EmptyResults'>
        <p>WithOut Results</p> 
        <i className="fa-solid fa-battery-empty" />
        </div>
  )
}

export  {EmptyResults};