let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
let search = document.getElementById('search-btn');
search.onclick = function(){
    let text = document.getElementById('word').value;
    fetch(`${url}${text}`).then(v=> v.json()).then(val=> {
        console.log(val)
        document.getElementById('append').innerHTML =
        `<div class="details">
        <h3>${val[0].word}</h3>
        <div class="phonics">
        <span><span></span><span id="trans">${val[0].phonetics[0].text}</span></span>
        <i style="color:blue"  class="fas fa-volume-up fa-2x" id="play"></i>
        </div>
        <div class="definition">
        <div class="meaning">${val[0].meanings[0].definitions[0].definition}</div>
        <div class="example">${val[0].meanings[0].definitions[0].example||""}</div>
        </div>`;
        document.getElementById('sound').setAttribute("src",`${val[0].phonetics[0].audio}`|| `${val[0].phonetics[1].audio}`)
        document.getElementById('play').onclick=function(){
    document.getElementById('sound').play();
    console.log("clicked")
}
    })
}