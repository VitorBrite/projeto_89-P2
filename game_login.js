function adduser(){
    player1_name = document.getElementById("player1_nomeinput").value;
    player2_name = document.getElementById("player2_nomeinput").value;
    localStorage.setItem("player1_name",player1_name);
localStorage.setItem("player2_name",player2_name);
window.location="game_page.html";
}
player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");
player1_score=0;
player2_score=0;
document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("player2_name").innerHTML=player2_name+" : ";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="turno de pergunta-"+player1_name;
document.getElementById("player_answer").innerHTML="turno de resposta-"+player2_name;
function send(){
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log("word in lowercase-"+word);
    charAT1= word.charAT(1);
length_divide_2=Math.floor(word.length/2);
charAT2=word.charAT(length_divide_2);
console.log(charAT2);
length_minus_1=word.length-1;
charAT3=word.charAT(length_minus_1);
console.log(charAT3);
remove_charAT1=word.replace(charAT1,"_");
remove_charAT2=charAT1.replace(charAT2,"_");
remove_charAT3=charAT2.replace(charAT3,"_");
console.log(remove_charAT3);
question_word="<h4 id='word_display'>p. "+remove_charAT3+"</h4>";
input_box="<br>resposta:<input type='text'id='input_check_box'>";
check_button="<br><br><button class='btn bnt-info'onclick='check()'>checar</button>";
row=question-word+input_box+check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("word").value=" ";
}