const panels = document.querySelectorAll('.panel');

function addWords(){
    this.classList.toggle('open');
}

function bringTransition(e){
    console.log(e.propertyName);
    if(e.propertyName == 'flex-grow'){
        this.classList.toggle('open-active');
    }
}
 panels.forEach((panel) => panel.addEventListener('click',addWords));
 panels.forEach((panel) => panel.addEventListener('transitionend' ,bringTransition));