/**
 * Randomized Closed-Loop-Human-Centipede Secret Santa Matcher
 *
 * If using Gmail for sending emails, temporarily turn on "Less secure apps".
 * https://www.google.com/settings/security/lesssecureapps
 *
 * To run, install npm and nodejs.
 * Then, edit the emails in this script.
 * Then,
 *   `$ npm install nodemailer`
 *   `$ node secret_santa_matcher.js`
 */
var botEmail = '...@gmail.com';     // Edit address used for email sending.
var botPassword = '...';            // Edit its account password.

var emails = [                      // Change to your friends' emails.
    'a@aol.com',
    'b@hotmail.com',
    'c@yahoo.com',
    'd@outlook.com',
    'e@gmail.com',
    'f@gmx.com'
];

var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: botEmail,
        pass: botPassword
    }
});

var santas = shuffle(emails);
var children = santas.slice();          // Make a copy.
children.unshift( children.pop() );     // Move last child to 1st.


// Main
for (var i = 0; i < santas.length; i++) {
    transporter.sendMail(mailOptions(santas[i], children[i]), (error, info) => {
        if (error) { return console.log(error); }
        console.log('Message sent: ' + info.response);
    });
}


function shuffle(array) {
    /**
     * Fisher-Yates shuffle.
     * taken from http://bost.ocks.org/mike/shuffle/
     */
    var m = array.length, t, i;
    // While there remain elements to shuffle...
    while (m) {
        // Pick a remaining element.
        i = Math.floor(Math.random() * m--);
        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
}

function mailOptions(santaEmail, childEmail) {
    return {
        from: `not Secret Santa <${botEmail}>`,
        to: santaEmail,
        subject: 'Secret Santa',
        text: `ho ho ho. You are getting ${childEmail} something under $20.`
    };
}

