// Funzione creaCelle
function creaCelle(numeroCelle){
    // Inizializza array celle
    const celle = [];
    // Crea celle
    for(let i=1; i<=numeroCelle; i++){
        const cella = document.createElement("div");
        cella.classList.add("cella");
        // Verifica quante celle creare
        if(numeroCelle == "100"){
            cella.classList.add("cella100");
        }else if(numeroCelle == "81"){
            cella.classList.add("cella81");
        }else if(numeroCelle == "49"){
            cella.classList.add("cella49");
        }
        // Aggiunge il numero alla cella
        cella.textContent = i;
        // Btn cella click
        cella.addEventListener("click", function(){
            if(cella.style.backgroundColor == "blue"){
                cella.style.backgroundColor = "transparent";
            }else{
                cella.style.backgroundColor = "blue";
                console.log("Hai cliccato sulla cella numero " + i);
            }
        })
        // Aggiunge la cella creata all'array celle
        celle.push(cella);
    }
    return celle;
}
// Funzione mostra_celle
function mostra_celle(numeroCelle, celle){
    // Prende il container in cui inserire le celle
    const container = document.getElementById("container");
    container.style.display = "flex";
    container.innerHTML = "";
    // Mostra ciascuna cella dell'array celle
    for(let i=0; i<numeroCelle; i++){
        container.appendChild(celle[i]);
    }
}
// Btn play click
const play = document.getElementById("play");
play.addEventListener("click", function(){
    // Input numero celle
    const numeroCelle = document.getElementById("numeroCelle").value;
    // Invoca funzione creaCelle
    const celle = creaCelle(numeroCelle);
    // Invoca funzione mostraCelle
    const mostraCelle = mostra_celle(numeroCelle, celle);
})