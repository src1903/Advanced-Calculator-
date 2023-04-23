(function(){

    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');
    let power = document.querySelector('.pow');
    let sqr = document.querySelector('.sqr');
    let abs = document.querySelector('.abs');
    let fak = document.querySelector('.fak');   
    let sinus = document.querySelector('.sin');   
    let cosinus = document.querySelector('.cos');   
    let tanjant = document.querySelector('.tan');   
   
    // Square the entered number
    power.addEventListener('click',function(){
        let deger = screen.value;
        power = Math.pow(deger,2);
        screen.value = power;
    });
    // Take the square root of the entered number
    sqr.addEventListener('click',function(){
        let deger = screen.value;
        sqr = Math.sqrt(deger);
        screen.value = sqr;
    });

    // Getting the absolute value of the entered number
    abs.addEventListener('click',function(){
        let mutlak = screen.value;
        deger = Math.abs(mutlak);
        screen.value = deger;
    });
    // Get the factorial of the entered number
    fak.addEventListener('click',function(){
        let faktoriyel = 1;
        let a = screen.value;
        if(a < 0) {
            alert("Lütfen pozitif bir tamsayı giriniz!");
        } else{
    
            for(let i = 1; i <= a; i++){
                 faktoriyel = faktoriyel * i;
            }
        }
        screen.value = faktoriyel;
    });
    // Get the sine of the entered number
    sinus.addEventListener('click',function(){
        let deger = screen.value;
        sinus = Math.sin(deger);
        screen.value = sinus;
    });
    // Getting the cosine of the entered number
    cosinus.addEventListener('click',function(){
        let deger = screen.value;
        cosinus = Math.cos(deger);
        screen.value = cosinus;
    });
    // Get the tangent of the entered number
    tanjant.addEventListener('click',function(){
        let deger = screen.value;
        tanjant = Math.tan(deger);
        screen.value = tanjant;
    });


    buttons.forEach(function(button){
        button.addEventListener('click',function(e){
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });
    
    equal.addEventListener('click',function(e){
        if(screen.value === ''){
            screen.value = "";
        }
        else{
            let answer = eval(screen.value);
            screen.value = answer;
        }
    });

    clear.addEventListener('click',function(e){
        screen.value = "";
    });



})();
