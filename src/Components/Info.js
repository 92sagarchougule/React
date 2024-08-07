import React, { useEffect, useState } from 'react';
import './Info.css';



var Info = ()=>{

   

    useEffect(
        ()=>{
            getData();
            
    },[]);

    const[dog, setDog] = useState({message:'', status:''});

    async function getData(){

        const req = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await req.json();
        console.log(data);
        setDog(data)
        

    }

   
    
    const[msg, setMSG] = useState('Information inset in database');
    const[btn, setBtn] = useState('submit')

    
    return(
        <>
        <h1 id='code'>{msg}</h1>
        <button id='btn' style={{color:'green', width:'100px', border:'5px'}} onClick = {()=>{setMSG('data inserted to database'); setBtn('submited')}}> {btn}</button>
        <div>
            <img src={dog.message}></img>
        </div>
        </>
    )
}


export default Info;