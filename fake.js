const validPin=1234;
const number=1234;
const transactionData=[]
// function to get input values
function getInputValueNumber (id){
//    const inputField=  document.getElementById(id);
//    const inputFieldValue=inputField.value;
//    const getInputFieldValueNumber = parseInt(inputFieldValue)
//    return getInputFieldValueNumber;
   const getInputFieldValueNumber=parseInt(document.getElementById(id).value);
   return getInputFieldValueNumber;
}

// get innerText
 function getInnerText(id){
const elementValueNumber=parseInt(document.getElementById(id).innerText)
return elementValueNumber;
 }

//  set INner Text
function setInnerText(value){
    const availableBalanceElement=document.getElementById('available-balance');
     availableBalanceElement.innerText=value
}

// add money feature
document.getElementById('add-money-btn').addEventListener('click',function(e){
    e.preventDefault();

     const accountNumber=getInputValueNumber('account-number');
     const addAmount=getInputValueNumber('add-amount');
      if(addAmount<=0){
      alert('Invalid amount')
      return;
      }
      const pinNumber=getInputValueNumber('add-pin')
      if(pinNumber !==validPin){
      alert('valid password ')
      return;
      }
     const availableBalance=getInnerText('available-balance');
    
      if(accountNumber !==number){
        alert('please valid account number');
        return;
      }
     const totalNewAvailableBalance = availableBalance+addAmount;
     setInnerText(totalNewAvailableBalance)
     alert('successful add')
//transaction
const data={
    name:"add Money",
    date:new Date().toLocaleTimeString(),
}
transactionData.push(data)
})

/// cashOut feature
document.getElementById('withdraw-btn').addEventListener('click',function(e){
    e.preventDefault()
     const  agentNumber=getInputValueNumber('agent-number');
     if(agentNumber !== number){
        alert('valid Number')
        return;
     }
     const withdrawAmount=getInputValueNumber('withdraw-amount')

     const agentPIn= getInputValueNumber('agent-number-pin')
     if(agentPIn !== validPin){
        alert('valid password')
        return;
     }
     const availableBalance=getInnerText('available-balance')
          if(availableBalance <= 0 || withdrawAmount>availableBalance){
        alert('money problem')
        return;
     }
     const totalNewAvailableBalance = availableBalance-withdrawAmount;
     setInnerText(totalNewAvailableBalance)
     alert('successful cashOut')

   //transaction
const data={
    name:"Cash Out",
    date:new Date().toLocaleTimeString(),
}
transactionData.push(data)
})
 

///transfer feature
document.getElementById('transfer-btn').addEventListener('click',function(e){
    e.preventDefault();
    const  userNumber=getInputValueNumber('user-number')
    if(userNumber !== number){
        alert('please provide valid number')
        return;
    }
    const transferAmount=getInputValueNumber('transfer-amount')
    const  availableBalance=getInnerText('available-balance')
       if(availableBalance <= 0 || transferAmount>availableBalance){
         alert('money problem')
         return;
        }
   
    const pinNumber=getInputValueNumber('transfer-number-pin')
    if(pinNumber !== validPin){
     alert('please provide valid pin number')
     return;
    }
    const totalNewAvailableBalance= availableBalance-transferAmount;
     setInnerText(totalNewAvailableBalance)
     alert('successful transfer')

        //transaction
const data={
    name:"transfer",
    date:new Date().toLocaleTimeString(),
}
transactionData.push(data)
})
///get Bonus

 document.getElementById('bonus-btn').addEventListener('click',function(e){
     e.preventDefault();
     const couponNumber=getInputValueNumber('coupon-number');
     if(couponNumber !== validPin){
        alert('did,t match')
        return;
     }
     const availableBalance=getInnerText('available-balance')
     const totalNewAvailableBalance=availableBalance+140;
     setInnerText(totalNewAvailableBalance)
     alert('congratulations')
      
 })


// Transaction
document.getElementById('transactions-button').addEventListener('click',function(){


const transactionContainer=document.getElementById('transaction-container')
transactionContainer.innerHTML=''
for(const data of transactionData){
    const div=document.createElement('div')
    div.innerHTML=`
    <div class=" bg-white rounded-xl p-3 flex justify-between items-center  mt-3">
    <div class="flex items-center">
      <div class="p-2 rounded-full bg-gray-200"><img class="mx-auto" src="./assets/wallet1.png" alt=""></div>
       <div class="ml-3">
        <h1>${data.name}</h1>
        <p>${data.date}</p>
       </div>
    </div>
     <i class="fa-solid fa-ellipsis-vertical"></i>
   </div>
    `
    transactionContainer.appendChild(div)
}
})


// goggling features 
document.getElementById('add-button').addEventListener('click',function(){
   const forms=document.getElementsByClassName('form');
   for(form of forms){
    form.style.display='none'
   }
   document.getElementById('add-money-parent').style.display='block'
})

document.getElementById('cash-out-button').addEventListener('click',function(){
   const forms=document.getElementsByClassName('form');
   for(form of forms){
    form.style.display='none'
   }
   document.getElementById('cash-out-parent').style.display='block'
})

document.getElementById('transfer-button').addEventListener('click',function(){
   const forms=document.getElementsByClassName('form');
   for(form of forms){
    form.style.display='none'
   }
   document.getElementById('transfer-money-parent').style.display='block'
})

document.getElementById('bonus-button').addEventListener('click',function(){
   const forms=document.getElementsByClassName('form');
   for(form of forms){
    form.style.display='none'
   }
   document.getElementById('get-bonus-parent').style.display='block'
})

document.getElementById('transactions-button').addEventListener('click',function(){
   const forms=document.getElementsByClassName('form');
   for(form of forms){
    form.style.display='none'
   }
   document.getElementById('transaction-parent').style.display='block'
})


 



















