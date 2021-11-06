var body = document.body;
var switcher = document.getElementsByClassName('js-toggle')[0];

//Click on dark mode icon. Add dark mode classes and wrappers. Store user preference through sessions
switcher.addEventListener("click", function () {
    this.classList.toggle('js-toggle--checked');
    this.classList.add('js-toggle--focus');
    //If dark mode is selected
    if (this.classList.contains('js-toggle--checked')) {
        body.classList.add('dark-mode');
        //Save user preference in storage
        localStorage.setItem('darkMode', 'true');
    } else {
        body.classList.remove('dark-mode');
        setTimeout(function () {
            localStorage.removeItem('darkMode');
        }, 100);
    }
})

//Check Storage. Keep user preference on page reload
if (localStorage.getItem('darkMode')) {
    //body.classList.add('dark-mode');
    switcher.classList.add('js-toggle--checked');
    body.classList.add('dark-mode');
}