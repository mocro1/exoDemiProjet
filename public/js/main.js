// 1. Exo 1 
//   - Créez un objet avec vos valeurs
//   - 'Nom', 'prenom', 'age', 'taille'
//   - Affichez votre age via un console.log()

// let personnage1 = {
//     "prenom": "Ahmed",
//     "nom" : "Adda",
//     "age" : 21,
//     "ville" : "Nador",
// }
// console.log(personnage1.age);

// 2. Exo 2 
//   - Créez un second et un 3eme personnage (le 3eme personnage doit rester vide)

// let personnage2 = {
//     "prenom": "Bilal",
//     "nom" : "Maritano",
//     "age" : 26,
//     "taille" : "1.80",
// }

// let personnage3 = {}

// 3. Exo 3
//   - Remplir les propriétées du 3eme personnage
//   - Son nom doit valoir le nom du personnage1
//   - Son age doit valoir celui du personnage2
//   - Et sa taille doit être rempli avec la vale
// 3. Exo 3
//   - Créez un personnage avec un nom un et prenom et donnez lui une méthode 'sePresenter' 
//   qui fera un console.log "Bonjour je m'appelle " avec son nom puis son prénom.


// personnage3 = personnage1
// personnage3.nom = personnage1.nom
// personnage3.age = personnage2.age
// personnage3.taille = personnage2.taille
// console.log(personnage3)

// let perso = {
//     "prenom": "Johan",
//     "nom" : "Bergmans",
//     sePresenter(){
//         console.log(`Bonjour je m'appelle ${this.prenom}  ${this.nom}`);
//     }
// }
// perso.sePresenter();

// 4. Exo 4
//   - Créer un objet avec un nom et une méthode
//   - La méthode de votre objet lance un prompt permetant de changer son age
//   - Une alert renvoi "[nom de l'objet] a [age de l'objet] ans"

// let personnage4 = {
//     "nom" : "mocho",
//     sePresenter(){
//         this.sePresenter = +prompt("Quel est l'âge de mocho")
//         console.log(`${this.nom} a ${this.sePresenter} ans`);
//     }
// }
// personnage4.sePresenter();
// let perso5 = {
//     "nom":"Franklin Clinton",
//     // "age":"",
//     age(){
//         this.age = +prompt("Quel est l'âge de Franklin")
//         console.log(`${this.nom} a ${this.age} ans`);
//     }
// }

// perso5.age();



// ## Exo 1

// ### Créer deux personnages du nom de Ryad et Sergiu
// ### Donnez leur à chacun une propriété panier (tableau) contenant tous deux des ingrédients différents du 
// super marché, par exemple huile,tomate,pain etc..
// ### Rajouter à Sergiu la méthode derober, qui prend 2 aliments du panier de Ryad et les met dans son panier.

// let Ryad = {
//     "nom" : "ryad" ,
//     panier:["tomate,huile"],
// }
// let Sergiu = {
//     "nom" : "sergiu" ,
//     panier:["pain,mayonnaise"],
//     derober(){
//         Sergiu.panier.push(Ryad.panier);
//         Ryad.panier.splice(0,1);
//     }
// }
// Sergiu.derober();
// console.log(Sergiu.panier);
// console.log(Ryad.panier);




// ## Exo 

// Créer un objet "vieille_dame" avec une propriété "âge" assez élevée une propriété "nom" contenant
//  un "prenom" et un "nom de famille" (/!\ Objet dans objet), une propriété "moral" avec comme valeur "mal"
//   et une propriété "objet" par exemple une canne 

// ### une méthode "parler" qui selon son moral fait une alert différente, si son moral = "mal" 
// alors elle dira "Vous me dérangez et le frappe avec son objet", si son moral = "bien" 
// alors elle dira "bonjour" + le nom du vieil_homme.

// Créer ensuite l'objet vieil_homme avec une propriété "nom" et une méthode "adoucir" qui change le moral
//  de la "vieille_dame" en "bien".

// Faites parler la vieille dame, puis lancer la méthode adoucir du vieil homme et relancer la méthode parler
//  de la vieille dame.

// let vieille_dame ={
//     "nom" : {
//         "age" : 95 ,
//         "nom" : "Halima Batoza",
//     },
//     "moral" : "mal",
//     "objet" : "une canne",
//     parler(){
//         if (this.moral == "mal") {
//             alert(`Vous me dérangez et le frappe avec ${this.objet} `);
//         }else{
//             alert(`bonjour ${vieille_homme.nom}`);  
//         }
//     }
// }
// let vieille_homme ={
//     nom : "anthony",
//     adoucir(){
//         vieille_dame.moral = "bien";
//     }
// }
// vieille_dame.parler()
// vieille_homme.adoucir()
// vieille_dame.parler()



// exo objet(mini projet)


/** Créer un objet personne. Cette personne doit avoir des propriétés et des méthodes : 
* - nom(string)
* - lieu(string)
* - argent(number)
* - mainDroite(tableau)
* ( du coup main gauche(tableau))
* - seDeplacer(lieu)
* - payerArticle(article)
* - couper(ingredient, outil)
*/
let personne ={
    "nom" : "Mocro",
    "lieu" : "Nador",
    "argent" : 530, 
    "mainDroite" : [],
    seDeplacer(origine,destination){
        if (origine == "Nador") {
            destination.personne.push(this)
            this.lieu = destination.nom
        }else{
            destination.personnes.push(this) 
            origine.personnes.shift()
            this.lieu = destination.nom
        }
    },
    payerArticle(article){
        if (this.argent >= article.prix){
            this.argent -= article.prix
        }else{
            throw new Error(`${}`)
        }
    },
    couper(ingredient, outil){
    }
}


/**
* Créer un lieu "maison" (un objet) avec comme propriété "nom: 'maison'" et "personnes = []" => qui 
sera un tableau de personnes présentes dans la maison :
*/
let  lieu ={
    "nom" : "maison",
    "personnes" : [],
    // sePresenter(){
    //     console.log(`voilà ${this.personnes} qui sont présentes à la ${this.nom}.`);
    // }
}
// lieu.sePresenter();


/**
* Créer un outil (couteau) pour découper les ingrédients achetés
* propriétés : nom et action.
* action a comme valeur l'état "coupé" (qui sera mis aux légumes lorsqu'ils seront coupés avec le méthode 
de "personne".)
*/

let outil = {
    "nom" : "couteau",
    action : "coupé"
}

/**
 * Créer des produits (ingrédients) à mettre dans le magasin qui serviront à créer l'omelette
 *  (oignon, oeuf, epice, fromage, ...);
 * propriétés : nom, etats ( entier,coupé, moulu), prix
 */

class Produits {
    constructor( nom, etats, prix){
        this.nom = nom,
        this.etats = etats,
        this.prix = prix,
    }
}
let oeuf = new Produits("oeuf","",3)
let epice = new Produits("epice","moulu",6)
let oignon = new Produits("oignon","entier",90) 

// Créer un lieu "epicerie" qui a comme propriétés :
// nom, personnes = [], paniers (un tableau d'objets "panier" avec une propriété "type" égal
//  à panier et le contenu du panier, égal à un tableau vide),
// Les "ingrédients" créés juste au dessus contenus dans un tableau.

let epicerie = {
    nom :"epicerie",
    personnes : [],
    paniers : [{
        type : "panier",
        contenu : [],
    }],
    ingrédients : [oignon, oeuf, epice],
}



/**
 * Créer un poele avec un tableau comme contenu. Et avec une méthode cuir() qui, 
 * après 4 secondes, met l'état 'cuit' à this.contenu[0]. On peut faire ça avec 
 * la fonction setTimeout(()=> {}, 4000)
 */


let poele = {
    nom : "poele",
    contenu : [] ,
    cuir(){
        setTimeout(()=> {
            this.contenu[0].état= 'cuit'
        }, 4000)  
    }
}


// Créer un bol avec un tableau comme contenu
// ajouter une méthode melanger(nomMelange) qui va créer un nouvel objet "newMelange" 
// avec comme nom la variable
//  nomMelange passé en paramètre et avec etats 'pas cuit. cette méthode remplacera 
// this.contenu par [l'obj newMelange]

let bol = {
    nom : "bol",
    contenu : [],
    melanger(nomMelange){
        let newMelange = { 
            nom : `${nomMelange}`,
            etats : "pas cuit",
        }
        this.contenu = [newMelange] 
    }
}

/**** DEBUT DE L'OMELETTE ****/
// Pour dire que le personnage est à la maison :
// Avec l'objet personnage, utiliser la method seDeplacer et de passer en paramètre l'objet maison
// Afficher un message tel que :

// console.log(personnage.nom + " est actuellement à la " + personnage.lieu);

personne.seDeplacer("Nador",lieu)
console.log(personne.nom + " est actuellement à la " + personne.lieu);

// Pour aller à l'épicerie acheter les ingrédients pour l'omelette, je répète la première étape en 
// changeant le parametre de la method seDeplacer par l'epicerie

personne.epicerie(lieu,epicerie)          


// Mon personnage prend un des paniers dans l'épicerie (il récupère le panier dans les objets de l'épicerie et 
// le met dans sa main droite.)

// Il doit y avoir un objet dans la main droite de personnage et un panier en moins. Vérifier avec des
//  console.log() ensuite afficher un message du type : 

// console.log(`${personnage.nom} a pris un ${type du panier}`);

// Je créer une boucle qui va prendre chaque élément (ingrédient) du contenu de l'épicerie (1 à 1) et en faire
//  une COPIE dans le panier du personnage

// Afficher un message à chaque ingrédient pris

// Payer chaque ingrédient récupéré dans le panier. Avec une boucle aussi, on va les passer 1 à 1 dans 
// la fonction payerArticle()

// Afficher un message de ce qu'il reste d'argent sur le personnage.

// rentrer à la maison (comme ça on pourra cuisiner)

// mettre chaque ingrédient dans le bol (1 à 1 donc avec une boucle)

// Vérifier que les ingrédients ne se trouvent plus dans le panier (oups ! on a oublié de le rapporter x)

// Afficher un petit message de chaque ingrédient qu'on met dans le bol.

// Retourner à l'épicerie pour rapporter le panier. (donc seDeplacer puis enlever le panier de la main droite
//  et le remetre dans les paniers de l'épicerie.)

// Afficher un petit message

// Retourner à la maison pour continuer l'omelette

// Afficher un petit message

// Vérifier chaque ingrédient dans le bol et le couper seulement s'il est entier ! Pour ça on utilise la méthode
//  couper de personnage

// Mélanger le contenu du bol avec la méthode melanger. on va nommer ce mélange une 'omelette' (à passer en param).

// Afficher un message avec le nouveau mélange

// vider le contenu du bol dans la poele. Il ne doit plus rien avoir dans le bol et y avoir juste l'omelette pas
//  cuite.

// Cuire l'omelette avec la méthode de la poele 

// Afficher un message final, notre omelette est cuite :)