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



