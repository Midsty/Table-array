let btnGet = document.querySelector('button');
let myTable = document.querySelector('#table');
//Pakt de omgezette array 
let Resultaat = [
    { name: 'banken', Resultaat: 'Niet gevonden', Dichtheid: "36%" },
    { name: 'stoel', Resultaat: 'Niet gevonden', Dichtheid: "36%" },
    { name: 'bank', Resultaat: 'Niet gevonden', Dichtheid: "36%" },
    { name: 'lamp', Resultaat: 'Niet gevonden', Dichtheid: "36%" }
]
//Maakt de header aan
let headers = ['Zoekopdracht', 'Resultaat', 'Dichtheid'];
btnGet.addEventListener('click', () => {
    let table = document.createElement('table');
    let headerRow = document.createElement('tr');
    headers.forEach(headerText => {
        let header = document.createElement('th');
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });
    table.appendChild(headerRow);
    //maakt De andere rows
    Resultaat.forEach(emp => {
        let row = document.createElement('tr');
        Object.values(emp).forEach(text => {
            let cell = document.createElement('td');
            let textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);
        })
        table.appendChild(row);
    });
    myTable.appendChild(table);
});