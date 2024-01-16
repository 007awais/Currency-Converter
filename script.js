const BASE_URL =
"https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies"
const dropdown =document.querySelectorAll(".dropdown select")
let btn=document.querySelector("button")
let fromCurr=document.querySelector(".from select")
let toCurr=document.querySelector(".to select")
const msg=document.querySelector("#prompt")


//const select=document.querySelector("#to select")
for(let key of dropdown)
{
    for(curr in countryList)
    {
      let newOption=document.createElement("option")
      newOption.innerText=curr;
      newOption.value=curr;
      if(key.name=="from" && curr=="USD")
      {
        newOption.selected="selected"

      }
      else if(key.name=="to" && curr=="PKR")
      {
      
        newOption.selected="selected"
      }
     key.append(newOption)
      
     //
    }
key.addEventListener("change",(evt=>{
    updateflag(evt.target)
}))
}


const updateflag = (element) => {

    
        let currCode = element.value;
        let countryCode = countryList[currCode];
        let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
        let img = element.parentElement.querySelector("img");
        img.src = newSrc;
    
  
  };

  btn.addEventListener("click",async(evt)=>{
 evt.preventDefault();
   let amount=document.querySelector("input")
   let amvalue=amount.value
   if(amvalue==""||amvalue<0)
   {
    amvalue=1;
    amvalue.value=1;

   }
   console.log(fromCurr.value)
   console.log(toCurr.value)
   const URL=`${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`
   let response=  await fetch(URL)
   let data = await response.json()
    let rate=data[toCurr.value.toLowerCase()]
    console.log(rate)

    let final = amvalue*rate
    console.log(msg.getAttribute("id"))
    msg.innerText=`${amvalue} ${fromCurr.value}=${final} ${toCurr.value}`
   

  
  });

  
 




    




// for(let select of dropdown)
// {
    
//     for(curr in countryList)
//     {
//         let newoption=document.createElement("option")
//         newoption.innerText=curr;
//         newoption.value=curr;
//         select.append(newoption)
//     }
  
// }
