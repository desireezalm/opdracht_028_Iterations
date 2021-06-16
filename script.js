// OUDE STIJL


let colors = ['yellow', 'blue', 'red', 'orange'];
let i = 0;

console.log("OUDE STIJL - WHILE LOOP: ");

while(colors[i]) {
    console.log(colors[i]) + "<br>";
    i++;
}

console.log("OUDE STIJL - FOR LOOP: ");

for(i = 0; i < colors.length; i++) {
    console.log(colors[i]) + "<br>";
}


// NIEUWE STIJL

console.log("NIEUWE STIJL - FOR EACH: ");

colors.forEach(element => console.log(element));

// 1. FOR LOOP: 3 REGELS
// 1. WHILE LOOP: 4 REGELS
// 2. FOR EACH MEHOD: 1 REGEL
// 3. Het aantal iteraties hoeft niet geïnitialiseerd te worden. 
        // De For loop vind ik het duidelijkste, omdat daar alles
        // benoemd wordt.
/* 
    4.  for (const item in items) {
            console.log(item);
        }

        Object.entries(items).forEach(item => {
            console.log(item);
        }

*/