// import ReactDOM from "react-dom";


import axios from "axios";
import React ,{useState,useEffect} from "react"
import AddTransaction from './components/AddTransaction.jsx';
import TransactionsHistory from "./components/TransactionsHistory.jsx";

function App() {
    const[data,setData]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:5000/transactions").then(res=>
            setData(res.data))
      },[])

      console.log(data);


      const AddProd=(add) =>{
        axios.post(`http://localhost:5000/add`,add)
      }


  return (
  <>
  <  TransactionsHistory data={data} />
  <AddTransaction Add={AddProd}/>
 
  
  </>)
  
    
}



    export default App