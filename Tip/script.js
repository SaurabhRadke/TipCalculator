const reset=document.getElementById('res');
const numb=document.getElementById('valuess1')
const numbb=document.getElementById('valuess2')
const Fname=document.getElementById('fname')
const Fnamee=document.getElementById('fname1')

Fname.value=0;
Fnamee.val=1;
reset.addEventListener('click',()=>{
    numb.innerText="$00.00";
    numbb.innerText="$00.00";
    console.log("efvsdc")
    console.log(typeof(Fname.value))
    Fname.value=0;
    Fnamee.val=1;
})
const ff=document.querySelectorAll('#butper')
Array.from(ff).forEach((le)=>{
    le.addEventListener('click',gettipPer)
})

Fname.addEventListener('input',getbillamount)
Fnamee.addEventListener('input',getNopeople)
function gettipPer(event){
    ff.forEach(function (val){
        val.classList.remove('selected')
        if (event.target.innerHTML==val.innerHTML){
            val.classList.add("selected")
            tipp=parseFloat(val.innerText)/100
            console.log(tipp)
            ans=tipp*(Fname.value)
            ans1=ans/Fnamee.value
            numb.innerText="$"+ ans1.toFixed(2);
            ans2=(Fname.value)/Fnamee.value
            ans2=Number(ans2)+Number(ans1)
            numbb.innerText="$"+ans2.toFixed(2);
        }
    })
}