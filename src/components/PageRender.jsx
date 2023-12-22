import React from "react"

export default function PageRender(props)
{
   return(
      <div>
         <h1>{props.name}</h1>
         <h5>{props.phone}</h5>
         <h5>{props.email}</h5>
         <h2>Education</h2> : <></>
         <h4>{props.school}</h4>
         <h4>{props.study}</h4>
         <h4>{props.dateGrad}</h4>
         <h2>Experience</h2>
         <h4>{props.company}</h4>
         <h4>{props.position}</h4>
         <h4>{props.responsibilities}</h4>
         <h4>{props.dateStart}</h4>
         <h4>{props.dateEnd}</h4>
      </div>
   )
}
