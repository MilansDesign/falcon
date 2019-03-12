// Slider

var slider1=document.getElementById("slider-budget");
    var val1=document.getElementById("value-budget");
    val1.innerHTML="$" + slider1.value;
    slider1.oninput=function(){
        val1.innerHTML="$" + this.value;
    }
    var slider2=document.getElementById("slider-deadline");
    var val2=document.getElementById("value-deadline");
    val2.innerHTML=slider2.value + " months";
    slider2.oninput=function(){
        val2.innerHTML=this.value + " months";
        if(this.value == 12){
            val2.innerHTML="Not sure";
        }
        if(this.value == 1){
            val2.innerHTML=this.value + " month";
        }
    }


const toggler = ()=>{
    const button = document.querySelector('#toggle');
    const talkProject = document.querySelector('.talk-project');
    const sayHi = document.querySelector('.say-hi');
    const element3 = document.querySelector('#element-3');
    const element4 = document.querySelector('#element-4');
    const element5 = document.querySelector('#element-5');
    const form = document.querySelector('#contact-form');
    const readonly = document.querySelector('#element-2-input');

    button.addEventListener('click', () => {
        talkProject.classList.toggle('current');
        sayHi.classList.toggle('current');
        button.classList.toggle('toggle-b');
        element3.classList.toggle('erase');
        element4.classList.toggle('erase');
        element5.classList.toggle('erase');
        form.classList.toggle('form-small');
        form.classList.toggle('form-big');
        readonly.toggleAttribute("readonly");
    });
} 
toggler();
