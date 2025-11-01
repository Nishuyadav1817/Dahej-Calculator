const calcu=document.getElementById('btn1');

calcu.addEventListener('click' ,()=>{
       condition();
})

const select=function(){


    let age = parseInt(document.getElementById("age").value) || 0;
    let caste = document.getElementById("caste").value;
    let profession = document.getElementById("profession").value;
    let salary = parseInt(document.getElementById("salary").value) || 0;
    let property = document.getElementById("property").value;

}

const condition=function(){

    let age = parseInt(document.getElementById("age").value) || 0;
    let caste = document.getElementById("caste").value;
    let profession = document.getElementById("profession").value;
    let salary = parseInt(document.getElementById("salary").value) || 0;
    let property = document.getElementById("property").value;


    let dowry = 0;


    if (age >= 18 && age <= 25) dowry += 500000;
    else if (age >= 26 && age <= 30) dowry += 300000;
    else dowry += 100000;


    if (caste === "General") dowry += 200000;
    else if (caste === "OBC") dowry += 150000;
    else dowry += 100000;


    if (profession === "government_job") dowry += 1000000; 
    else if (profession === "doctor") dowry += 800000;
    else if (profession === "engineer") dowry += 500000;
    else if (profession === "business") dowry += 400000;
    else if (profession === "private_job") dowry += 300000;
    else if (profession === "farmer") dowry += 200000;
    else if (profession === "teacher") dowry += 250000;
    else if (profession === "berojaagar") dowry -= 200000; 


    if (salary >= 100000) dowry += 1000000;
    else if (salary >= 50000) dowry += 700000;
    else if (salary >= 30000) dowry += 500000;
    else if (salary >= 20000) dowry += 300000;
    else if (salary >= 10000) dowry += 200000;
    else if (salary == 0) dowry -= 200000; 

    if (property === "multiple_properties") dowry += 1000000;
    else if (property === "shop") dowry += 700000;
    else if (property === "flat") dowry += 500000;
    else if (property === "house") dowry += 400000;
    else if (property === "land") dowry += 300000;
    else if (property === "no_property") dowry -= 200000;
     
    if(age===30 && caste=="General"|| caste==="OBC" && profession === "berojaagar" && property === "no_property" && salary == 0)
      dowry="Sadi nahi hoga tera";
    if (dowry < 0) dowry = 0;

    document.getElementById("aa").innerText = dowry;
}

const reset=document.getElementById("btn");
reset.addEventListener('click',()=>{
    select();
    age.value="";
    caste.value="";
    profession.value="";
    property.value="";
    salary.value="";
    document.getElementById("aa").innerText = "";
})
