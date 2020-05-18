var memoria="";
var pantalla=document.getElementById("resultado");
var proceso=[];
var resultado;
function input1(){ 
        memoria=memoria + "1";   
        pantalla.innerHTML = memoria;            
}

function input2(){
       memoria=memoria + "2";   
        pantalla.innerHTML = memoria;   
}

function input3(){
       memoria=memoria + "3";   
        pantalla.innerHTML = memoria;     
}

function input4(){ 
        memoria=memoria + "4";   
        pantalla.innerHTML = memoria;            
}

function input5(){
       memoria=memoria + "5";   
        pantalla.innerHTML = memoria;   
}

function input6(){
       memoria=memoria + "6";   
        pantalla.innerHTML = memoria;     
}

function input7(){ 
        memoria=memoria + "7";   
        pantalla.innerHTML = memoria;            
}

function input8(){
       memoria=memoria + "8";   
        pantalla.innerHTML = memoria;   
}

function input9(){
       memoria=memoria + "9";   
        pantalla.innerHTML = memoria;     
}

function inputDiv(){
        memoria=memoria + "/";   
        pantalla.innerHTML = memoria; 
}

function inputMul(){
        memoria=memoria + "*";   
        pantalla.innerHTML = memoria; 
}
function inputRes(){
        memoria=memoria + "-";   
        pantalla.innerHTML = memoria; 
}
function inputSum(){
        memoria=memoria + "+";   
        pantalla.innerHTML = memoria; 
}
function input0(){
        memoria=memoria + "0";   
        pantalla.innerHTML = memoria; 
}
function inputResul(){
  /*  if(memoria.includes("/")===true){
        proceso=memoria.split("/");
        resultado= parseInt(proceso[0])/parseInt(proceso[1]);
        memoria="";
        pantalla.innerHTML = resultado; 
    }
    else if(memoria.includes("*")===true){
        proceso=memoria.split("*");
        resultado= parseInt(proceso[0])*parseInt(proceso[1]);
        memoria="";
        pantalla.innerHTML = resultado; 
    }
     else if(memoria.includes("-")===true){
        proceso=memoria.split("-");
        resultado= parseInt(proceso[0])-parseInt(proceso[1]);
        memoria="";
        pantalla.innerHTML = resultado; 
    }
     else if(memoria.includes("+")===true){
        proceso=memoria.split("+");
        resultado= parseInt(proceso[0])+parseInt(proceso[1]);
        memoria="";
        pantalla.innerHTML = resultado; 
    }
      */
    pantalla.innerHTML = eval(memoria);
    memoria=eval(memoria);
        
}
function inputC(){
        memoria="";   
        pantalla.innerHTML = memoria; 
}

