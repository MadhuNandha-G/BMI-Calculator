function func()
{
    let height=document.getElementById('height').value;
    let weight=document.getElementById('weight').value;
    let age=document.getElementById('age').value;
    if(height===""||weight===""||age==="")
    {
        alert("Enter Detils");
    }
    else{
    let meter=height/100;
    let mul=(meter*meter);
    let res=weight/mul;
    let result=res.toFixed(1);
    document.getElementById('p').innerText=result;
    if(result<18.5)
    {
        document.getElementById('a').innerText="Under Weight";
    }
    else if(result>=18.5 && result<=24.9)
    {
        document.getElementById('a').innerText="Normal Weight";
    }
    else if(result>=25 && result<=29.9)
    {
        document.getElementById('a').innerText="Over Weight";
    }
    else if(result>=30 && result<=35)
    {
        document.getElementById('a').innerText="Obese";
    }
    else if(result>35){
        document.getElementById('a').innerText="Morbid Obesity";
    }
}
}
function isIn(event)
{
    let ch=String.fromCharCode(event.which);
    if(!(/[0-9]/.test(ch)))
    {
        event.preventDefault();
    }
}
function clr()
{
    let gen=document.getElementById('male');
    let gen2=document.getElementById('female');
    gen.checked=false;
    gen2.checked=false;
    let age=document.getElementById('age').value="";
    let height=document.getElementById('height').value="";
    let weight=document.getElementById('weight').value="";
    document.getElementById('p').innerText="";
    document.getElementById('a').innerText="";
}