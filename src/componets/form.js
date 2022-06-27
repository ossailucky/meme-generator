import React, {useState} from "react";
import memeData from "../memeData";
 
const Form = ()=>{
    let url;
    let firstText;
   // const  [memeImage,setMemeImage] = useState("https://i.imgflip.com/30b1gx.jpg")
   
   const [meme, setMeme]= useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1yxkcp.jpg"
   })

   const [allMemeImages,setAllMemeImages] = useState(memeData)
   const [text, setText] = useState("fuck")
   const [secondtext, setSecondText] = useState("fuck")
   
   
   const getMemeImage = ()=>{
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random()*memesArray.length)
        url = memesArray[randomNumber].url
       // firstText = setText(event.target.event)
        setMeme(prevMeme =>({
            ...prevMeme,
            topText : text,
            bottomText: secondtext,
            randomImage: url

        }))

     }

     const textHandler = (event)=>{
       // console.log(event.target.value)
        setText(event.target.value)
        
     }

     const secondTextHandler = (event)=>{
        setSecondText(event.target.value)
     }

   

  
    return(
        <>
        <div className="form">
         <input type="text" placeholder="Shut Up" onChange={textHandler}/>
         <input type="text" placeholder="Take my Money"  onChange={secondTextHandler}/>
        </div>
        <button className="btn" onClick={getMemeImage}>Get a new Meme Image</button>
        <div className="image-box"  >
            <img src={meme.randomImage} className="meme-image"/>
            <h1 className="top-text">{meme.topText}</h1>
            <h1 className="bottom-text">{meme.bottomText}</h1>
            </div>
        </>
        
    )
}

export default Form