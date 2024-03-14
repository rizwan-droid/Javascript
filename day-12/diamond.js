
    let pattern = '';
    let charCode = 65; // ASCII code for 'A'

    for (let i = 0; i < 3; i++) {
        // Spaces
        for (let j = 0; j < 3 - i; j++) {
            pattern += ' ';
        }
        
        // Characters
        for (let k = 0; k <= i*2; k++) {
            pattern += String.fromCharCode(charCode);
            charCode++;
        }
        pattern += '\n';
    }

    console.log(pattern);
let b='J'.charCodeAt(); //ascii code of 'B'
let x='';
for (let a = 0; a < 3; a++){
    for(b=0; b<=a; b++){
        x+=' ';
    }
    for(let c=0; c<=a+2; c++){
        x+=String.fromCharCode(b);
        b+=1;
    }
    x+='\n';
}
