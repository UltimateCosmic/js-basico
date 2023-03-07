var op1 = "Piedra";
var op2 = "Papel";
var op3 = "Tijera";

function juego(player1, player2) {
    switch (player1) {
        case op1:
            switch (player2) {
                case op1:
                    console.log("Empate");
                    break;
                case op2:
                    console.log("Jugador 2 gana");
                    break;
                default:
                    console.log("Jugador 1 gana");
                    break;
            }       
            break;
        case op2:
            switch (player2) {
                case op1:
                    console.log("Jugador 1 gana");
                    break;
                case op2:
                    console.log("Empate");
                    break;
                default:
                    console.log("Jugador 2 gana");
                    break;
            }
            break;
        default:
            switch (player2) {
                case op1:
                    console.log("Jugador 2 gana");
                    break;
                case op2:
                    console.log("Jugador 2 gana");
                    break;
                default:
                    console.log("Empate");
                    break;
            }
            break;
    }
}

juego(op1,op2);