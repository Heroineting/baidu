function getList(){
  var list=[];
  var listArea=document.getElementById("listArea");
  var liElems=listArea.children;
  for(var i=0,len=liElems.length;i<len;i++){
    list.push(liElems[i].innerHTML);
  }
  return list;
}

function renderList(list){
  var listArea=document.getElementById("listArea");
  var listStr="";
  list.forEach((item)=>{
    listStr+="<li>"+item+"</li>"
  });
  listArea.innerHTML=listStr;
}

function init(){
  var inputArea=document.getElementById("inputArea");
  var inputDiv=document.getElementById("inputDiv");
  var listArea=document.getElementById("listArea");
  inputArea.focus();
  inputDiv.addEventListener("click",function(e){
    var list=getList();
    var elem=e.target;
    var inputValue=inputArea.value;
    if(elem.tagName.toLowerCase()==="button"){
      switch(elem.id){
        case "leftEnter":if(inputValue){ list.unshift(inputValue); inputArea.value=""; } break;
        case "leftExit":list.shift();break;
        case "rightEnter":if(inputValue){ list.push(inputValue); inputArea.value=""; }  break;
        case "rightExit":list.pop();break;
      }
      renderList(list);
    }
  })
  listArea.addEventListener("click",function(e){
    var elem=e.target;
    if(elem.tagName.toLowerCase()==="li"){
      listArea.removeChild(elem);
    }
  })
}

window.onload=init;
