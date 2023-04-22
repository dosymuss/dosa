const API = "TKLzTshZ7TVFb6sbdzoYdKMOMPLl9ayo"
const mainWrap = document.querySelector(".main")

document.addEventListener("DOMContentLoaded", init)


fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API}&limit=50&lang=en&q=love`)
.then((res)=>{
    return res.json()
})
.then((content)=>{
    for(let i = 0; i<50;i++){
        mainWrap.innerHTML += `
        <div class="main-img__div">
        <img class="main-img" src="${content.data[i].images.original.url}" alt="">
        </div>`
    }
})
.catch((err)=>{
    console.error(err)
})







function init(){
const sbtBtn = document.querySelector(".submit__btn")
sbtBtn.addEventListener("click", ev =>{
    ev.preventDefault()
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${API}&limit=50&lang=en&q=`
    let str =document.querySelector("#inp-search").value.trim()
    url = url.concat(str)
    console.log(url)
    fetch(url)
    .then((res)=>{
    return res.json()
    })
    .then((content)=>{
        mainWrap.innerHTML = ""
        showGifs(content)
        console.log(content)
    })
    .catch((err)=>{
        console.error(err)
    })
})
    



function showGifs(gifs){
        for(let i = 0; i<50;i++){
            mainWrap.innerHTML += `
            <div class="main-img__div">
            <img class="main-img" src="${gifs.data[i].images.original.url}" alt="">
            </div>`
        }

    
    
}

}