import React,{useState} from "react";
import Forecast from "./Forecast.js";


export default function Input(){

const [city,setCity] = useState('');
const [fore,setFore] = useState([]);
const [isFull,setIsFull] = useState(false);

const handleForm = async (e)=>{
    e.preventDefault();
   setIsFull(false);
   await fetch(`https://4000-e13eaf3e-7327-4455-b3be-c69eee390047.ws-ap0.gitpod.io/Weather/${city}`)
    .then(res=>res.json())
    .then(data=>setFore(data.dailyForecasts.forecastLocation))
    setCity('');
    setIsFull(true);
}

    return(
        <>
        <form onSubmit={handleForm}>
            <input type="text" placeholder="Enter city name" className="form-control my-2 mx-auto" value={city} onChange={e=>setCity(e.target.value)} required />
            <div className="text-center">
                <button type="submit" className="btn btn-primary btn-sm">find</button>
            </div>
        </form>
{isFull && <Forecast fore={fore} />}





        </>
    );
}