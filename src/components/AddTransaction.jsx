import React,{useState} from 'react';
import axios from 'axios';

function AddTransaction ({Add}){
    
    const [transaction_name,setTransactionName]=useState("")
    const [amount,setamount]=useState("")
    const [type,setType]=useState("")
    const up=(name,amount,type)=>{
        
        axios.put(`http://localhost:5000/update/${name}`,{ amount,type})
}
return(
    <center>
    <div>
        <h2 className='k9'>Add new transaction</h2>
        <form>
            <label >
                transaction :
                <div>
                    < input type="text" onChange={(event)=>setTransactionName(event.target.value)} placeholder="Name" />

                </div>
            </label>
            <label >
                Amount :
                <div>
                    <input className= "k5" type="number" onChange={(event)=>setamount(event.target.value)} placeholder="$$$ "/>

                </div>
            </label>
            <label >
                Type :
                <div>
                    <input className= "k5" type="text" onChange={(event)=>setType(event.target.value)} placeholder="expense or income"/>

                </div>
            </label>
            <div>
                <button class="button-54" role="button" onClick={()=>Add({transaction_name,amount,type})}> . ADD T </button>
                <button class="button-54" role="button" onClick={()=>{up(transaction_name,amount,type)
        // window.location.reload()
        }} >UPDATE T </button>
            </div>
        </form>
    </div></center>

)
}
export default AddTransaction