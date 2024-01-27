// Create a Magic 8-Ball program that emulates the classic fortune-telling toy. The user will input a yes-or-no question, and the program will output a random response from the 8-Ball. Implement the program using conditional statements to select and display one of several predefined responses.

// 8 random answers

// console version:
// function run8Ball () {
//     prompt("Please enter your YES or NO question:", "question here");
//     let randomNumber = Math.floor(Math.random() * 8);
//     console.log('The magic 8-ball answers you:');
//     switch (randomNumber) {
//         case 0:
//             console.log('Absolutely.');
//             break;
//         case 1:
//             console.log('Probably, yes.');
//             break;
//         case 2:
//             console.log('Go for it!');
//             break;
//         case 3:
//             console.log('Well, if you feel like it!');
//             break;
//         case 4:
//             console.log('I have no idea...');
//             break;
//         case 5:
//             console.log('Not today.');
//             break;
//         case 6:
//             console.log('What!? ABSOLUTELY not!');
//             break;
//         case 7:
//             console.log('That doesn\'t sound like a good idea...');
//             break;
//         default:
//             break;
//         }
// }

// run8Ball();

// Browser version:

function run8Ball () {
    let answer;
    let element = document.getElementById( 'answer' );
    let randomNumber = Math.floor(Math.random() * 8);
    switch (randomNumber) {
        case 0:
            answer = 'Absolutely.';
            break;
        case 1:
            answer = 'Probably, yes.';
            break;
        case 2:
            answer = 'Go for it!';
            break;
        case 3:
            answer = 'Well, if you feel like it!';
            break;
        case 4:
            answer = 'I have no idea...';
            break;
        case 5:
            answer = 'Not today.';
            break;
        case 6:
            answer = 'What!? ABSOLUTELY not!';
            break;
        case 7:
            answer = 'That doesn\'t sound like a good idea...';
            break;
        default:
            break;
        }
        element.style.display = 'inline-block';
        element.innerHTML = answer;
        document.getElementById("questionform").reset();
}
