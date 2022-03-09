//Associal una costante "mailButton" al bottone nel file html
const mailButton = document.querySelector('.login > button');
//definiamo un evento al "click" del button
mailButton.addEventListener("click", function () {

    //Definiamo una lista di email all'interno del server
    const emailList = ["robin.costanzo@gmail.com" , "alessandra.rub@gmail.com" , "carl_cap@gmail.com"];

    //Associamo all'"Input" nell'html la costante "mailInput"
    const emailInput = document.querySelector('.login > input');

    //Definiamo il valore dell'elemento "Input"
    const inputValue = emailInput.value;

    //Associamo un ciclo
    for (let i=0 ; i < emailList.length ; i++){

        if(inputValue === emailList){
        alert('Ti sei loggato');
        break;

    }   else{
        alert('Devi prima registrarti');
        break;
    }
}
        

})