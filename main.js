const pressed = [];
const secretCode = 'a';


window.addEventListener('keyup', (e) =>{
    pressed.push(e.key)
    
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    
    if(pressed.join('').includes(secretCode)){
        console.log('YES TO UNICORNS!');
        cornify_add();
    };
    
    console.log(pressed);
})
