score=0;
function updatescore(){
    score=score+1;
    document.getElementById("score").innerHTML="pontuação:"+score;
}
function savescore(){
    localStorage.setItem("score",score);
}
function newpage(){
    window.location="activity_2.html"
}