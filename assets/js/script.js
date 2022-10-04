const letras = document.querySelectorAll(".btn_letra");
const conteo = document.querySelector("#conteo");
const lista_palabras = document.querySelector("#lista_palabras");

let acumulador = 0;
let mensaje = document.querySelector("#mensaje");

    
function generarLetras() {

    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    let charactersLength = characters.length;
            
    for (let i = 0; i < 1; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
            
    return result;
}

function finDelJuego(acumulador){
    if(acumulador == 10){
        mensaje.innerText = "Te felcito, mi amorcito. Has encontrado los diez apodos que te tengo, hermosura mía. Te debo muchos besitos para cuando nos vemos, ¡te amo muchísimo! :3"
    }
}

//Generar letras random
letras[0].innerHTML = generarLetras();
for(let i = 2; i < 7; i++){letras[i].innerHTML = generarLetras();}
    
letras[16].innerHTML = generarLetras();
for(let i = 18; i < 25; i++){ letras[i].innerHTML = generarLetras();}
for(let i = 26; i < 30; i++){ letras[i].innerHTML = generarLetras();}
        
letras[32].innerHTML = generarLetras();
for(let i = 34; i < 40; i++){ letras[i].innerHTML = generarLetras();}
for(let i = 41; i < 43; i++){ letras[i].innerHTML = generarLetras();}
letras[44].innerHTML = generarLetras();

for(let i = 47; i < 49; i++){ letras[i].innerHTML = generarLetras();}
for(let i = 50; i < 55; i++){ letras[i].innerHTML = generarLetras();}
letras[56].innerHTML = generarLetras();
for(let i = 58; i < 60; i++){ letras[i].innerHTML = generarLetras();}

for(let i = 63; i < 65; i++){ letras[i].innerHTML = generarLetras();}
for(let i = 66; i < 70; i++){ letras[i].innerHTML = generarLetras();}
for(let i = 72; i < 74; i++){ letras[i].innerHTML = generarLetras();}

letras[77].innerHTML = generarLetras();
for(let i = 79; i < 81; i++){ letras[i].innerHTML = generarLetras();}
for(let i = 82; i < 85; i++){ letras[i].innerHTML = generarLetras();}
for(let i = 86; i < 89; i++){ letras[i].innerHTML = generarLetras();}

for(let i = 92; i < 94; i++){ letras[i].innerHTML = generarLetras();}
for(let i = 95; i < 97; i++){ letras[i].innerHTML = generarLetras();}
letras[98].innerHTML = generarLetras();
for(let i = 101; i < 104; i++){ letras[i].innerHTML = generarLetras();}

for(let i = 107; i < 110; i++){ letras[i].innerHTML = generarLetras();}
for(let i = 111; i < 113; i++){ letras[i].innerHTML = generarLetras();}
letras[114].innerHTML = generarLetras();
for(let i = 116; i < 119; i++){ letras[i].innerHTML = generarLetras();}

for(let i = 121; i < 126; i++){ letras[i].innerHTML = generarLetras();}
for(let i = 127; i < 134; i++){ letras[i].innerHTML = generarLetras();}

for(let i = 136; i < 142; i++){ letras[i].innerHTML = generarLetras();}
for(let i = 143; i < 149; i++){ letras[i].innerHTML = generarLetras();}

for(let i = 151; i < 157; i++){ letras[i].innerHTML = generarLetras();}
letras[163].innerHTML = generarLetras();

for(let i = 166; i < 174; i++){ letras[i].innerHTML = generarLetras();}
for(let i = 175; i < 179; i++){ letras[i].innerHTML = generarLetras();}

for(let i = 180; i < 185; i++){ letras[i].innerHTML = generarLetras();}
        

const letra_compartida_1 = ()=>{

    return letras[10].classList.contains("btn_letra_click") || letras[10].classList.contains("palabra_correcta");
}
        
const palabra1 = ()=>{

    return letras[7].classList.contains("btn_letra_click") && 
    letras[8].classList.contains("btn_letra_click") && 
    letras[9].classList.contains("btn_letra_click") && 
    letras[11].classList.contains("btn_letra_click") && 
    letras[12].classList.contains("btn_letra_click") && 
    letras[13].classList.contains("btn_letra_click") && 
    letras[14].classList.contains("btn_letra_click");
}

const letra_compartida_2 = ()=>{

    return letras[85].classList.contains("btn_letra_click") || letras[85].classList.contains("palabra_correcta");
}

        

const palabra2 = ()=>{

    return letras[25].classList.contains("btn_letra_click") &&
    letras[40].classList.contains("btn_letra_click") &&
    letras[55].classList.contains("btn_letra_click") &&
    letras[70].classList.contains("btn_letra_click") &&
    letras[100].classList.contains("btn_letra_click") &&
    letras[115].classList.contains("btn_letra_click");
}

const letra_compartida_3 = ()=>{
            
    return letras[113].classList.contains("btn_letra_click") || letras[113].classList.contains("palabra_correcta");
}

const letra_compartida_extra = ()=>{
    return letras[113].classList.contains("btn_letra_click") || letras[113].classList.contains("palabra_correcta");
}

const palabra3 = ()=>{
            
    return letras[43].classList.contains("btn_letra_click") &&
    letras[57].classList.contains("btn_letra_click") &&
    letras[71].classList.contains("btn_letra_click") &&
    letras[99].classList.contains("btn_letra_click");
}

const palabra4 = () =>{
            
    return letras[1].classList.contains("btn_letra_click") &&
    letras[17].classList.contains("btn_letra_click") &&
    letras[33].classList.contains("btn_letra_click") &&
    letras[49].classList.contains("btn_letra_click") &&
    letras[65].classList.contains("btn_letra_click") &&
    letras[81].classList.contains("btn_letra_click") &&
    letras[97].classList.contains("btn_letra_click");
}

const palabra5 = () =>{
            
    return letras[15].classList.contains("btn_letra_click") &&
    letras[30].classList.contains("btn_letra_click") && 
    letras[45].classList.contains("btn_letra_click") &&
    letras[60].classList.contains("btn_letra_click") &&
    letras[75].classList.contains("btn_letra_click") &&
    letras[90].classList.contains("btn_letra_click") &&
    letras[105].classList.contains("btn_letra_click") &&
    letras[120].classList.contains("btn_letra_click") &&
    letras[135].classList.contains("btn_letra_click") &&
    letras[150].classList.contains("btn_letra_click") &&
    letras[165].classList.contains("btn_letra_click");
}

const palabra6 = () =>{
            
    return letras[31].classList.contains("btn_letra_click") &&
    letras[46].classList.contains("btn_letra_click") &&
    letras[61].classList.contains("btn_letra_click") &&
    letras[76].classList.contains("btn_letra_click") &&
    letras[91].classList.contains("btn_letra_click") &&
    letras[106].classList.contains("btn_letra_click");
}

const letra_compartida_4 = () =>{

    return letras[158].classList.contains("btn_letra_click") || letras[158].classList.contains("palabra_correcta"); 
}

const palabra7 = () =>{
            
    return letras[62].classList.contains("btn_letra_click") &&
    letras[78].classList.contains("btn_letra_click") &&
    letras[94].classList.contains("btn_letra_click") &&
    letras[110].classList.contains("btn_letra_click") &&
    letras[126].classList.contains("btn_letra_click") &&
    letras[142].classList.contains("btn_letra_click") &&
    letras[174].classList.contains("btn_letra_click");
}

const palabra8 = () =>{
            
    return letras[162].classList.contains("btn_letra_click") &&
    letras[161].classList.contains("btn_letra_click") &&
    letras[160].classList.contains("btn_letra_click") &&
    letras[159].classList.contains("btn_letra_click") &&
    letras[157].classList.contains("btn_letra_click");
}

const letra_compartida_5 = () =>{

    return letras[194].classList.contains("btn_letra_click") || letras[194].classList.contains("palabra_correcta"); 
}

const palabra9 = () =>{

    return letras[74].classList.contains("btn_letra_click") &&
    letras[89].classList.contains("btn_letra_click") &&
    letras[104].classList.contains("btn_letra_click") &&
    letras[119].classList.contains("btn_letra_click") &&
    letras[134].classList.contains("btn_letra_click") &&
    letras[149].classList.contains("btn_letra_click") &&
    letras[164].classList.contains("btn_letra_click") &&
    letras[179].classList.contains("btn_letra_click");
}

const palabra10 = () =>{

    return letras[185].classList.contains("btn_letra_click") &&
    letras[186].classList.contains("btn_letra_click") &&
    letras[187].classList.contains("btn_letra_click") &&
    letras[188].classList.contains("btn_letra_click") &&
    letras[189].classList.contains("btn_letra_click") &&
    letras[190].classList.contains("btn_letra_click") &&
    letras[191].classList.contains("btn_letra_click") &&
    letras[192].classList.contains("btn_letra_click") &&
    letras[193].classList.contains("btn_letra_click");
}

letras.forEach((letra)=>{

    letra.addEventListener("click",()=>{
            
        if(letra.classList.contains("btn_letra")){
                
            letra.classList.remove("btn_letra");
            letra.classList.add("btn_letra_click");
            
        }else{
                
            letra.classList.remove("btn_letra_click");
            letra.classList.add("btn_letra");
        }

        //Obtener palabra 1
        if(letra_compartida_1() && palabra1()){

            letras[7].classList.remove("btn_letra_click");
            letras[7].classList.add("palabra_correcta");

            letras[8].classList.remove("btn_letra_click");
            letras[8].classList.add("palabra_correcta");

            letras[9].classList.remove("btn_letra_click");
            letras[9].classList.add("palabra_correcta");

            letras[10].classList.remove("btn_letra_click");
            letras[10].classList.add("palabra_correcta");

            letras[11].classList.remove("btn_letra_click");
            letras[11].classList.add("palabra_correcta");
                    
            letras[12].classList.remove("btn_letra_click");
            letras[12].classList.add("palabra_correcta");
                    
            letras[13].classList.remove("btn_letra_click");
            letras[13].classList.add("palabra_correcta");
                    
            letras[14].classList.remove("btn_letra_click");
            letras[14].classList.add("palabra_correcta");

            acumulador++;

            conteo.innerText = acumulador.toString();

            lista_palabras.innerHTML += '<li class="text-start color-moradoIntenso"><strong>Mi Pirañita</strong></li>';

            finDelJuego(acumulador);
  
        }

        //Obtener palabra 2
        if(letra_compartida_1() && palabra2()){

            letras[10].classList.remove("btn_letra_click");
            letras[10].classList.add("palabra_correcta");

            letras[25].classList.remove("btn_letra_click");
            letras[25].classList.add("palabra_correcta");

            letras[40].classList.remove("btn_letra_click");
            letras[40].classList.add("palabra_correcta");
                    
            letras[55].classList.remove("btn_letra_click");
            letras[55].classList.add("palabra_correcta");

            letras[70].classList.remove("btn_letra_click");
            letras[70].classList.add("palabra_correcta");
                    
            letras[85].classList.remove("btn_letra_click");
            letras[85].classList.add("palabra_correcta");
                    
            letras[100].classList.remove("btn_letra_click");
            letras[100].classList.add("palabra_correcta");
                    
            letras[115].classList.remove("btn_letra_click");
            letras[115].classList.add("palabra_correcta");

            acumulador++;

            conteo.innerText = acumulador.toString();

            lista_palabras.innerHTML += '<li class="text-start color-moradoIntenso"><strong>Mi Angelito Caído del cielo</strong></li>';
                    
            finDelJuego(acumulador);
        }

        //Obtener palabra 3
        if(letra_compartida_2() && letra_compartida_extra() && palabra3()){

            letras[43].classList.remove("btn_letra_click");
            letras[43].classList.add("palabra_correcta");

            letras[57].classList.remove("btn_letra_click");
            letras[57].classList.add("palabra_correcta");

            letras[71].classList.remove("btn_letra_click");
            letras[71].classList.add("palabra_correcta");

            letras[85].classList.remove("btn_letra_click");
            letras[85].classList.add("palabra_correcta");

            letras[99].classList.remove("btn_letra_click");
            letras[99].classList.add("palabra_correcta");

            letras[113].classList.remove("btn_letra_click");
            letras[113].classList.add("palabra_correcta");

            acumulador++;

            conteo.innerText = acumulador.toString();

            lista_palabras.innerHTML += '<li class="text-start color-moradoIntenso"><strong>Mi Cosita Monona</strong></li>';
                    
            finDelJuego(acumulador);
        }

        //Obtener palabra 4
        if(letra_compartida_3() && palabra4()){

            letras[1].classList.remove("btn_letra_click");
            letras[1].classList.add("palabra_correcta");

            letras[17].classList.remove("btn_letra_click");
            letras[17].classList.add("palabra_correcta");

            letras[33].classList.remove("btn_letra_click");
            letras[33].classList.add("palabra_correcta");

            letras[49].classList.remove("btn_letra_click");
            letras[49].classList.add("palabra_correcta");

            letras[65].classList.remove("btn_letra_click");
            letras[65].classList.add("palabra_correcta");

            letras[81].classList.remove("btn_letra_click");
            letras[81].classList.add("palabra_correcta");

            letras[97].classList.remove("btn_letra_click");
            letras[97].classList.add("palabra_correcta");

            letras[113].classList.remove("btn_letra_click");
            letras[113].classList.add("palabra_correcta");

            acumulador++;

            conteo.innerText = acumulador.toString();

            lista_palabras.innerHTML += '<li class="text-start color-moradoIntenso"><strong>Mi Conejita</strong></li>';

            finDelJuego(acumulador);
        }

        //Obtener palabra 5
        if(palabra5()){

            letras[15].classList.remove("btn_letra_click");
            letras[15].classList.add("palabra_correcta");

            letras[30].classList.remove("btn_letra_click");
            letras[30].classList.add("palabra_correcta");
                    
            letras[45].classList.remove("btn_letra_click");
            letras[45].classList.add("palabra_correcta");
                    
            letras[60].classList.remove("btn_letra_click");
            letras[60].classList.add("palabra_correcta");
                    
            letras[75].classList.remove("btn_letra_click");
            letras[75].classList.add("palabra_correcta");
                    
            letras[90].classList.remove("btn_letra_click");
            letras[90].classList.add("palabra_correcta");
                    
            letras[105].classList.remove("btn_letra_click");
            letras[105].classList.add("palabra_correcta");
                    
            letras[120].classList.remove("btn_letra_click");
            letras[120].classList.add("palabra_correcta");
                    
            letras[135].classList.remove("btn_letra_click");
            letras[135].classList.add("palabra_correcta");
                    
            letras[150].classList.remove("btn_letra_click");
            letras[150].classList.add("palabra_correcta");
                    
            letras[165].classList.remove("btn_letra_click");
            letras[165].classList.add("palabra_correcta");

            acumulador++;

            conteo.innerText = acumulador.toString();

            lista_palabras.innerHTML += '<li class="text-start color-moradoIntenso"><strong>Mi Quinceañera</strong></li>';
                    
            finDelJuego(acumulador);
        }

        //Obtener palabra 6
        if(palabra6()){

            letras[31].classList.remove("btn_letra_click");
            letras[31].classList.add("palabra_correcta");
                    
            letras[46].classList.remove("btn_letra_click");
            letras[46].classList.add("palabra_correcta");
                    
            letras[61].classList.remove("btn_letra_click");
            letras[61].classList.add("palabra_correcta");
                    
            letras[76].classList.remove("btn_letra_click");
            letras[76].classList.add("palabra_correcta");
                    
            letras[91].classList.remove("btn_letra_click");
            letras[91].classList.add("palabra_correcta");
                    
            letras[106].classList.remove("btn_letra_click");
            letras[106].classList.add("palabra_correcta");

            acumulador++;

            conteo.innerText = acumulador.toString();

            lista_palabras.innerHTML += '<li class="text-start color-moradoIntenso"><strong>Mi Joyita</strong></li>';
                    
            finDelJuego(acumulador);
        }

        //Obtener palabra 7
        if(letra_compartida_4 && palabra7()){

            letras[62].classList.remove("btn_letra_click");
            letras[62].classList.add("palabra_correcta");

            letras[78].classList.remove("btn_letra_click");
            letras[78].classList.add("palabra_correcta");

            letras[94].classList.remove("btn_letra_click");
            letras[94].classList.add("palabra_correcta");

            letras[110].classList.remove("btn_letra_click");
            letras[110].classList.add("palabra_correcta");

            letras[126].classList.remove("btn_letra_click");
            letras[126].classList.add("palabra_correcta");

            letras[142].classList.remove("btn_letra_click");
            letras[142].classList.add("palabra_correcta");

            letras[158].classList.remove("btn_letra_click");
            letras[158].classList.add("palabra_correcta");

            letras[174].classList.remove("btn_letra_click");
            letras[174].classList.add("palabra_correcta");

            acumulador++;

            conteo.innerText = acumulador.toString();

            lista_palabras.innerHTML += '<li class="text-start color-moradoIntenso"><strong>Mi Guguaguita</strong></li>';
                    
            finDelJuego(acumulador);
        }

        //Obtener palabra 8
        if(letra_compartida_4 && palabra8()){

            letras[162].classList.remove("btn_letra_click");
            letras[162].classList.add("palabra_correcta");

            letras[161].classList.remove("btn_letra_click");
            letras[161].classList.add("palabra_correcta");
                    
            letras[160].classList.remove("btn_letra_click");
            letras[160].classList.add("palabra_correcta");
                    
            letras[159].classList.remove("btn_letra_click");
            letras[159].classList.add("palabra_correcta");
                    
            letras[158].classList.remove("btn_letra_click");
            letras[158].classList.add("palabra_correcta");
                    
            letras[157].classList.remove("btn_letra_click");
            letras[157].classList.add("palabra_correcta");

            acumulador++;

            conteo.innerText = acumulador.toString();

            lista_palabras.innerHTML += '<li class="text-start color-moradoIntenso"><strong>Mi Niñita</strong></li>';
                    
            finDelJuego(acumulador);
        }

        //Obtener palabra 9
        if(letra_compartida_5() && palabra9()){

            letras[74].classList.remove("btn_letra_click");
            letras[74].classList.add("palabra_correcta");
                    
            letras[89].classList.remove("btn_letra_click");
            letras[89].classList.add("palabra_correcta");1
                    
            letras[104].classList.remove("btn_letra_click");
            letras[104].classList.add("palabra_correcta");
                    
            letras[119].classList.remove("btn_letra_click");
            letras[119].classList.add("palabra_correcta");
                    
            letras[134].classList.remove("btn_letra_click");
            letras[134].classList.add("palabra_correcta");
                    
            letras[149].classList.remove("btn_letra_click");
            letras[149].classList.add("palabra_correcta");
                    
            letras[164].classList.remove("btn_letra_click");
            letras[164].classList.add("palabra_correcta");
                    
            letras[179].classList.remove("btn_letra_click");
            letras[179].classList.add("palabra_correcta");
                    
            letras[194].classList.remove("btn_letra_click");
            letras[194].classList.add("palabra_correcta");

            acumulador++;

            conteo.innerText = acumulador.toString();

            lista_palabras.innerHTML += '<li class="text-start color-moradoIntenso"><strong>Mi Muñequita</strong></li>';
                    
            finDelJuego(acumulador);
        }

        //Obtener palabra10
        if(letra_compartida_5() && palabra10()){

            letras[185].classList.remove("btn_letra_click");
            letras[185].classList.add("palabra_correcta");

            letras[186].classList.remove("btn_letra_click");
            letras[186].classList.add("palabra_correcta");

            letras[187].classList.remove("btn_letra_click");
            letras[187].classList.add("palabra_correcta");
                    
            letras[188].classList.remove("btn_letra_click");
            letras[188].classList.add("palabra_correcta");
                    
            letras[189].classList.remove("btn_letra_click");
            letras[189].classList.add("palabra_correcta");
                    
            letras[190].classList.remove("btn_letra_click");
            letras[190].classList.add("palabra_correcta");
                    
            letras[191].classList.remove("btn_letra_click");
            letras[191].classList.add("palabra_correcta");
                    
            letras[192].classList.remove("btn_letra_click");
            letras[192].classList.add("palabra_correcta");
                    
            letras[193].classList.remove("btn_letra_click");
            letras[193].classList.add("palabra_correcta");

            letras[194].classList.remove("btn_letra_click");
            letras[194].classList.add("palabra_correcta");

            acumulador++;

            conteo.innerText = acumulador.toString();

            lista_palabras.innerHTML += '<li class="text-start color-moradoIntenso"><strong>Mi Princesita</strong></li>';
                    
            finDelJuego(acumulador);
        }
    });

});