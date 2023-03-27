import React, { useState, useEffect } from "react";

Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length+1))];
}

export default function Form() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        height: "400px",
        width: "600px",
        fontSize: "4rem",
        randomImage: "http://placekitten.com/600/400"
    });
    
    const [allMemeImages, setAllMemeImages] = useState([])

    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(memeApi => setAllMemeImages(memeApi.data.memes))
    }, [])

    function handleMemeProperties() {
        const randomMeme = allMemeImages.random();
        let widthToHeightConstant = randomMeme.width / randomMeme.height
        setMeme(prevState => ({
            ...prevState,
            height: (600 / widthToHeightConstant)+"px",
            width: "600px",
            fontSize: 4/widthToHeightConstant+"rem",
            randomImage: randomMeme.url
        }))
    }

    function handleMemeText(event) {
        const {name, value, type} = event.target;
        setMeme(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <section className="main">
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form-input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleMemeText}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form-input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleMemeText}
                />
                <button
                    onClick={handleMemeProperties}
                    className="form-button"
                    >
                    Get a new image
                </button>
            </div>
                <div className="meme-wrapper" style={{width: meme.width, height: meme.height, maxWidth: "600px"}}>
                    <h2 className="meme-text top-text" style={{fontSize: meme.fontSize}}>{meme.topText}</h2>
                    <h2 className="meme-text bottom-text" style={{fontSize: meme.fontSize}}>{meme.bottomText}</h2>
                    <img className="meme-image" src={meme.randomImage} style={{width: meme.width, maxWidth: "600px"}}/>
                </div>
        </section>
    )
}