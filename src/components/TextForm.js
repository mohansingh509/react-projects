import React,{useState} from 'react'
export default function TextForm(props) {
  const handelUpClick =()=>{
   
   let newText= text.toUpperCase();
    setText(newText)
    props.showAlert("converted to upperCase","success")
  }
  const handelclearClick =()=>{
    let newText="";
     setText(newText)
     props.showAlert("clear the text","success")
    
   }
   const handelCFLClick =()=>{
   let newText = text.toLowerCase().split(' ');
    for (let i = 0; i < newText.length; i++) {
    newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
   }
   
   let capitalizedSentence = newText.join(' ');
    setText(capitalizedSentence)
    props.showAlert("converted first letter to upperCase","success")
  }
  const handelLpClick =()=>{
    // console.log("Lower case is clicked:"+ text)
   let newText= text.toLowerCase();
    setText(newText)
    props.showAlert("converted to lowerCase","success")
  }
  const handelOnChange =(event)=>{
    // console.log("on change")
    setText(event.target.value)
  }
  const handelExtraSpaces =()=>{
    let newText =text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("removed extra space","success")
  }

  const [text,setText] = useState("")
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}> 
       <h1>{props.heading} </h1>  
       <div className="mb-3">
      <textarea className="form-control" value={text} onChange= {handelOnChange} style={{backgroundColor: props.mode==='dark'?'#5d837f':'white',color: props.mode==='dark'?'white':'black'}} id="myBox" placeholder='enter your Text' rows="9"></textarea>
       </div>
      <button className='btn btn-primary mx-1'onClick={handelUpClick}>Upper_Case</button>
      <button type="button" className="btn btn-primary mx-1"onClick={handelLpClick}>Lower_Case</button>
      <button type="button" className="btn btn-primary mx-1"onClick={handelCFLClick}>Capital_First_Letter</button>
      <button type="button" className="btn btn-primary mx-1"onClick={handelclearClick}>Clear</button>
      <button type="button" className="btn btn-primary mx-1"onClick={handelExtraSpaces}>Remove_Extra_Space</button>

   </div>
   <div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
    <h2>Your text summery</h2>
    <p> {text.split(" ").length} <b>words</b> and {text.length} <b>characters</b></p>
    <h3>Preview</h3>
    <p>{text}</p>
   </div>

    </>
  )
}
