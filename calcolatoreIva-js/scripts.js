const IVA = 22
let prezzo = document.querySelector('.prezzo');
let risultato = document.querySelector('.risultato');
let costoIva = document.querySelector('.costoIva');

// definisco la funzione anonima per effettuare il calcolo
prezzo.addEventListener("keyup", function() {
    // casting per ottenere il risultato decimale
    let prezzoProdotto = parseFloat(prezzo.value);
    // verifico se il valore è valido
    if (!isNaN(prezzoProdotto)) {
        console.log("Inserito valore valido");
        let iva = prezzoProdotto * (IVA / 100); // calcolo l'iva da 
        console.log(iva);
        risultato.innerHTML = (prezzoProdotto + iva).toFixed(2); // sommo il prezzo e l'IVA formattando a 2 decimali essendo un tipo di dato monetario
        costoIva.innerHTML = iva.toFixed(2); // assegno il solo costo dell'iva
    } else {
        // segnalo i campi non valorizzati
        console.log("Nessun valore inserito.");
    }
});