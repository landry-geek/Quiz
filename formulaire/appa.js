document.getElementById("formulaire").addEventListener("submit",(e)=>{
    e.preventDefault();
    var nom=document.getElementById("nom");
    var prenom=document.getElementById("prenom");
    var classe=document.getElementById("classe");
    var matricule=document.getElementById("matricule");
    var erreur;
    if(!nom.value){
        erreur="Veuillez renseigner votre nom !";
    }
    else if(!prenom.value){
        erreur="Veuillez renseigner votre prénom !";
    }
    else if(!classe.value){
        erreur="Veuillez renseigner votre classe !";
    }
    else if(!matricule.value){
        erreur="Veuillez renseigner votre matricule !";
    }
    if(erreur){
        document.getElementById("erreur").innerHTML=erreur;
    }
    else{
        alert(`                           Bienvenue ${nom.value} ${prenom.value}


        Vous pouvez dès à présent passer votre teste d'évaluation


                                                                                 Bonne Chance !
        `)
        window.location.href="quiz/quiz.html";
    }
})