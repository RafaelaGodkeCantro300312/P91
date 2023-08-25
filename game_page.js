player1=localStorage.getItem("namePlayer1");
player2=localStorage.getItem("namePlayer2");
player1s=0;
player2s=0;
document.getElementById("player1_name").innerHTML=player1+": ";
document.getElementById("player2_name").innerHTML=player2+": ";
document.getElementById("player1_score").innerHTML=player1s;
document.getElementById("player2_score").innerHTML=player2s;
document.getElementById("player_question").innerHTML="Turno da pergunta- "+player1;
document.getElementById("player_answer").innerHTML="Turno da resposta- "+player2;
function send() {
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    actual_answer=parseInt(number1)*parseInt(number2);
    question_number="<h4>"+number1+"X"+number2+"</h4>";
    input_box="<br>Resposta: <input type='text' id='input_check_box'>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
    row=question_number+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
}