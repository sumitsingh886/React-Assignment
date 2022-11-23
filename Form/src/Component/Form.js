import React, { useState } from 'react'
import './form.css'
export default function Form() {
	const [fname,setfname] = useState("")
	const [lname,setlname] = useState("")
	const [Age,setage] = useState("")
	const [gender,setgender] = useState("")

	const Submit = (e) => {
		e.preventDefault();
		if (fname && lname && gender && Age){
		document.getElementById("div1").innerHTML = `Your Name: ${fname} ${lname}`
		document.getElementById("div2").innerHTML = `Your age: ${Age}` 
		document.getElementById("div3").innerHTML = `Your Gender: ${gender}`
	}
		
	  }
  return (
	<div className='container'>
	<form onSubmit={(e) => {Submit(e)}}>
	  <label>First Name:</label>
	  <input type="text"value={fname} onChange= {(e) => setfname(e.target.value)}/><br/>
	  <label>Last Name:</label>
	  <input type="text"value={lname} onChange= {(e) => setlname(e.target.value)}/><br/>
	  <label>Age:</label>
	  <input type="number" value={Age} onChange= {(e) => setage(e.target.value)}/><br/>
	  <label>Gender:</label>
	  <input type="radio" name='gender' value="Male" onChange= {(e) => setgender(e.target.value)} /> Male 
	  <input type="radio" name='gender' value="Female" onChange= {(e) => setgender(e.target.value)}/> Female <br/>
	  <button>Submit</button>
	  <div id="div1"></div>
	<div id="div2"></div>
	<div id="div3"></div>
	</form>
	
	{/* Values are
	{ fname ? "First Name " + fname : ' '}
	{ lname ? "Last Name " + lname : ' '}
	{ gender ? "Gender " + gender : ' '} */}
	</div>
  )
}
