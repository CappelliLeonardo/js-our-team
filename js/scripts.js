// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l'array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// Consigli del giorno:
// Ragioniamo come sempre a step.
// Prima la logica in italiano e poi traduciamo in codice.
// E ricordiamoci che console.log() è nostro amico!

// ----------------------------------------------------------------------------------
// name            role                    image
// Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
// Angela Caroll	Chief Editor	        angela-caroll-chief-editor.jpg
// Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
// Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
// Scott Estrada	Developer	            scott-estrada-developer.jpg
// Barbara Ramos	Graphic Designer	    barbara-ramos-graphic-designer.jpg


// array contenente fuzione e dati da elaborare
const teamList = [
    createTeamMember ('Wayne Barnett', 'Founder & CEO', 'img/wayne-barnett-founder-ceo.jpg'),
    createTeamMember ('Angela Caroll', 'Chief Editor', 'img/angela-caroll-chief-editor.jpg'),
    createTeamMember ('Walter Gordon', 'Office Manager', 'img/walter-gordon-office-manager.jpg'),
    createTeamMember ('Angela Lopez', 'Social Media Manager', 'img/angela-lopez-social-media-manager.jpg'),
    createTeamMember ('Scott Estrada', 'Developer', 'img/scott-estrada-developer.jpg'),
    createTeamMember ('Barbara Ramos', 'Graphic Designer', 'img/barbara-ramos-graphic-designer.jpg')

];

for (let i = 0 ; i < teamList.length; i++){
    for (let key in teamList[i]){
        console.log(key + ":", teamList[i][key]);
    }
};

// FUNZIONE PER CREARE IL NUOVO MEMBRO
function createTeamMember(x, y, z){
    let newMember = {
        name : x,
        role : y,
        img : `<img src="${z}">
        `
    };


    return newMember;

};


// ARRAY DI OGGETTI 
const ourTeam = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'img/wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'img/angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'img/walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'img/angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'img/scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'img/barbara-ramos-graphic-designer.jpg',
    },

];

// console.log ('ourTeam', ourTeam, ourTeam.length, typeof ourTeam);
// Faccio un ciclo for per stampare in consol i membri del team iesimi
for (let i = 0 ; i < ourTeam.length; i++){
    console.log (
        i,                  // serve per stampare anche l'indice 0,1,2,3,4,5.
        ourTeam[i].name,    // cosi stampo in console i nomi dei singoli membri
        ourTeam[i].role,    
        ourTeam[i].image
    );
}


const ourTeamList = document.getElementById('our-team-list');
for (let i = 0; i < ourTeam.length; i++){
    ourTeamList.innerHTML += `
    <li>
        <h2>
            NOME ${ourTeam[i].name}
        </h2>

        <h3>
            RUOLO ${ourTeam[i].role}
        </h3>
        <h4>
            <img src = "${ourTeam[i].image}">
        </h4>
    </li>
    `
}






// // soluzione per stampare in pagina tramite chatgpt
// // CREO LA COSTANTE CHE SI COLLEGA AL DOM HTML 
// const teamListContainer = document.getElementById('team-list-container');

// for (let i = 0; i < teamList.length; i++) {
//   const member = teamList[i];

//   // Creo un nuovo elemento div per il membro del team
//   const memberDiv = document.createElement('div');

//   // Creo un paragrafo per le informazioni del membro
//   const memberInfoParagraph = document.createElement('p');
//   memberInfoParagraph.textContent = `Name: ${member.name}, Role: ${member.role}, Image: ${member.image}`;

//   // Aggiungere il paragrafo all'elemento div del membro
//   memberDiv.appendChild(memberInfoParagraph);

//   // Aggiungere l'elemento div al contenitore nel DOM
//   teamListContainer.appendChild(memberDiv);
// }










  





