function liczby(tablica){
    tablica.forEach(() => {
        for (let a = 0; a < tablica.length - 1; a++){
            if(tablica[a] > tablica[a + 1]){
                let zamiana = tablica[a];
                tablica[a] = tablica[a + 1] ;
                tablica[a + 1]  = zamiana;
            }
        }
    })
    return(tablica);
}
console.log(liczby([1, 6, 4, 10, 20]));