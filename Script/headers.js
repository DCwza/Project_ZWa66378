let div_counter = 0;

function generateHeader1(){
    let letters = ['\t','T','r','i','p','\t', 't','o','\t','O','l','y','m','p','i','c','\t','N','a','t','i','o','n','a','l','\t','P','a','r','k','\t'];
    let h1 = document.querySelector("h1");
    style(letters, h1);
}
function generateHeader2(){
    let letters = ['\t','T','h','e','\t', 'S','c','e','n','e','s','\t','\t', 'I','\t','h','a','v','e','\t', 'V','i','s','i','t','e','d','\t'];
    let h1 = document.querySelector("h1");
    style(letters, h1);
}
function generateHeader3(){
    let letters = ['\t','W','e','l','c','o','m','e','\t', 't','o','\t', 'M','y','\t', 'L','o','g','\t', 'B','o','o','k','\t'];
    let h1 = document.querySelector("h1");
    style(letters, h1);
}

function style(letters, h1){

    let i=0;
    for(let char of letters){
        let div = document.createElement('div');
        div.innerText = char;
        h1.append(div);
        div.id=("div_"+i);
       i++;
    }
    styleDiv();
  
    myInterval = setInterval(changeColor, 100);
}   

function changeColor(){
  
        let divs = document.querySelectorAll("div[id^='div_']");
       
        let color2 = 'yellow';

        for(let i=0; i<divs.length; i++){
            if(i==div_counter){
                divs[i].style.backgroundColor = color2;
            }
            else{
                divs[i].style.backgroundColor = null;
            }
        }
      
        div_counter++;
        if(div_counter >= divs.length)
            div_counter=0;
    }

function styleDiv(){
    let divs = document.querySelectorAll("h1>div");

    divs.forEach(div => div.style.flex = '1 1 2%');
    divs.forEach(div => div.style.borderTopRightRadius = '50px');
   
}