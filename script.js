// generate random password

var peference = prompt("Would you like upper case?");


function generate() {

    

    //set password lenth/ complexity 

    var complexity = document.getElementById

    var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var character=["!","@","#","$"];
    
    var randomPassword = "";

    upper.push.apply(upper, lower);
    upper.push.apply(upper,character);

    var numberOfPCharc= upper.length;

    for (var i = 0; i<18; i++){
        var thisone = math.floor(math.random()*numberOfPCharc);
        randomPassword = randomPassword + upper[thisone];
    }

    return randomPassword;
}
    // prompts


    
    // if else

    // upon click generate element by id 

    // add previous password to clip 




