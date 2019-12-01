import React from 'react'

export default function Selections(props) {
  return (
      <div className="mb-3 border">
        <span 
          onClick={() => props.updateSelected("TREATMENT")} 
          className={props.getActive("TREATMENT")}
        >Treatments</span>
      </div>
  )
}
