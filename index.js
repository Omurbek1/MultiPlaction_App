function getInfo() {
    let input = document.getElementById('input').value;
    let output = document.getElementById('output');
    let clear = document.getElementById('clear');
    let textarea = document.getElementById('input')

    if (input <= 0 || input > 1000) {
        alert('Сураныч, 1ден 1000ге чейинки санды киргизиниз!!!')
    }
    else {
        output.innerHTML = ' ';
        output.style.display = 'block';

        for (let i = 0; i <= 10; i++) {
            let result = `${input}*${i}=${input * i}<hr>`
            output.innerHTML += result;
        }
        textarea.value = ''
        clear.style.display = 'block'
    }
};

function clearTable() {
    let output = document.getElementById('output');
    let clear = document.getElementById("clear");
    clear.style.display = 'none';
    output.style.style = 'none';
};