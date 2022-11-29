import axios from 'axios'
import React  from 'react'



function Details (props) {
    console.log(props);
return (

<div className='k2' >

<li className='k3' >  {props.data.transaction_name} </li>
<p className="k4"> amount : {props.data.amount} DT</p>
<p className="k6"> type :  {props.data.type} </p>
<div>
<button class="button-89" role="button" onClick={()=>{
          axios.delete(`http://localhost:5000/delete/${props.data.transaction_name}`)
        window.location.reload()
        }}
        > ⛔ </button></div>
</div>

)   

}

export default  Details;