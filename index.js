// Funzione creaCelle
function creaCelle(numeroCelle, bombe, mosse, celleSelezionate){
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
            mosse++;
            celleSelezionate++;
            if(cella.style.backgroundColor == "blue"){
                celleSelezionate = celleSelezionate - 2;
                cella.style.backgroundColor = "transparent";
            }else{
                // Verifica se è stata colpita la bomba o meno
                let puoiGiocare = true;
                for(let index=0; index<bombe.length; index++){
                    if(i == bombe[index]){
                        puoiGiocare = false;
                    }
                }
                const bloccaProgramma = document.getElementById("bloccaProgramma");
                const messaggio = document.getElementById("messaggio");
                if(puoiGiocare == true){
                    cella.style.backgroundColor = "blue";
                    if(numeroCelle == "100" && celleSelezionate == 84){
                        bloccaProgramma.style.display = "block";
                        messaggio.innerHTML = "Complimenti! Hai vinto! Clicca sul tasto Play per iniziare una nuova partita.";
                    }else if(numeroCelle == "81" && celleSelezionate == 65){
                        bloccaProgramma.style.display = "block";
                        messaggio.innerHTML = "Complimenti! Hai vinto! Clicca sul tasto Play per iniziare una nuova partita.";
                    }else if(numeroCelle == "49" && celleSelezionate == 33){
                        bloccaProgramma.style.display = "block";
                        messaggio.innerHTML = "Complimenti! Hai vinto! Clicca sul tasto Play per iniziare una nuova partita.";
                    }
                }else{
                    cella.style.backgroundColor = "red";
                    bloccaProgramma.style.display = "block";
                    messaggio.innerHTML = "Ops... hai fatto esplodere la bomba al tuo " + mosse + " tentativo. Clicca sul tasto Play per iniziare una nuova partita.";
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
    const bloccaProgramma = document.getElementById("bloccaProgramma");
    bloccaProgramma.style.display = "none";
    const messaggio = document.getElementById("messaggio");
    messaggio.innerHTML = `Made with &hearts; by <a href="">Boolean</a>`;
    // Input numero celle
    const numeroCelle = document.getElementById("numeroCelle").value;
    // Invoca funzione creaBombe
    const bombe = creaBombe(numeroCelle);
    console.log(bombe); // Posizione delle bombe
    // Invoca funzione creaCelle
    const mosse = 0;
    const celleSelezionate = 0;
    const celle = creaCelle(numeroCelle, bombe, mosse, celleSelezionate);
    // Invoca funzione mostraCelle
    const mostraCelle = mostra_celle(numeroCelle, celle);
})