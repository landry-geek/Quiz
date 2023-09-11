var tableau=[
    question={
    ennonce:"HEAD c'est :",
    choix1:"zone d'en-tête",
    choix2:"Fin du fichier",
    choix3:"Titre",
    choix4:"Paragraphe",
    bonne:"1"
},
    question2={
    ennonce:"BODY c'est :",
    choix1:"Debut de fichier",
    choix2:"fin de fichier",
    choix3:"Les deux",
    choix4:"Aucun des deux",
    bonne:"3"
},
    question3={
    ennonce:"br sert à",
    choix1:"souligner le texte",
    choix2:"surligner le texte",
    choix3:"mets le texte en gras",
    choix4:"retour à la ligne",
    bonne:"4"
},
    question4={
    ennonce:"HTML signifie",
    choix1:"HyperText Makeup Language",
    choix2:"HyperText Markup Language",
    choix3:"HyperText Mark up Language",
    choix4:"HyperText Markeup Language",
    bonne:"2"
},
    question5={
    ennonce:"Div est du type",
    choix1:"Block",
    choix2:"Inline",
    choix3:"Les deux",
    choix4:"Aucun des deux",
    bonne:"1"
},
    question6={
    ennonce:"Span est du type",
    choix1:"Block",
    choix2:"Inline",
    choix3:"Les deux",
    choix4:"Aucun des deux",
    bonne:"2"
},
    question7={
    ennonce:"br est du type",
    choix1:"Block",
    choix2:"Inline",
    choix3:"Les deux",
    choix4:"Aucun des deux",
    bonne:"2"
},
    question8={
    ennonce:"Hyperliens pour",
    choix1:"Aller d'une page à l'autre",
    choix2:"Envoyer un email",
    choix3:"Ancrage",
    choix4:"Les trois",
    bonne:"4"
},
    question9={
    ennonce:"Pour lier une page Html avec une page Css",
    choix1:"src",
    choix2:"link",
    choix3:"Les deux",
    choix4:"aucun des deux",
    bonne:"2"
},
    question10={
    ennonce:"title dans ___ et h1 dans ___",
    choix1:"head, body",
    choix2:"body, head",
    choix3:"Les deux",
    choix4:"Aucun",
    bonne:"1"
},
    question11={
    ennonce:"Encodage utilisé en Html",
    choix1:"Utf-64",
    choix2:"Utf-8",
    choix3:"Utf-16",
    choix4:"Les trois",
    bonne:"2"
},
    question12={
    ennonce:"Texte dans h1 ___ dans h2",
    choix1:"Plus petit que",
    choix2:"Même taille que",
    choix3:"Plus grand que",
    choix4:"2 fois plus petit que",
    bonne:"3"
},
    question13={
        ennonce:" ___ pour Id et ___ pour class",
        choix1:". et #",
        choix2:"# et .",
        choix3:"Les deux sont compatibles",
        choix4:"Aucun des deux",
        bonne:"2"
    },
        question14={
        ennonce:"__ pour liste ordonnée, __ liste non ordonnée",
        choix1:"ol, ul",
        choix2:"ul, ol",
        choix3:"li, ul",
        choix4:"ol, li",
        bonne:"1"
    },
        question15={
        ennonce:"br est une balise___, p est une balise___",
        choix1:"couplée, célibataire",
        choix2:"célibataire, couplée",
        choix3:"célibataire, célibataire",
        choix4:"couplée",
        bonne:"2"
    },
        question16={
        ennonce:"Propiété Css : color pour",
        choix1:"couleur de fond",
        choix2:"couleur de texte",
        choix3:"couleur de la bordure",
        choix4:"les trois",
        bonne:"2"
    },
        question17={
        ennonce:"Propriété Css : Background-color pour",
        choix1:"couleur de fond",
        choix2:"couleur de texte",
        choix3:"couleur de la bordure",
        choix4:"les trois",
        bonne:"1"
    },
        question18={
        ennonce:"Les propriétés Css se terminent par",
        choix1:"Point",
        choix2:"Virgule",
        choix3:"Point-virgule",
        choix4:"deux-point",
        bonne:"3"
    },
        question19={
        ennonce:"Propriété Border-collapse pour",
        choix1:"Separer les bordures",
        choix2:"Coller les bordures",
        choix3:"Effacer les bordures",
        choix4:"réstaurer les bordures",
        bonne:"2"
    },
]

function fonc(params){
    document.querySelector(".ennonce").innerHTML=params.ennonce;
    document.querySelector(".choix1").innerHTML=params.choix1;
    document.querySelector(".choix2").innerHTML=params.choix2;
    document.querySelector(".choix3").innerHTML=params.choix3;
    document.querySelector(".choix4").innerHTML=params.choix4;

}

function alea(){
    return Math.round(Math.random(17)*18);
}

var nb_aleatoire;
var compteur=1;
var note=0;
var nb_question=1;
document.querySelector(".resultat").innerHTML=`Question ${nb_question}/20`;

    nb_aleatoire=alea();//efa mety atao indice
    fonc(tableau[nb_aleatoire])
document.addEventListener("click",(e)=>{
        let valeur=e.target.dataset.key;
        if(valeur==tableau[nb_aleatoire].bonne){//efa mety ty condition ty
          note++;
        }
        if(compteur<=19){
            compteur++;
            nb_question++;
            document.querySelector(".resultat").innerHTML=`Question ${nb_question}/20`;
        }
        else{
            if(note>=10){
            alert(`                                       Félicitation !
            
             Vous avez réussi votre test d'évaluation
            
            votre note est :  ${note} / ${compteur}
            
                                                         Bonne Continuation !
            `);
            }
            else{
                alert(`                                              Navré !
            
                Vous n'avez pas réussi votre test d'évaluation
                
                votre note est ${note}/${compteur}
                
                `);
            }
            window.location.replace("../../index.html");
        }
        nb_aleatoire=alea();//efa mety ito place ito
        fonc(tableau[nb_aleatoire])
})                                                
