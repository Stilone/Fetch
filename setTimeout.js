const showColor = () => {
    const btnElement = document.getElementById('btn');
    if(btnElement) {
        const classes = btnElement.classList;
        const result = classes.contains('btn-b');
        if (result) {
            console.log(result)
            btnElement.classList.remove('btn-b');
        } else {
            console.log(result)
            btnElement.classList.add('btn-b');
        }
    }
}

setInterval(showColor, 1000);
