import React, { useState } from 'react'
// import PropTypes from 'prop-types'

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("converted to Uppercase", "success");
  }
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("converted to Lowercase", "success");
  }
  const handleClearClick = () => {
    let newText = text.trim();
    setText(newText)
    props.showAlert("removed last space", "success");
  }

  const handleOnChange = (event) => {
    setText(event.target.value)
  }
  const [text, setText] = useState('');

 
  return (
    <>
      <div className="container" style={{ color: props.mode === 'light' ? 'dark' : 'light' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className={`form-control background-color-${props.mode === 'light' ? 'black' : 'black'}`} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-3 my-2" onClick={handleUpClick}>Convert to upper case</button>
        <button disabled={text.length===0} className="btn btn-primary mx-3 my-2" onClick={handleLoClick}>Convert to lower case</button>
        <button disabled={text.length===0} className="btn btn-primary mx-3 my-2" onClick={handleClearClick}>revove space from end</button>
      </div>
      <div className="container my 3">
        <h1>Your text summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
      </div>
    </>
  )
}
