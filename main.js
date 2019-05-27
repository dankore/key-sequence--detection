//Unicrons
const pressed = [];
const secretCode = 'a';

window.addEventListener('keyup', (e) =>  {
    pressed.push(e.key)
    
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    
    if(pressed.join('').includes(secretCode)){
        console.log('YES TO UNICORNS!');
        cornify_add();
    };
    
    console.log(pressed);
})

//Sharks
const sharks = [];
const secret = 'b';

window.addEventListener('keyup', (e) =>  {
    sharks.push(e.key)
    
    sharks.splice(-secret.length - 1, sharks.length - secret.length);
    
    if(sharks.join('').includes(secret)){
        console.log('YES TO SHARKS!');
        sharkify_add();
    };
    
    console.log(sharks);
})



