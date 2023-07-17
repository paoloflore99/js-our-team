"use strict"

//lista team------------------------
const listaTeam = [
    {
        nome: "Wayne",
        cognome: "Barnett",
        ruolo: "Founder & CEO",
        Foto: "wayne-barnett-founder-ceo.jpg",
    },

    {
        nome: "Angela",
        cognome: "Caroll",
        ruolo: "Chief Editor",
        Foto: "angela-caroll-chief-editor.jpg",
    },

    {
        nome: "Walter",
        cognome: "Gordon",
        ruolo: "Office Manager",
        Foto: "walter-gordon-office-manager.jpg",
    },

    {
        nome: "Angela",
        cognome: "Lopez",
        ruolo: "Social Media Manager",
        Foto: "angela-lopez-social-media-manager.jpg",
    },

    {
        nome: "Scott",
        cognome: "Estrada",
        ruolo: "Developer",
        Foto: "scott-estrada-developer.jpg",
    },

    {
        nome: "Barbara",
        cognome: "Ramos",
        ruolo: "Graphic Designer",
        Foto: "barbara-ramos-graphic-designer.jpg",
    },

    
]

console.log(listaTeam);

//lista di ogetti 
//se invece come valore voglio mettere un numero non lo metto dentro le virgolette
//-------------------------------------------------------------
const nomeTeam = document.querySelector(".nome-team")

console.log("--------------------------------------------");

// for (let i = 0; i < listaTeam.length; i++) {
//     const personeDellTeam = listaTeam[i];
//     console.log(personeDellTeam.nome);
    
    
// }
// console.log("--------------------------------------------");

// for (let i = 0; i < listaTeam.length; i++) {
//     const personeDellTeam = listaTeam[i];
//     console.log(personeDellTeam.cognome);
    
// }
// console.log("--------------------------------------------");

for (let i = 0; i < listaTeam.length; i++) {
    const personeDellTeam = listaTeam[i];
    console.log(personeDellTeam.ruolo);
    console.log(personeDellTeam.cognome);
    console.log(personeDellTeam.nome);
    
}
console.log("--------------------------------------------");


//calcolo for
for (let i = 0; i < listaTeam.length; i++) {
    const member = listaTeam[i];
    const nomeCognomeElement = document.getElementById(`nome-cognome${i + 1}`);//+1 sul id
    const professioneElement = document.getElementById(`professione${i + 1}`);//+1 sul id

    nomeCognomeElement.textContent = `${member.nome} ${member.cognome}`;
    professioneElement.textContent = member.ruolo;
}


//avrei potuto fare una funzione per risarmiare righe di codice e metterci dentro i nomi cognomi e ruolo 
