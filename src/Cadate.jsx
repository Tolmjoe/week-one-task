import {useEffect, useState} from "react";

function Cadate(inst) {

        const [time,setTime] = useState(new Date());
        useEffect(()=>{
            const timer = setInterval(()=> setTime(new Date()),100);
            return () => clearInterval(timer);
        })
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        return (
            <div className="clock">
                The weather is {inst.day} and the current time is {hours}:{minutes}:{seconds}
            </div>
        );

}


export default Cadate;