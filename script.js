let song = document.querySelector("div#piano");
song.addEventListener("click", (e)=>{
    let keyNotes = e.target.getAttribute("id");
    let sound = new Audio(`./sound/${keyNotes}.mp3`);
    sound.play();
    console.log(keyNotes);
    
})
document.addEventListener("keydown", (e)=>{
    if(e.key === "a"){
       let soundDo1 = new Audio(`./sound/do1.mp3`);
       soundDo1.play();
    }
    else if(e.key === "s"){
        let soundRe = new Audio(`./sound/re.mp3`);
        soundRe.play();
    }
    else if(e.key === "d"){
        let soundMi = new Audio(`./sound/mi.mp3`);
        soundMi.play();
    }
    else if(e.key === "f"){
        let soundFa = new Audio(`./sound/fa.mp3`);
        soundFa.play();
    }
    else if(e.key === "h"){
        let soundSo = new Audio(`./sound/so.mp3`);
        soundSo.play();
    }
    else if(e.key === "j"){
        let soundLa = new Audio(`./sound/la.mp3`);
        soundLa.play();
    }
    else if(e.key === "k"){
        let soundTi = new Audio(`./sound/ti.mp3`);
        soundTi.play();
    }
    else if(e.key === "l"){
        let soundDo2 = new Audio(`./sound/do2.mp3`);
        soundDo2.play();
    }
})