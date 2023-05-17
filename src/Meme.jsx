import { useEffect, useState } from 'react'


export default function Meme(){

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [everyMemes, seteveryMemes] = useState([])

    useEffect(()=>{
        console.log("inner");
        fetch('https://api.imgflip.com/get_memes')
        .then(res => res.json())
        .then(data => seteveryMemes(data.data.memes))
    }, [])
    
    function memeImage(event){
        event.preventDefault();
        const randomNumber = Math.floor(Math.random() * everyMemes.length)
        const urrl = everyMemes[randomNumber].url;
        console.log(urrl);
        setMeme(prevMeme =>({
            ...prevMeme,
            randomImage: urrl
        }))
    }

    function handleText(event){
        const {name, value} = event.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))

    }
    console.log("outer");
    
    return (
        <main>
            <form className="meme-form">
                <input type="text" placeholder='Top text' className='meme-input' name='topText' onChange={handleText}/>
                <input type="text" placeholder='Bottom text' className='meme-input' name='bottomText' onChange={handleText}  />
                <button className='meme-button' onClick={memeImage} >Get a new meme image</button>
            </form>
            <div className='meme'>
                <img  src={meme.randomImage} />
                <h2 className='meme-text top'>{meme.topText}</h2>
            </div>
            <div className='contain'>
                <h2 className='meme-text bottom'>{meme.bottomText}</h2>
            </div>
        </main>
    )
}