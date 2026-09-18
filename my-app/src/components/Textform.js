import React,{useState} from 'react'


export default function Textform(props) {
  const handleUpClick=()=>{
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase!","success")
  }
    const handleLoClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
     props.showAlert("converted to lowercase!","success")
  }
  const handleSpeakClick=()=>{
      const utterance = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(utterance);
       props.showAlert("speak enable!","success")
  }
  const handleOnChange=(event)=>{
    setText(event.target.value);
  }
  const handleClearClick=()=>{
    setText("");
           props.showAlert("textarea is clear!","success")
  }
   const [text, setText] = useState("");
  return (
    <div className="container"style={{color:props.Mode === 'dark' ? 'white' : 'black'}}>

<div className="mb-3">
        <h3>{props.heading}</h3>
  <textarea className="form-control"  style={{backgroundColor:props.Mode === 'dark' ? 'grey' : 'white',color:props.Mode === 'dark' ? 'white' : 'black'}} placeholder="Enter text here" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1 "onClick={handleSpeakClick}>Speak</button>
<button className="btn btn-primary mx-1 " onClick={handleUpClick}>UpperCase</button>
<button className="btn btn-primary mx-1 "onClick={handleLoClick}>LowerCase</button>
<button className="btn btn-primary mx-1 "onClick={handleClearClick}>Clear</button>

<div className="container my-3">
  <h4>Your text summary</h4>
  <p>{text.split(" ").length} Words and {text.length} Character </p>
    <p>{0.008*text.split(" ").length} Minutes read</p>
    <h4>Preview</h4>
    <p>{text.length > 0 ? text : "Enter Text In Textarea To Preview It"}
    </p>
</div>

</div>
 
      
  )
}
