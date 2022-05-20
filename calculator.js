let screen = document.getElementById("screen");

let calculate = (number) => {
    screen.value += number;
}
let screenvalue = () => {
    try {
        screen.value = eval(screen.value)

    } catch (err) {
        alert("Enter the valid Input");
    }
}

function clr() {
    screen.value = " ";
}


function del() {
    screen.value = screen.value.slice(0, -1);
}