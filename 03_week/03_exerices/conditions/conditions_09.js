// Create a Magic 8-Ball program that emulates the classic fortune-telling toy. The user will input a yes-or-no question, and the program will output a random response from the 8-Ball. Implement the program using conditional statements to select and display one of several predefined responses.

// 8 random answers

function run8Ball () {
    prompt("Please enter your YES or NO question:", "question here");
    let randomNumber = Math.floor(Math.random() * 8);
    console.log('The magic 8-ball answers you:');
    switch (randomNumber) {
        case 1:
            console.log('Absolutely.');
            break;
        case 2:
            console.log('Probably, yes.');
            break;
        case 3:
            console.log('Go for it!');
            break;
        case 4:
            console.log('Well, if you feel like it!');
            break;
        case 5:
            console.log('I have no idea...');
            break;
        case 6:
            console.log('Not today.');
            break;
        case 7:
            console.log('What!? ABSOLUTELY not!');
            break;
        case 8:
            console.log('That doesn\'t sound like a good idea...');
            break;
        default:
            break;
        }
}

run8Ball();