function getNotification(t){
    let m="selected button is "+t.value;
    notifyMe(m,'#46ae8d');
}

function resizeBox(){
    let detailDiv= document.getElementById("detailBox");
    let addvance=document.getElementById("advanceBox");
        detailDiv.style.cssText="height:8%;top:2%;";
        detailDiv.childNodes[11].style.cssText="display:block;filter:opacity(1);";
        addvance.children[4].style.cssText="display:none;filter:opacity(0);";
        addvance.style.cssText="height:71.5%;border-color:transparent;background-color:transparent;";
        for(i=0;i<10;i++){
            detailDiv.childNodes[i].style="filter:opacity(0)";
            if(i>0&&i<9){
            addvance.childNodes[i].style="display:inline-block;";
        }
            }
        setTimeout(function(){
            for(i=0;i<10;i++)
                detailDiv.childNodes[1].style="display:none";
        },400);	
}
function detailopener(){
    let add=document.getElementById("advanceBox");
    let detailDiv= document.getElementById("detailBox");
        detailDiv.style.cssText="height:64%;top:4%;";
        add.style.cssText="height:6%;background-color:transparent;";
        detailDiv.childNodes[11].style.cssText="display:none;filter:opacity(0);";
        
        for(i=0;i<add.children.length;i++){
        if(i!=4)
        add.children[i].style.filter="opacity(0)";
    }
        for(i=0;i<10;i++)
            detailDiv.childNodes[i].style="display:flex;filter:opacity(0);";
            setTimeout(function(){
                for(j=0;j<10;j++)
                detailDiv.childNodes[j].style="filter:opacity(1);";
            },80);
            setTimeout(function(){
                add.style.cssText="background-color:#46ea8d;border-color:#46ea8d;";
                add.children[4].style.cssText="display:inline-block;filter:opacity(1);";
            for(i=0;i<add.children.length;i++)
                if(i!=4)
                add.children[i].style.display="none";
                },330);
                
}

function elelistopener(){
    let ele=document.getElementById("elementList");
    if(ele.style.height=="0%"){
    let options=[];
    for(let i=0;i<ele.children.length;i++){
    options[i]=ele.children[i];
    options[i].addEventListener("click",elelistcloser);
   }
    ele.style.cssText="filter:opacity(1);height:40%;";
    for(let j=1;j<=ele.children.length;j++){
        setTimeout(function(){
            options[j-1].style.cssText="margin:0vw;filter:opacity(1);";
        },j*30);
    }
} else{
    elelistcloser();

}
}
function elelistcloser(){
    let tager=document.getElementById("elementList");
    tager.style.cssText="bottom:5vw;filter:opacity(0);";
    for(let i=0;i<tager.children.length;i++)
    tager.children[i].style.cssText="filter:opacity(0);margin:0vw;";
        setTimeout(function(){
            tager.style.cssText="height:0%;";
            for(let j=0;j<tager.children.length;j++){
                tager.children[j].style.cssText="margin:.4vw;";
            }
        },500);
}