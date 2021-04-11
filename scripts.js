var equipe1 = 0
function soma1(){
  equipe1=equipe1+1;
  botao1.innerHTML=equipe1;
  
   if(equipe1>=12){
    botao1.innerHTML="Vencedor";
    botao2.innerHTML="Perdedor";
   }
}
var equipe2 = 0
function soma2(){
  equipe2=equipe2+1;
    botao2.innerHTML=equipe2;

  if(equipe2>=12){
    botao2.innerHTML="Vencedor";
    botao1.innerHTML="Perdedor";
  }
}

function truco1(){
  equipe1=equipe1+3;
  botao1.innerHTML=equipe1;
  
  
   if(equipe1>=12){
    botao1.innerHTML="Vencedor";
    botao2.innerHTML="Perdedor";
   }
}

function truco2(){
  equipe2=equipe2+3;
    botao2.innerHTML=equipe2;
  
   if(equipe2>=12){
    botao2.innerHTML="Vencedor";
    botao1.innerHTML="Perdedor";
   }
}

function subtracao1(){
  equipe1=equipe1-1;
  botao1.innerHTML=equipe1;
}

function subtracao2(){
  equipe2=equipe2-1;
    botao2.innerHTML=equipe2;

}

function reset(){
  equipe1=0;
  equipe2=0;

  botao1.innerHTML=equipe1;
  botao2.innerHTML=equipe2;

}

