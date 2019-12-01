import React from 'react'

export function Header() {
  return (
    <div class="header">
      <span>
        <img src={window.location.origin +  "/assets/images/statistics.png"} alt="general" className="pageIcon"/>
        Statistical Report
      </span>
    </div>
    
  )
}
