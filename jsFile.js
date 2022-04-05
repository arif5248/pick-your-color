const colors=['Violet', 'Indigo','Blue','Green','Yellow','Orange','Red'];
const sectionContent=document.querySelector('section');
const h1=document.querySelector('h1');
const selectedColor= document.querySelector('#selectedColor');

for(let i of colors){
    const box = document.createElement('div');
    box.classList.add('box');
    sectionContent.appendChild(box);
    box.style.backgroundColor=i;

    box.addEventListener('click', function(){
        h1.innerText='You have selected: ';
        selectedColor.innerText=i;
        selectedColor.style.backgroundColor=i;
    });
}