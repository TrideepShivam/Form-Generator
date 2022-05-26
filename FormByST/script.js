function getNotification(t){
    let m="Use only letter "+t.value.charAt(t.value.length-1);
    
if (/^[a-zA-Z ]+$/.test(t.value.charAt(t.value.length-1))||t.value=="") {
   
} else {
    notifyMe(m,'red');
    
     t.value=t.value.slice(0,t.value.length-1);
}   
}




function advanceOpener(addvance){
    let detailDiv= addvance.previousElementSibling;
        detailDiv.style.cssText="height:8%;top:2%;";
        detailDiv.children[detailDiv.children.length-1].style.cssText="display:block;filter:opacity(1);";
        addvance.children[addvance.children.length-1].style.cssText="display:none;filter:opacity(0);";
        addvance.style.cssText="height:71.5%;border-color:transparent;background-color:transparent;";
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

function elelistopener(mainwala){
    let ele=mainwala.nextElementSibling;
    if(ele.children[1].style.margin=="0.4vw"||ele.children[1].style.margin==""){
         ele.style.cssText="filter:opacity(1);height:auto;";
         let options=[];
         for(let i=0;i<ele.children.length;i++){
             options[i]=ele.children[i];
             options[i].addEventListener('click',function(){
                elelistcloser(ele);});
         }
         for(let j=0;j<=ele.children.length;j++){
            setTimeout(function(){
                options[j].style.cssText="margin:0vw;filter:opacity(1);";
            },j*30);
         }
    } else{
        elelistcloser(ele);
    }
}
function elelistcloser(tager){    /*tager is elementList id's element*/
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