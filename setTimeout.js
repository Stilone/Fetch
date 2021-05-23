const btnElement = document.getElementById('btn');

const showColor = () => {
    if(btnElement) {
        const classes = btnElement.classList;
        const result = classes.contains('btn-y');

        if (result) {
            btnElement.classList.remove('btn-y');
            btnElement.classList.add('btn-b');
        } else {
            btnElement.classList.add('btn-y');
        }
    }
}

setInterval(showColor, 5000)