let playerTurn = 'X';

function clickGridBox(id) {
    
    document.getElementById(id).innerText=playerTurn;

    if((document.getElementById('grid-item-1').innerText == document.getElementById('grid-item-2').innerText && 
    document.getElementById('grid-item-2').innerText == document.getElementById('grid-item-3').innerText) &&  document.getElementById('grid-item-3').innerText != ''
    || (document.getElementById('grid-item-4').innerText == document.getElementById('grid-item-5').innerText && 
    document.getElementById('grid-item-5').innerText == document.getElementById('grid-item-6').innerText) &&  document.getElementById('grid-item-6').innerText != ''
    || (document.getElementById('grid-item-7').innerText == document.getElementById('grid-item-8').innerText && 
    document.getElementById('grid-item-8').innerText == document.getElementById('grid-item-9').innerText) &&  document.getElementById('grid-item-9').innerText != ''
    || (document.getElementById('grid-item-1').innerText == document.getElementById('grid-item-4').innerText && 
    document.getElementById('grid-item-4').innerText == document.getElementById('grid-item-7').innerText) &&  document.getElementById('grid-item-7').innerText != ''
    || (document.getElementById('grid-item-2').innerText == document.getElementById('grid-item-5').innerText && 
    document.getElementById('grid-item-5').innerText == document.getElementById('grid-item-8').innerText) &&  document.getElementById('grid-item-8').innerText != ''
    || (document.getElementById('grid-item-3').innerText == document.getElementById('grid-item-6').innerText && 
    document.getElementById('grid-item-9').innerText == document.getElementById('grid-item-9').innerText) &&  document.getElementById('grid-item-3').innerText != ''
    || (document.getElementById('grid-item-1').innerText == document.getElementById('grid-item-5').innerText && 
    document.getElementById('grid-item-5').innerText == document.getElementById('grid-item-9').innerText) &&  document.getElementById('grid-item-9').innerText != ''
    || (document.getElementById('grid-item-3').innerText == document.getElementById('grid-item-5').innerText && 
    document.getElementById('grid-item-5').innerText == document.getElementById('grid-item-7').innerText) &&  document.getElementById('grid-item-7').innerText != '') {
        // console.log("Player " + playerTurn + " Wins!!")

        document.getElementById('winText').style.display='block';
        document.getElementById('winText').innerText='Player ' + playerTurn + ' Wins!!'
    } 

    if(playerTurn == 'X') {
        playerTurn = 'O';
    } else {
        playerTurn = 'X';
    }

}

function restartGame() {
    playerTurn = 'X';
    for(i = 0; i < document.getElementsByClassName('grid-item').length; i++) {
        document.getElementsByClassName('grid-item')[i].innerText='';
    }
    document.getElementById('winText').style.display='none';
}





