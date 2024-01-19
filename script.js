var calculator=document.getElementById('calculate');
function calculator_btn(){
    var bill= (document.getElementById('billamount').value);
    var service=document.getElementById('service').value;
    var number_of_person=document.getElementById('numberofperson').value;
    
    if( bill==='' || service==="" || number_of_person==="")
    {
        
     calculator_btn.disabled=true;
     alert("EROR!! Fill blank box");
    return;
    }
     else if(number_of_person<"0"|| bill<"0" || service<"0"){
            alert("negetive value not accepted");
    
            return;
        
    } 
    else if( bill==="0" || service==="0" || number_of_person==="0"){
        
        alert(" 0 is not accepted, enter valid number");
        return;
    }
   

    else{
    
           service=service/100;  
    let total=(bill*service)/number_of_person;
         total=total.toFixed(2);
         billwithtip=parseFloat(document.getElementById('billamount').value)+ parseFloat(bill*service);
    document.getElementById('tipamount').innerHTML=total;
        document.getElementById('billwithtip').innerText=billwithtip;              
        
};

};
    calculator.onclick=function(){
        calculator_btn();
    
    };

function reset(){
    document.getElementById('tipamount').innerHTML="";
document.getElementById('billwithtip').innerText="";
document.getElementById('billamount').value="";
document.getElementById('service').value="";
document.getElementById('numberofperson').value="";
};

    
   