
import React, {useState} from 'react';


export default function TextForm(props) {
    const handleUpClick = ()=> {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to uppercase", "success")
    }
    const handleLowClick = ()=> {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to lowercase", "success")
    }
    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied the text", "success")
    }  
    const handleExtraSpacesClick = ()=>{
        let newText = text.replace(/\s+/g, " ")
        setText(newText)
        props.showAlert("Hndled extra spaces in text", "success")
    }
    const handleClearClick = ()=>{
        setText('')
        props.showAlert("Cleared the text", "success")
    }
    const changeOnClick = (event)=> {
        setText(event.target.value)
    }

    const[text, setText] = useState('');
    // text = 'new text'           // wrong way to chnge
    // setText('new text')         // correct way to change
    return (
        <>
        <div className={`container text-${props.mode==='light'?'dark':'white'}`} >
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea id = "my-box" value = {text} onChange={changeOnClick} style = {{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='light'?'white':'dark' }} className={`form-control text-${props.mode==='light'?'dark':'light' }`} rows = "8" />
            </div>
            <button className="btn btn-outline-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-outline-primary mx-1" onClick={handleLowClick}>Convert to LowerCase</button>
            <button className="btn btn-outline-primary mx-1" onClick={handleCopyClick}>Copy the text</button>
            
            <button className="btn btn-outline-primary mx-1" onClick={handleExtraSpacesClick}>Hndle extra spaces</button>
            <button className="btn btn-outline-primary mx-1" onClick={handleClearClick}>Clear the text</button>
        </div>

        <div className={`container my-2 text-${props.mode==='light'?'dark':'white' }`} >
            <h3>Information about text</h3>
            <p>words: {text.split(' ').length} and characters: {text.length} </p>
            <p>{0.008 * text.split(' ').length} minutes to read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:'Please enter the text in the above textbox to preview it here'} </p>
        </div>
        </>
    );
}
