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
}
