import React from 'react'
import Header from './Components/Header'
import Body from './Components/Body'
import CalcTotal from './Components/CalcTotal'


export default function App() {
  return (
    <div className="app-container">
        <Header />
        <Body />
        <CalcTotal/>
    </div>
  )


}