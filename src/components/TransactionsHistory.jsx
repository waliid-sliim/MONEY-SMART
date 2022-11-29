import React  from 'react'
import Details from './Details.jsx';


function TransactionsHistory (props) {
    //  console.log(props.data);

   
    return(
        <div>
        {props.data.map((element,index)=>{
          return(
            <>
            < Details Key={index} data={element}/>
            
            </>
            
          )
        })}
      </div>
        
    )};

export default  TransactionsHistory