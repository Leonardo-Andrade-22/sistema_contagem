var dupla = window.prompt("Digite a quantidade de pessoas para o Baile")
for (let contador = 0; contador <= dupla; contador++) {
    if (contador % 2 == 0 && contador != 0){
       console.log(contador + " Seja bem vindo ao nosso baile")
    } else if  (contador % 2 != 0) {
       console.log(contador + " Entrada Negada")
    } else { 
       console.log(contador + '\t numero "ZERO" 0')
    }
}