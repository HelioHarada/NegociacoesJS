var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
]

var tbody = document.querySelector('table tbody');

console.log(campos);

document.querySelector('.form').addEventListener('submit', function(event){
    event.preventDefault()

    var tr = document.createElement('tr');

    campos.forEach(function(campo){
        console.log(campo)

        var td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
    });

    var tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;

    var tdTotal = document.createElement('td');
    tdTotal.textContent += tdVolume;

    // 

    tr.appendChild(tdVolume);
    
    tbody.appendChild(tr);
    tr.appendChild(tdTotal);
    tbody.appendChild(tr);
    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;

    campos[0].focus();
})