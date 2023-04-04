<<<<<<< Updated upstream
const defaultBackground = document.body.style.background;
const casperBackground = 'url(../img/casper.png)';

// Check if the casperMode cookie is set to true.
let isCasperMode = document.cookie.indexOf('casperMode=true') > -1;

// Check if the casperMode cookie is set to true.
checkMode();

function casperMode() {

    // Toggle casperMode.
    isCasperMode = !isCasperMode;

    if (isCasperMode) {
        
        document.body.style.background = casperBackground;

        console.log('Casper appears!');

    } else {

        document.body.style.background = defaultBackground;
        
        console.log('Casper disappears!');
    }

    // Set cookie.
    document.cookie = `casperMode=${isCasperMode};`;
}

function checkMode() {

    if (isCasperMode) {

        document.body.style.background = casperBackground;
    }
=======
let showCasper = document.cookie.indexOf("showCasper=true") > -1;

//updateCasper();

function toggleCasper() {

    // Toggle the showCasper variable.
    showCasper = !showCasper;
    
    updateCasper();
}

function updateCasper() {

    // Update the cookie.
    document.cookie = "showCasper=" + showCasper;

    // If showCasper is true, show Casper as the background image.
    document.body.style.backgroundImage = showCasper ? "url('../img/casper.png')" : "none";
>>>>>>> Stashed changes
}
