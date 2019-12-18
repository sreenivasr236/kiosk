import React from 'react'

const Icon = (props) => (
<svg 
   aria_label={props.aria_label} 
   className={props.class}
   fill={props.fill}
   height={props.height}
   viewBox={props.viewBox}
   width={props.width}>
       {props.children}
   </svg>
)
export default Icon;