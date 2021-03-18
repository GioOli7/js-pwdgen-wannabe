/**************************************
 * 
 * GENRATORE DI PASSWORD NON SICURE
 * 
 * ********************************* */ 

/* Steps

1 - Chiedi nome
2 - Chiedi Cognome
3 - Chiedi colore preferito
4 - Concatena le tre stinghe, + una quarta con stringa "21"
5 - Stampa la "password" generata nella pagina HTML
*/

var nome = prompt("Qual è il tuo nome?");
console.log(nome);
console.log( typeof(nome) );

var cognome = prompt("Qual è il tuo cognome?");
console.log(cognome);
console.log( typeof(cognome) );

var colore = prompt("Qual è il tuo colore preferito?");
console.log(colore);
console.log( typeof(colore) );

var stringBonus = "21";

var password = nome + cognome + colore + stringBonus;
console.log(password);
console.log( typeof(password) );

document.getElementById("display_password").innerHTML = password;