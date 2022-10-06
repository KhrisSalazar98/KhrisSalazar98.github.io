document.addEventListener("DOMContentLoaded",()=>{

    const btn_jugar = document.querySelector(".btn_jugar");
    const txt_jugar = document.querySelector(".txt_jugar");

    const count_down_timer_falso = document.querySelector('#count-down-timer-falso');
    const element = document.querySelector('#count-down-timer');

    const letras = document.querySelectorAll(".btn_letra");

    const nombres_encontrados = document.querySelector(".nombres_encontrados");

    const puntos = document.querySelector(".puntos");
    let acumulador = 0;

    letras.forEach((letra)=>{
        letra.classList.add("letras_deshabilitadas");
    });
        

    //Cuenta regresiva
    function paddedFormat(num) { return num < 10 ? "0" + num : num; }

    function startCountDown(duration, element) {

        let secondsRemaining = duration;
        let min = 0;
        let sec = 0;

        let countInterval = setInterval(function () {

            min = parseInt(secondsRemaining / 60);
            sec = parseInt(secondsRemaining % 60);

            element.textContent = `${paddedFormat(min)}:${paddedFormat(sec)}`;

            secondsRemaining = secondsRemaining - 1;

            if (secondsRemaining < 0) { clearInterval(countInterval) };

            //¿se acabó el tiempo?
            if(min == 0 && sec == 0){

                txt_jugar.innerText = "Se acabó el tiempo. Has perdido, inténtalo nuevamente T_T";

                count_down_timer_falso.classList.remove("d-none");
                element.classList.add("d-none");

                letras.forEach((letra)=>{
                    letra.classList.add("letras_deshabilitadas");
                });

                setTimeout(() => {
                    location. reload();
                }, 5000);
                        
                        
            }

        }, 1000);

    }

    function formatoConteo() {

        let time_minutes = 12; // Value in minutes
        let time_seconds = 0; // Value in seconds

        let duration = time_minutes * 60 + time_seconds;


        element.textContent = `${paddedFormat(time_minutes)}:${paddedFormat(time_seconds)}`;

        element.classList.remove('d-none');
        count_down_timer_falso.classList.add('d-none');

        startCountDown(--duration, element);
    };

    //Comenzar juego
    btn_jugar.addEventListener("click",()=>{

        btn_jugar.classList.remove("btn_jugar");
        btn_jugar.classList.add("btn_jugar_presionado");

        txt_jugar.innerText = "Buena Suerte :3";

        formatoConteo();

        letras.forEach((letra)=>{
            letra.classList.remove("letras_deshabilitadas");
        });

    });

    function obtenerPalabraCorrecta(letras){

        letras.forEach((letra)=>{
            letra.classList.remove("btn_letra_click");
            letra.classList.add("palabra_correcta");
        });

    }

    //Palabra 1
    const palabra1 = [letras[58],letras[75],letras[92],letras[109],letras[126]]; 

    const validarPalabra1 = ()=>{
        return letras[58].classList.contains("btn_letra_click") &&
        letras[75].classList.contains("btn_letra_click") &&
        letras[92].classList.contains("btn_letra_click") &&
        letras[109].classList.contains("btn_letra_click") &&
        letras[126].classList.contains("btn_letra_click");
    }

    //Palabra 2
    const palabra2 = [letras[162],letras[163],letras[164],letras[165],letras[166],letras[167],letras[168]];

    const validarPalabra2 = () =>{
        return letras[162].classList.contains("btn_letra_click") &&
        letras[163].classList.contains("btn_letra_click") &&
        letras[164].classList.contains("btn_letra_click") &&
        letras[166].classList.contains("btn_letra_click") &&
        letras[167].classList.contains("btn_letra_click") &&
        letras[168].classList.contains("btn_letra_click");
    }

    const letra_compartida1 = () =>{
        return letras[165].classList.contains("btn_letra_click") || letras[165].classList.contains("palabra_correcta");
    }

    //Palabra 3
    const palabra3 = [letras[181],letras[165],letras[149],letras[133],letras[117],letras[101]];

    const validarPalabra3 = () =>{
        return letras[181].classList.contains("btn_letra_click") &&
        letras[149].classList.contains("btn_letra_click") &&
        letras[133].classList.contains("btn_letra_click") &&
        letras[117].classList.contains("btn_letra_click") &&
        letras[101].classList.contains("btn_letra_click");
    }

    //Palabra 4
    const palabra4 = [letras[64],letras[48],letras[49],letras[50],letras[51],letras[52]];

    const validarPalabra4 = () =>{
        return letras[64].classList.contains("btn_letra_click") &&
        letras[48].classList.contains("btn_letra_click") &&
        letras[49].classList.contains("btn_letra_click") &&
        letras[50].classList.contains("btn_letra_click") &&
        letras[51].classList.contains("btn_letra_click") &&
        letras[52].classList.contains("btn_letra_click");
    }

    //Palabra 5
    const palabra5 = [letras[23],letras[39],letras[55],letras[71],letras[87],letras[103]];

    const validarPalabra5 = () =>{
        return letras[23].classList.contains("btn_letra_click") &&
        letras[39].classList.contains("btn_letra_click") &&
        letras[55].classList.contains("btn_letra_click") &&
        letras[71].classList.contains("btn_letra_click") &&
        letras[87].classList.contains("btn_letra_click");
    }

    //Palabra 6
    const palabra6 = [letras[12],letras[13],letras[14],letras[15],letras[31],letras[47],letras[63],letras[79],letras[95]];

    const validarPalabra6 = () =>{
        return letras[12].classList.contains("btn_letra_click") &&
        letras[13].classList.contains("btn_letra_click") &&
        letras[14].classList.contains("btn_letra_click") &&
        letras[15].classList.contains("btn_letra_click") &&
        letras[31].classList.contains("btn_letra_click") &&
        letras[47].classList.contains("btn_letra_click") &&
        letras[63].classList.contains("btn_letra_click") &&
        letras[79].classList.contains("btn_letra_click") &&
        letras[95].classList.contains("btn_letra_click");
    }

    const letra_compartida2 = () =>{
        return letras[103].classList.contains("btn_letra_click") || letras[103].classList.contains("palabra_correcta");
    }

    //Palabra 7
    const palabra7 = [letras[86],letras[103],letras[120],letras[137],letras[154],letras[171],letras[188],letras[205]];

    
    const validarPalabra7 = () =>{
        return letras[86].classList.contains("btn_letra_click") &&
        letras[120].classList.contains("btn_letra_click") &&
        letras[137].classList.contains("btn_letra_click") &&
        letras[154].classList.contains("btn_letra_click") &&
        letras[171].classList.contains("btn_letra_click") &&
        letras[188].classList.contains("btn_letra_click") &&
        letras[205].classList.contains("btn_letra_click");
    }

    //Generar letras restantes
    const  generarLetraRandom = () => {

        const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let result1= ' ';
        const charactersLength = characters.length;
        
        result1 = characters.charAt(Math.floor(Math.random() * charactersLength));
        
        return result1;
    }

    const compararLetras_palabra1 = (letra) =>{ 
        return letra != letras[58] && letra != letras[75] && letra != letras[92] && letra != letras[109] && letra != letras[126];
    }

    const compararLetras_palabra2 = (letra) =>{
        return letra != letras[162] && letra != letras[163] && letra != letras[164] && letra != letras[165] && letra != letras[166] &&
        letra != letras[167] && letra != letras[168];
    }

    const compararLetras_palabra3 = (letra) =>{
        return letra != letras[181] && letra != letras[149] && letra != letras[133] && letra != letras[117] && letra != letras[101];
    }

    const compararLetras_palabra4 = (letra) =>{
        return letra != letras[64] && letra != letras[48] && letra != letras[49] && letra != letras[50] && letra != letras[51] && letra != letras[52];
    }

    const compararLetras_palabra5 = (letra) =>{
        return letra != letras[23] && letra != letras[39] && letra != letras[55] && letra != letras[71] && letra != letras[87] && letra != letras[103];
    }

    const compararLetras_palabra6 = (letra) =>{
        return letra != letras[12] && letra != letras[13] && letra != letras[14] && letra != letras[15] && letra != letras[31] && letra != letras[47] && 
        letra != letras[63] && letra != letras[79] && letra != letras[95];
    }

    const compararLetras_palabra7 = (letra) =>{
        return letra != letras[86] && letra != letras[120] && letra != letras[137] && letra != letras[154] && letra != letras[171] && letra != letras[188] &&
        letra != letras[205];
    }

    letras.forEach((letra)=>{

        if(compararLetras_palabra1(letra) && compararLetras_palabra2(letra) && compararLetras_palabra3(letra) && compararLetras_palabra4(letra) && compararLetras_palabra5(letra) && compararLetras_palabra6(letra) && compararLetras_palabra7(letra)){

            letra.innerText = generarLetraRandom();

        }
    });

    
    //Juego ganado
    function juegoGanado(puntos){
        
        if(puntos == 7){
            
            txt_jugar.innerText = "Felicidades, has ganado. Gracias por jugar :D";

            count_down_timer_falso.classList.remove("d-none");
            element.classList.add("d-none");

            letras.forEach((letra)=>{
                letra.classList.add("letras_deshabilitadas");
            });

            setTimeout(() => {
                location. reload();
            }, 5000);
            
            
        }
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
            if(validarPalabra1()){

                obtenerPalabraCorrecta(palabra1);

                nombres_encontrados.innerHTML += '<li class="colorClaro"><strong>Sofía(Perezoso)</strong></li>';
                
                acumulador++;

                puntos.innerText = acumulador.toString();

                juegoGanado(acumulador);
                
            }

            //Obtener palabra 2
            if(letra_compartida1() && validarPalabra2()){

                obtenerPalabraCorrecta(palabra2);

                nombres_encontrados.innerHTML += '<li class="colorClaro"><strong>Antonia(Oso Panda)</strong></li>';
                
                acumulador++;

                puntos.innerText = acumulador.toString();

                juegoGanado(acumulador);
            }

            //Obtener palabra 3
            if(letra_compartida1() && validarPalabra3()){

                obtenerPalabraCorrecta(palabra3);

                nombres_encontrados.innerHTML += '<li class="colorClaro"><strong>Josefa(Husky Siberiano)</strong></li>';
                
                acumulador++;

                puntos.innerText = acumulador.toString();

                juegoGanado(acumulador);
            }

            //Obtener palabra 4
            if(validarPalabra4()){

                obtenerPalabraCorrecta(palabra4);

                nombres_encontrados.innerHTML += '<li class="colorClaro"><strong>Martín(Capibara)</strong></li>';
                
                acumulador++;

                puntos.innerText = acumulador.toString();

                juegoGanado(acumulador);
            }

            //Obtener palabra5
            if(letra_compartida2() && validarPalabra5()){
                obtenerPalabraCorrecta(palabra5);

                nombres_encontrados.innerHTML += '<li class="colorClaro"><strong>Isabel(Ardilla)</strong></li>';
                
                acumulador++;

                puntos.innerText = acumulador.toString();

                juegoGanado(acumulador);
            }

            //Obtener palabra6
            if(validarPalabra6()){

                obtenerPalabraCorrecta(palabra6);

                nombres_encontrados.innerHTML += '<li class="colorClaro"><strong>Cristóbal(León)</strong></li>';
                
                acumulador++;

                puntos.innerText = acumulador.toString();

                juegoGanado(acumulador);
            }

            //Obtener palabra7
            if(validarPalabra7()){
                obtenerPalabraCorrecta(palabra7);

                nombres_encontrados.innerHTML += '<li class="colorClaro"><strong>Allisson(Hámster)</strong></li>';
                
                acumulador++;

                puntos.innerText = acumulador.toString();

                juegoGanado(acumulador);
            }
        
        });

    });

});