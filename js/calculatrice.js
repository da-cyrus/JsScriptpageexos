//variable calcul : chaine caractère
let calcul =""
/*créer une méthode : chaque fois que clique 
sur bouton le bouton insère dans le paramètre de la méthode*/
function ajouterAuCalcul(caractere){
    calcul+=caractere
    document.querySelector("#resultat").textContent=calcul
   

}

//effectuer le calcul en splitant d'abord le résultat de l'affichage de calcul et effectuer les opération
function calculer(){
    let result = eval(calcul)
    document.querySelector("#resultat").textContent=result
}



