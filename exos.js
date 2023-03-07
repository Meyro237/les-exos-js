document.write ("bonjour")


/* ecrire une function qui permet de reverser la liste 
d'un tableau sans utiliser la methode reverse  */

var listArray = [10, 17, 13, 17, 18, 19];
var listeArray = [ 1, 2, 3, 4, 5, 6]; 

// si je doit retirer un element au depart et venir le remètre à la fin?


/* ecrire une fonction qui combine 2 listes et 
produit une unique liste sans utiliser la fonction concat  */


//solution
var concatList = listArray.concat(listeArray)

console.log(concatList);

/* ecrire une fonction qui retourne le maximum et le minimum 
d'une liste. en utilisant les loops et les conditions*/
var maximum = -Infinity
var minimum = Infinity
 for (var number of listArray){
    if (number > maximum)
    maximum = number
 }
 for (var number of listArray){
    if (number < minimum)
    minimum = number
 }
 console.log(maximum);
 console.log(minimum);


/* ecrire uen fonction qui compare 2 listes qui ont une même longueur
et affiche l'élement le plus petit de la liste*/

var mixList;
mixList = concatList.sort((a, z)=> a - z);
console.log(mixList);

/* ecrire une fonction qui double tous les elements de la liste et 
donne une nouvelle liste comportant des nombres impaires */

listArray.forEach(Element =>{
    listArraySquare = Element * 2
    console.log(listArraySquare);
})
