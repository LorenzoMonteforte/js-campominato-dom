// Funzione creaCelle
function creaCelle(numeroCelle, bombe){
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
                // Verifica se è stata colpita la bomba o meno
                let puoiGiocare = true;
                for(let index=0; index<bombe.length; index++){
                    if(i == bombe[index]){
                        puoiGiocare = false;
                    }
                }
                if(puoiGiocare == true){
                    cella.style.backgroundColor = "blue";
                    console.log("Non hai colpito la bomba");
                }else{
                    cella.style.backgroundColor = "red";
                    console.log("Hai colpito la bomba");
                }
            }
        })
        // Aggiunge la cella creata all'array celle
        celle.push(cella);
    }
    return celle;
}
// Funzione creaBombe
function creaBombe(numeroCelle){
    const bombe = [];
    for(let i=0; i<16; i++){
        const bomba = Math.trunc(Math.random() * numeroCelle + 1);
        let puoiPushare = true;
        for(let index=0; index<bombe.length; index++){
            if(bomba == bombe[index]){
                puoiPushare = false;
                i--;
                break;
            }
        }
        if(puoiPushare == true){
            bombe.push(bomba);
        }
    }
    return bombe;
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
    // Invoca funzione creaBombe
    const bombe = creaBombe(numeroCelle);
    console.log(bombe);
    // Invoca funzione creaCelle
    const celle = creaCelle(numeroCelle, bombe);
    // Invoca funzione mostraCelle
    const mostraCelle = mostra_celle(numeroCelle, celle);
})