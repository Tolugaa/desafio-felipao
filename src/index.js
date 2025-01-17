let nome = "guilherme";
let exp = 10000;
let rank = "";
if (exp<1000){
    rank = "Ferro";
}
else if (exp<2000){
    rank = "Bronze";
}
else if (exp<3000){
    rank = "Prata";
}
else if (exp<4000){
    rank = "Ouro";
}
else if (exp<5000){
    rank = "Platina";
}
else if (exp<6000){
    rank = "Diamante";
}
else if (exp<7000){
    rank = "Ascendente";
}
else if (exp<8000){
    rank = "mestre";
}
else if (exp<10000){
    rank = "Imortal";
}
else {
    rank = "Radiante";
}

console.log(nome + " você está no rank " + rank);