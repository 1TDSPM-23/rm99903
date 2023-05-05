console.log("Olá Mundo!");

//    //Declarar uma variável com a palavra reservada var.
//    var nr1 = "10";
//    var nr2 = "5";

//    //Vamos imprimir as variáveis com o objeto console.
//    console.log(nr1);
//    console.log(nr2);

//    //Realizando as operações básicas com estes valores:
//    // + / - / * e /

   
//    //REALIZE A CONCATENAÇÃO COM O TEXTO RESULTADO:
//    //EX: console.log(RESULTADO nr1 + nr2);
   
//    //ADIÇÃO
//    //console.log(nr1 + nr2);
//    //console.log("RESULTADO : ", (nr1 + nr2));
   
//    //console.log("RESULTADO +: ", nr1 + nr2);

//    console.log(`RESULTADO soma: ${parseInt(nr1) + parseInt(nr2)}`);
   
  
   
//    //SUBTRAÇÃO
//    //console.log("RESULTADO -: ", nr1 - nr2);
//    console.log(`RESULTADO subtração: ${parseInt(nr1) - parseInt(nr2)}`);

//    //MULTIPLICAÇÃO
//    //console.log("RESULTADO x: ", nr1 * nr2);
//    console.log(`RESULTADO multiplicação: ${parseInt(nr1) * parseInt(nr2)}`);

//    //DIVISÃO
//    //console.log("RESULTADO /: ", nr1 / nr2);
//    console.log(`RESULTADO divisão: ${parseInt(nr1) / parseInt(nr2)}`);

//    //OBTENHA O RESTO DA DIVISÃO
//    //console.log("RESULTADO %: ", nr1 % nr2);
//    console.log(`RESULTADO divisão/resto: ${parseInt(nr1) % parseInt(nr2)}`);

    //descobrindo se um numero é par ou impar
    //utilizando operador ternario ( ? )
    // var nr1 = "10";
    // var nr2 = "5";
    // var resultado;

    // resultado = !(parseInt(nr1)%parseInt(nr2)) ? "PAR" : "IMPAR";
    // console.log(`O NÚMERO É: ${resultado}`);

//diferença entre var/let/const -- var e let fazem basicamente a msm coisa mas comportamentos diferentes
    var nome = "Beatriz"; 
    if (nome != ""){
        var nome = "Robson";
    }
    console.log(nome) // vai imprimir o robson msm que está fechado em bloco, vai trocar o valor da variavel msm fora do if

    let nome2 = "Matheus";
    if (nome != ""){
        let nome2 = "Bia"
        console.log("Nome do if: ", nome2)
    }    
    console.log(nome2)//aqui irá respeitar o nome matheus, o nome bia está dentro do laço ainda

  //Regras do const
  // 1 - inicializar na declaração    
//    const nome3 = "Violante";
  // 2 - não pode ser alterado durante o fluxo do programa
//    nome3 = "John" - nao pode fazer a mudança
//    const PI = 3.14; // pi n muda, sempre será o msm
























