import React from 'react'
import './ChartBar.css'

const ChartBar = props => {
    let barFillHeight = '0%';
    if(props.maxValue > 0) {
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%'
    }
  
    return (
      <div className='chartbar'>
        <div className='chartbarinner'>
        <div className='chartbarfill'
        style={{height: barFillHeight}}>
        </div>
        </div>
        <div className='chartbarlabel'>
            {props.label}
        </div>
      </div>
    )
}
export default ChartBar;