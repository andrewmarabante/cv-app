import React from "react"

export default function PageRender(props)
{
   return(
      <div>
         <h1>{props.name}</h1>
         <div id="contact">
            <h5>{props.phone}</h5>
            <h5>{props.email}</h5>
         </div>
         {props.school && (<h2 id="edu">Education</h2>)}
         {props.school && (<h4>{props.school}</h4>)}
         {props.school && (<h4>{props.study}</h4>)}
         {props.school && (<h4>{props.dateGrad}</h4>)}
         {props.company && (<h2 id="exp">Experience</h2>)}
         <h4>{props.company}</h4>
         <h4>{props.position}</h4>
         <h4>{props.responsibilities}</h4>
         <h4>{props.dateStart}</h4>
         <h4>{props.dateEnd}</h4>
      </div>
   )
}
