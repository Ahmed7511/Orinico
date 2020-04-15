var p1 = document.getElementByClassName('box1');
p1.addEventListener('click',message1);
p1.addEventListener('click',message2);

function message1(){
    this.innerHTML = 'salut';
}
 
function message2(){
    alert('message2');
}