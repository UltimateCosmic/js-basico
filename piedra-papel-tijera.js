var op1 = "Piedra";
var op2 = "Papel";
var op3 = "Tijera";

function juego(yo, cpu) {
    if(yo===cpu) {
        console.log("Empate");
    } else {
        if((yo===op1 && cpu===op2) || (yo===op2 && cpu===op3) || (yo===op3 && cpu===op1)) {
            console.log("Perdiste");
        } else if((yo===op1 && cpu===op3) || (yo===op2 && cpu===op1) || (yo===op3 && cpu===op2)) {
            console.log("Ganaste");                     
        } 
    }
}

juego(op1,op2);