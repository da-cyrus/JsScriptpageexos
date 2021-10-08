function changeImage(){
    
//document.querySelector("#image").src
let image2 = document.querySelector("#image2").src
document.querySelector("#image2").src = document.querySelector("#image").src
let image3 = document.querySelector("#image3").src
document.querySelector("#image3").src = image2
let image4 = document.querySelector("#image4").src
document.querySelector("#image4").src = image3

document.querySelector("#image").src = image4
}




  

   