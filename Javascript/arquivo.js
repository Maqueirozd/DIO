function comparaNumeros (num1, num2) {
    const saoiguais = num1 === num2;
    const soma = num1 + num2;

    return"${primeirafrase} ${segundafrase}";
}

   function criaprimeirafrase (num1, num2) {
       let saoiguais = '';
       
       if (num1 !==num2) {
           saoiguais="nao";
       }

       return "os numeros ${num1} e ${num2} ${saoIguais} sao iguais"
   }

function criaSegundaFrase(num1, num2) {
    const soma = num1 + num2;

    let resultado10 = "menor";
    let resultado20 = "menor";

    const compara10 = soma > 10
    const compara20 = soma > 20

    if (compara10) {
        resultado10 = "maior"
    }

    if (compara20) {
        resultado20= "maior";
    }
    return "sua soma e ${soma}, que é ${resultado10} que 10 e ${resultado 20} que 20"
}

console.log (comparanumeros(1 , 2))