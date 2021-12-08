var plus = document.getElementById("plus");
var pplus = document.getElementById("pplus");
var lplus = document.getElementById("lplus");
var oplus = document.getElementById("oplus");
var hplus = document.getElementById("hplus");
var aplus = document.getElementById("aplus");
var tplus = document.getElementById("tplus");
var bplus = document.getElementById("bplus");
var auplus = document.getElementById("auplus");
var fplus=document.getElementById("fplus");

var campus = document.getElementById("campus");
campus.addEventListener("click", campusfunc);


var product=document.getElementById("product");
product.addEventListener("click", productfunc);

var learning= document.getElementById("learning");
learning.addEventListener("click",learningfunc);

var online=document.getElementById("online");
online.addEventListener("click",onlinefunc);

var homea=document.getElementById("homea");
homea.addEventListener("click",homeafunc);

var al=document.getElementById("al");
al.addEventListener("click",alfunc);

var biometric=document.getElementById("biometric");
biometric.addEventListener("click",biometricfunc);

var touch=document.getElementById("touch");
touch.addEventListener("click",touchfunc);

var automated=document.getElementById("automated");
automated.addEventListener("click",automatedfunc);

var food=document.getElementById("food");
food.addEventListener("click",foodfunc);

function campusfunc(e) {
    e.preventDefault();
    // console.log("king is here....");
  
    var createElement = document.createElement("p");
 var createTextNode=document.createTextNode("I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.");
 createElement.appendChild(createTextNode);
 createElement.className="para1";
 var para1=document.querySelector(".para1");
 if(campus.className== "open"){
    
      // shrink the box
      campus.className=" ";
      plus.innerHTML="+";
     para1.remove();
  }else{
      // expand the box
      campus.className="open";

      plus.innerHTML="-";
      campus.appendChild(createElement);
  }

}

function productfunc(e) {
    e.preventDefault();
    // console.log("king is here....");
  
    var createElement = document.createElement("p");
 var createTextNode=document.createTextNode("I am item content.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.");
 createElement.appendChild(createTextNode);
 createElement.className="para2";
 var para2=document.querySelector(".para2");
 if(product.className== "open"){
    
      // shrink the box
      product.className=" ";
      pplus.innerHTML="+";
     para2.remove();
  }else{
      // expand the box
      product.className="open";

      pplus.innerHTML="-";
      product.appendChild(createElement);
  }

}

function learningfunc(e) {
    e.preventDefault();
    // console.log("king is here....");
  
    var createElement = document.createElement("p");
 var createTextNode=document.createTextNode("I am item content.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.");
 createElement.appendChild(createTextNode);
 createElement.className="para3";
 var para3=document.querySelector(".para3");
 if(learning.className== "open"){
    
      // shrink the box
      learning.className=" ";
      lplus.innerHTML="+";
     para3.remove();
  }else{
      // expand the box
      learning.className="open";

      lplus.innerHTML="-";
      learning.appendChild(createElement);
  }

}
function onlinefunc(e) {
    e.preventDefault();
    // console.log("king is here....");
  
    var createElement = document.createElement("p");
 var createTextNode=document.createTextNode("Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.");
 createElement.appendChild(createTextNode);
 createElement.className="para4";
 var para4=document.querySelector(".para4");
 if(online.className== "open"){
    
      // shrink the box
      online.className=" ";
      oplus.innerHTML="+";
     para4.remove();
  }else{
      // expand the box
      online.className="open";

      oplus.innerHTML="-";
      online.appendChild(createElement);
  }

}
function homeafunc(e) {
    e.preventDefault();
    // console.log("king is here....");
  
    var createElement = document.createElement("p");
 var createTextNode=document.createTextNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.");
 createElement.appendChild(createTextNode);
 createElement.className="para5";
 var para5=document.querySelector(".para5");
 if(homea.className== "open"){
    
      // shrink the box
      homea.className=" ";
      hplus.innerHTML="+";
     para5.remove();
  }else{
      // expand the box
      homea.className="open";

      hplus.innerHTML="-";
      homea.appendChild(createElement);
  }

}

function alfunc(e) {
    e.preventDefault();
    // console.log("king is here....");
  
    var createElement = document.createElement("p");
 var createTextNode=document.createTextNode(" button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.");
 createElement.appendChild(createTextNode);
 createElement.className="para6";
 var para6=document.querySelector(".para6");
 if(al.className== "open"){
    
      // shrink the box
      al.className=" ";
      aplus.innerHTML="+";
     para6.remove();
  }else{
      // expand the box
      al.className="open";

      aplus.innerHTML="-";
      al.appendChild(createElement);
  }

}

function biometricfunc(e) {
    e.preventDefault();
    // console.log("king is here....");
  
    var createElement = document.createElement("p");
 var createTextNode=document.createTextNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.");
 createElement.appendChild(createTextNode);
 createElement.className="para7";
 var para7=document.querySelector(".para7");
 if(biometric.className== "open"){
    
      // shrink the box
      biometric.className=" ";
      bplus.innerHTML="+";
     para7.remove();
  }else{
      // expand the box
      biometric.className="open";

      bplus.innerHTML="-";
      biometric.appendChild(createElement);
  }

}

function touchfunc(e) {
    e.preventDefault();
    // console.log("king is here....");
  
    var createElement = document.createElement("p");
 var createTextNode=document.createTextNode("I am item content. dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.");
 createElement.appendChild(createTextNode);
 createElement.className="para8";
 var para8=document.querySelector(".para8");
 if(touch.className== "open"){
    
      // shrink the box
     touch.className=" ";
      tplus.innerHTML="+";
     para8.remove();
  }else{
      // expand the box
     touch.className="open";

      tplus.innerHTML="-";
     touch.appendChild(createElement);
  }

}

function automatedfunc(e) {
    e.preventDefault();
    // console.log("king is here....");
  
    var createElement = document.createElement("p");
 var createTextNode=document.createTextNode(" dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.");
 createElement.appendChild(createTextNode);
 createElement.className="para9";
 var para9=document.querySelector(".para9");
 if(automated.className== "open"){
    
      // shrink the box
     automated.className=" ";
      auplus.innerHTML="+";
     para9.remove();
  }else{
      // expand the box
     automated.className="open";

      auplus.innerHTML="-";
     automated.appendChild(createElement);
  }

}

function foodfunc(e) {
    e.preventDefault();
    // console.log("king is here....");
  
    var createElement = document.createElement("p");
 var createTextNode=document.createTextNode("I am lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.");
 createElement.appendChild(createTextNode);
 createElement.className="para10";
 var para10=document.querySelector(".para10");
 if(food.className== "open"){
    
      // shrink the box
     food.className=" ";
      fplus.innerHTML="+";
     para10.remove();
  }else{
      // expand the box
     food.className="open";

      fplus.innerHTML="-";
     food.appendChild(createElement);
  }

}


