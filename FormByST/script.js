function getNotification(t){
    let m="Use only letter "+t.value.charAt(t.value.length-1);
if (/^[a-zA-Z ]+$/.test(t.value.charAt(t.value.length-1))||t.value=="") {
} else {
    notifyMe(m,'red');    
     t.value=t.value.slice(0,t.value.length-1);
}   
}
function changeTextToDate(a){
    a.type="date";
}

function advanceOpener(addvance){
    let detailDiv= addvance.previousElementSibling;
        detailDiv.style.cssText="height:8%;top:2%;";
        detailDiv.children[detailDiv.children.length-1].style.cssText="display:block;filter:opacity(1);";
        addvance.children[addvance.children.length-1].style.cssText="display:none;filter:opacity(0);";
        addvance.style.cssText="height:71.5%;border-color:transparent;background-color:transparent;cursor:default;";
        for(i=0;i<detailDiv.children.length-1;i++){
            detailDiv.children[i].style="filter:opacity(0)";
            if(i>=0&&i<addvance.children.length-1){
                addvance.children[i].style="display:inline-block;";
            }
        }
        setTimeout(function(){
            for(i=0;i<10;i++)
                detailDiv.childNodes[1].style="display:none";
        },400);	
}
function detailOpener(detailDiv){
    let add=detailDiv.nextElementSibling;
        detailDiv.style.cssText="height:64%;top:4%;";
        add.style.cssText="height:6%;background-color:transparent;";
        detailDiv.children[detailDiv.children.length-1].style.cssText="display:none;filter:opacity(0);";
        
        for(i=0;i<add.children.length;i++){
        if(i!=5)
        add.children[i].style.filter="opacity(0)";
    }
        for(i=0;i<detailDiv.children.length-1;i++)
            detailDiv.children[i].style="display:flex;filter:opacity(0);";
            setTimeout(function(){
                for(j=0;j<detailDiv.children.length-1;j++)
                detailDiv.children[j].style="filter:opacity(1);";
            },80);
            setTimeout(function(){
                add.style.cssText="background-color:#46ea8d;border-color:#46ea8d;";
                add.children[5].style.cssText="display:inline-block;filter:opacity(1);";
                for(i=0;i<add.children.length;i++)
                    if(i!=5)
                    add.children[i].style.display="none";
                },330);
                
}
 function forPopupOpen() {addElementPopup(this.innerHTML);}

function elelistopener(mainDiv){
    let ele=mainDiv.nextElementSibling;
    if(ele.children[1].style.margin=="0.4vw"||ele.children[1].style.margin==""){
         ele.style.cssText="filter:opacity(1);height:auto;";
         for(let i=0;i<ele.children.length;i++){
            ele.children[i].style.display="block";
             ele.children[i].addEventListener('click',function(){
                elelistcloser(ele);
            });
         }
         for(let l=0;l<ele.children.length;l++){
             if(l!=4)
         ele.children[l].addEventListener('click',forPopupOpen);
         }
         for(let j=0;j<=ele.children.length;j++){
            setTimeout(function(){
                 ele.children[j].style.filter="opacity(1)";
                 ele.children[j].style.margin="0vw";
            },j*30);
         }
    } else{
        elelistcloser(ele);
    }
}
function elelistcloser(tager){    /*tager is elementList id's element*/
    tager.style.cssText="bottom:5vw;filter:opacity(0);";
    for(let i=0;i<tager.children.length;i++){
    tager.children[i].style.filter="opacity(0)";
    tager.children[i].style.margin="0vw";
}
        setTimeout(function(){
            tager.style.cssText="height:0%;";
            for(let j=0;j<tager.children.length;j++){
                tager.children[j].style.margin=".4vw";
                tager.children[j].style.display="none";
            }
        },200);
}
function deleteinput(){
    delHistoryEle(this.parentElement);
}
const updateNumEle={
    textbox:0,radio:0,range:0,
    updigit:function(a){
        switch (a) {
        case 'textbox':
            this.textbox+=1;
             return this.textbox; 
        case 'radio': 
        this.radio+=1;
             return this.radio; 
         case 'range': 
         this.range+=1;
              return this.range;
        default:
            break;
        }
    } 
};
const inputObj=[];

function addHistoryEle(eleDetail={input:'radio',max:20,min:10,label:'firstname'}){
    let count=0;
    let historydiv=document.getElementById('historyPanel');
    let divele=document.createElement('div');
    deleteSpan=document.createElement('span');
    deleteSpan.addEventListener('click',deleteinput);
    deleteSpan.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z"/></svg>';
    divele.appendChild(deleteSpan);
    count=updateNumEle.updigit(eleDetail.input);
    labels=document.createTextNode(eleDetail.input+'-'+count);
    paragrph=document.createElement('p');
    paragrph.appendChild(labels);
    divele.appendChild(paragrph);
    historydiv.appendChild(divele);
    inputObj.push(eleDetail);
}
function delHistoryEle(parentDiv){
    alert(parentDiv.children[1].innerHTML);
    parentDiv.remove();
}
