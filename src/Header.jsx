import trollFace from './assets/troll-face-meme.png'
import './App.css'

export default function Header(){
    return (
        <header className="header-component">
            <img src={trollFace} className='troll' />
            <h2 className="header-title">
                Meme Generator
            </h2>
            <h4 className="project">React Project 1</h4>
        </header>
    )

}