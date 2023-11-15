import {img} from "./img.js"
const parent=document.querySelector(".parent")
const nuqta=document.querySelector(".nuqta")
const p =document.querySelector(".p")
const dispey =()=>{
    img.forEach(v => {
        const img =document.createElement("img");
        const dot=document.createElement("span")
   img.setAttribute("src",v.src);
   img.setAttribute("alt",v.id)
   if(v.id===1){
    img.setAttribute("class","active")
    dot.setAttribute("class","rang")
}

   parent.append(img)
   nuqta.append(dot)
    });
}
dispey()
// console.log(img);

const imgg=document.querySelectorAll('img')
const creatdots=document.querySelectorAll("span")
const btns1 =document.querySelector(`#g1`)
const btns2 =document.querySelector(`#g2`)
btns2.onclick=()=>{
    for(let i=0;i<imgg.length;i++){
        if(imgg[i].getAttribute("class")==="active"){
            imgg[i].removeAttribute("class");
            creatdots[i].removeAttribute("class")
            if(i=== imgg.length-1){
                imgg[0].setAttribute("class","active");
                creatdots[0].setAttribute("class","rang");
            }else {
                imgg[i+1].setAttribute("class","active")
                creatdots[i+1].setAttribute("class","rang")
            }
            break;
        }
    }
}
btns1.onclick=()=>{
    for(let i=0;i<imgg.length;i++){
        if(imgg[i].getAttribute("class")==="active"){
            imgg[i].removeAttribute("class");
            creatdots[i].removeAttribute("class")
            if(i== 0){
                imgg[imgg.length-1].setAttribute("class","active");
                creatdots[imgg.length-1].setAttribute("class","rang");
            }else {
                imgg[i-1].setAttribute("class","active")
                creatdots[i-1].setAttribute("class","rang")
            }
            break;
        }
    }
}
