import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, createContext, useRef, useEffect } from "react"
import './App.css';
import { Routes, Route } from "react-router-dom";
import Clock from './components/timers/Clock';



export const Planning = createContext()


const monthsArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const weekArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
function App() {
  const [currentDate, setCurrentDate] = useState(null)
  const timer = useRef(null)

  function getTime() {
    clearInterval(timer.current)
    timer.current = setInterval(() => {
    const hrs = new Date().getHours() > 11 ? {
        hr: new Date().getHours() - 12,
        ampm: "PM"
      } : new Date().getHours() === 0 ? {
        hr: new Date().getHours() + 12,
        ampm: "AM"
      } : {
        hr: new Date().getHours(),
        ampm: "AM"
      }
      const newTime = {
        year: new Date().getFullYear(),
        day: new Date().getDay(),
        date: new Date().getDate(),
        month: new Date().getMonth(),
        hours: hrs.hr,
        ampm: hrs.ampm,
        minutes: new Date().getMinutes(),
        seconds: new Date().getSeconds()
      }
      console.log(newTime)
      setCurrentDate(newTime)
    }, 1000)
  }





  return (
    <Planning.Provider value={
      {
        currentDate,
        monthsArr,
        getTime,
        weekArr,
      }
    }>
      <div className="constianer-fluid">
        <Routes>

        <Route element={<Clock />} path='/'/>
        </Routes>
      </div>
    </Planning.Provider>
  );
}

export default App;
