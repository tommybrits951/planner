import { useContext, useEffect, useRef, useState } from "react";
import { Planning } from "../../App";

export default function Clock() {
const [clock, setClock] = useState({
    date: "",
    time: ""
})
const timer = useRef(null)
const {currentDate, monthsArr, weekArr, getTime} = useContext(Planning)
let {year, month, hours, minutes, seconds, date, day, ampm} = currentDate        

function timeHandle() {
    getTime()
    clearInterval(timer.current)
    timer.current = setInterval(() => {
        if (currentDate !== null) {

            setClock({
                date: `${weekArr[day]} ${month < 10 ? `0${month}`: month}/${date < 10 ? `0${date}` : date}/${year}`,
                time: `${hours}:${minutes < 10 ? `0` + minutes : minutes} ${ampm}`
            })
        }
        }, 1000)    
    }

useEffect(() => {
    timeHandle()
}, [])
return(
    <div>

        {currentDate !== null ?

<div className="col">
            <p>{clock.date}</p>
            <br />
            <p>{clock.time}</p>
            </div> : null
        }
        </div>
    )
}