function guardarInfo(){
    window.location.href='../HTML\'S_FOLDER/HTML-1/index.html'            
}

document.addEventListener("DOMContentLoaded", ()=>{    
    let verifyHtml;
    let verifyCss;
    let verifyJs;
    let candadoHtml;
    let islaCss;
    let candadoCss;
    let islaJs;
    let verifyAnimationCss;
    let verifyAnimationJs;
    connect2ServerAndWait(async()=>
        {        
            // Callback a ejecutar cuando termina el connect2ServerAndWait
            verifyHtml = await obtenerNivelHtmlAlcanzado() == 22;
            verifyCss = await obtenerNivelCssAlcanzado() == 22;
            verifyJs = await obtenerNivelJsAlcanzado() == 30;
            candadoHtml = document.getElementById('candadoCss');
            islaCss = document.getElementById('islaCss');
            candadoCss = document.getElementById('candadoJs');
            islaJs = document.getElementById('islaJs');
            verifyAnimationCss = await obtenerAnimacionFinished("Css");
            verifyAnimationJs = await obtenerAnimacionFinished("Js");                        

            console.log("verifyHtml = " + verifyHtml);

            console.log("verifyCss = " + verifyCss);
            console.log("verifyJs = " + verifyJs);
            console.log("verifyAnimationCss = " + verifyAnimationCss);
            console.log("verifyAnimationJs = " + verifyAnimationJs);
            
            if(verifyHtml){
                islaCss.addEventListener('click', ()=>{
                window.location.href = "../CSS'S_FOLDER/CSS-1/index.html";                 
            })
            islaCss.style.cursor = 'pointer';
            islaCss.classList.add('islaC');
            candadoHtml.style.marginTop = "200vh";
        
            if (verifyCss) {
                islaJs.addEventListener('click', () => { 
                    window.location.href = "../JS'S_FOLDER/JS-1/index.html";             
                });
                islaJs.style.cursor = 'pointer';
                islaJs.classList.add('islaJ');
                candadoCss.style.marginTop = "200vh";
            }     
            if(verifyHtml && verifyCss) 
            {
                if (!verifyAnimationJs)
                {
                    candadoCss.classList.add('romperCandadoJs')
                    islaJs.style.cursor = 'pointer';
                    islaJs.classList.add('islaJ');
                    setTimeout(() => {
                        modificarAnimacionFinished("Js",1);
                    }, 7000);
                }
                else
                {
                    candadoCss.classList.add('mantener');
                    islaJs.style.cursor = 'pointer';
                    islaJs.classList.add('islaJ');
                }
            } 
            else if(verifyHtml){                        
                if (!verifyAnimationCss)
                {
                    candadoHtml.classList.add('romperCandadoCss');
                    islaCss.style.cursor = 'pointer';
                    islaCss.classList.add('islaC');
                    setTimeout(() => {
                        modificarAnimacionFinished("Css",1);
                    }, 7000);
                }
                else
                {
                    candadoHtml.classList.add('mantener')
                    islaCss.style.cursor = 'pointer';
                    islaCss.classList.add('islaC')
                }
            } 
            
            else if(verifyHtml){
                candadoHtml.classList.add('mantener')
                islaCss.style.cursor = 'pointer';
                islaCss.classList.add('islaC')
            } else if(verifyCss){
                candadoCss.classList.add('mantener')
                islaJs.style.cursor = 'pointer';
                islaJs.classList.add('islaJ')
            } if(verifyHtml && verifyCss && verifyJs && !verifyAnimationJs ){
                const modal = document.getElementById("myModal");
                const span = document.getElementsByClassName("close")[0];
                modal.style.display = "block";

                span.onclick = function() {
                    modal.style.display = "none";
                    modificarAnimacionFinished("Js", 1);
                }

                window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                    modificarAnimacionFinished("Js", 1);
                    }
                }
            }
    
        }
    });
});