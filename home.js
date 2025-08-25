///2
const validPin=1234;
const number=37557311;

const transactionData=[]

// functions to get input values   /// ata sobar last  a dhekhano hoice code choto korar jonno 
function getInputValueNumber(id){
   const inputField= document.getElementById(id)
   const inputFieldValue=inputField.value;
   const getInputFieldValueNumber=parseInt(inputFieldValue)

  return getInputFieldValueNumber;
   
}
// jegula number dorkar nai segula
function getInputValue(id){
   const inputField= document.getElementById(id)
   const inputFieldValue=inputField.value;

   return inputFieldValue;
}

// functions to get innerText to number a convert  value ato kore rakbo age thekei
  function getInnerText(id){
    const element=document.getElementById(id)
    const elementValue=element.innerText
    const elementValueNumber=parseInt(elementValue)
    console.log(elementValueNumber);
    return elementValueNumber;
  }

//   function to set innerText
 function setInnerText(value){
    const availableBalanceElement=document.getElementById('available-balance')
    availableBalanceElement.innerText=value;
 }

 // function to toggle
function handleToggle(id){
    const forms=document.getElementsByClassName('form')///short code 

    for(const form of forms){
        form.style.display='none'
    }
    document.getElementById(id).style.display='block'
}

// function to toggle button color
 function handleButtonToggle(id){
     const formBtns=document.getElementsByClassName('form-btn')
   
     for(const btn of formBtns){
        btn.classList.remove('border-[#0874f2]','bg-[#0874f20d')
        btn.classList.add('border-gray-300')
     }
     document.getElementById(id).classList.remove('border-gray-300' )
     document.getElementById(id).classList.add('border-[#0874f2]','bg-[#0874f20d]')
 }

// function section last beboher korba jodi tumi ager ta bujo



// add money feature
document.getElementById('add-money-btn').addEventListener('click',function(e){
e.preventDefault();

const bank=document.getElementById('bank').value
const accountNumber=parseInt(document.getElementById('account-number').value)

// const amount=parseInt( document.getElementById('add-amount').value)////ata sobar age beboher korba 
const amount=getInputValueNumber('add-amount')///ata shudu code choto korar jonno beboher kora hoice last a
  if(amount<=0){
    alert('Invalid amount')
    return;
  }

// const pinNumber=parseInt(document.getElementById('add-pin').value) 
const pinNumber=getInputValueNumber('add-pin')


// const availableBalance=parseInt( document.getElementById('available-balance').innerText)
const availableBalance=getInnerText('available-balance')

console.log(availableBalance);

if(accountNumber !== number){
 alert('please provide valid account number')
 return;
}

if(pinNumber !== validPin){
    alert('Please provide valid pin')
    return;
}

const totalNewAvailableBalance= amount + availableBalance;

// document.getElementById('available-balance').innerText=totalNewAvailableBalance;
setInnerText(totalNewAvailableBalance);
alert('Money added successfully')

// transaction 
const data={
    name:"add Money",
    date:new Date().toLocaleTimeString(),
}
transactionData.push(data)

})
// cashout money feature last  abong cashout a tumi oupor er function lagaw nije
document.getElementById('withdraw-btn').addEventListener('click',function(e){
    e.preventDefault();
    //  const amount=parseInt(document.getElementById('withdraw-amount').value)
    const amount=getInputValueNumber('withdraw-amount')
    
    //  const availableBalance =parseInt(document.getElementById('available-balance').innerText)
     const availableBalance=getInnerText('available-balance')
       if(amount<=0 || amount>availableBalance){
        alert('Invalid amount')
        return
       }


    //   const agentNumberPin=parseInt(document.getElementById('agent-number-pin').value)
    const agentNumberPin=getInputValueNumber('agent-number-pin')

    //  const agentNumber=parseInt(document.getElementById('agent-number').value)
    const agentNumber=getInputValueNumber('agent-number')
    
    //  console.log('agentNumber',agentNumber);
    if(agentNumber !== number){
        alert('please provide valid agent number')
        return;
    }
     if(agentNumberPin !== validPin){
        alert('Please provide valid pin')
        return;
     }
     
          const totalNewAvailableBalance = availableBalance - amount;
  
    //  console.log(totalNewAvailableBalance);
    //  document.getElementById('available-balance').innerText=totalNewAvailableBalance;
     setInnerText(totalNewAvailableBalance);
     alert('Cash out successful')

     const data={
    name:"add Money",
    date:new Date().toLocaleTimeString(),
}
transactionData.push(data)
})




// transfer Money
    document.getElementById('transfer-btn').addEventListener('click',function(e){
        e.preventDefault()
     const amount = getInputValueNumber('transfer-amount')
     const availableBalance =getInnerText('available-balance')
     if(amount<=0 || amount>availableBalance){
        alert('Invalid Amount')
        return;
     }
     const transferPin=getInputValueNumber('transfer-number-pin')
     const transferNumber=getInputValueNumber('user-number')
     if(transferNumber !==number){
      alert('please Provide valid user number')
      return;
     }
     if(transferPin !==validPin){
        alert('please provide valid pin')
         return;
     }
     totalNewAvailableBalance=availableBalance - amount;
     setInnerText(totalNewAvailableBalance)
     alert('successful transfer')
    })




/////
//get bonus 
document.getElementById('bonus-btn').addEventListener('click',function(e){
    e.preventDefault();
    const availableBalance=getInnerText('available-balance')
    const couponNumber=getInputValueNumber('coupon-number');
    if(validPin !== couponNumber){
        alert('please provide valid coupon number')
        return;
    }
    totalNewAvailableBalance = availableBalance + 150;
    setInnerText(totalNewAvailableBalance)
    alert('successful ')
})




document.getElementById('transactions-button').addEventListener('click',function(){
  
const transactionContainer=document.getElementById('transaction-container')
 transactionContainer.innerHTML= " " 
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



// toggling features 2 number akhaner
document.getElementById('add-button').addEventListener('click',function(){
    // document.getElementById('cash-out-parent').style.display='none';
    //  document.getElementById('transfer-money-parent').style.display='none';
    // document.getElementById('add-money-parent').style.display='block';
    ///
    // const forms=document.getElementsByClassName('form')///short code 

    // for(const form of forms){
    //     form.style.display='none'
    // }
    // document.getElementById('add-money-parent').style.display='block'
    ///tar che short code
     handleToggle('add-money-parent')
     ///color
    //  const formBtns=document.getElementsByClassName('form-btn')
   
    //  for(const btn of formBtns){
    //     btn.classList.remove('border-[#0874f2]','bg-[#0874f20d')
    //     btn.classList.add('border-gray-300')
    //  }
    //  document.getElementById('add-button').classList.remove('border-gray-300' )
    //  document.getElementById('add-button').classList.add('border-[#0874f2]','bg-[#0874f20d]')
    /// tar che short code
    handleButtonToggle('add-button')
    // transaction 
const data={
    name:"add Money",
    date:new Date().toLocaleTimeString(),
}
transactionData.push(data)
})

document.getElementById('cash-out-button').addEventListener('click',function(){
    // document.getElementById('add-money-parent').style.display='none';
    // document.getElementById('transfer-money-parent').style.display='none';
    // document.getElementById('cash-out-parent').style.display='block';
   //// 
    // const forms=document.getElementsByClassName('form')
 
    //  for(const form of forms){
    //      form.style.display='none'
    //  }
    //  document.getElementById('').style.display='block'
     handleToggle('cash-out-parent')

     handleButtonToggle('cash-out-button')
     // transaction 
const data={
    name:"cash out Money",
    date:new Date().toLocaleTimeString(),
}
transactionData.push(data)
})

document.getElementById('transfer-button').addEventListener('click',function(){
    // document.getElementById('add-money-parent').style.display='none';
    // document.getElementById('cash-out-parent').style.display='none';  
    // document.getElementById('transfer-money-parent').style.display='block'
    ////
    // const forms=document.getElementsByClassName('form')

    // for(const form of forms){
    //     form.style.display='none'
    // }
    // document.getElementById('transfer-money-parent').style.display='block'
     handleToggle('transfer-money-parent')
    
       handleButtonToggle('transfer-button')
       // transaction 
const data={
    name:"transfer Money",
    date:new Date().toLocaleTimeString(),
}
transactionData.push(data)
})

document.getElementById('bonus-button').addEventListener('click',function(){
    // const forms=document.getElementsByClassName('form')
    // for(const form of forms){
    //     form.style.display='none'
    // }
    // document.getElementById('get-bonus-parent').style.display='block'
    /////easy way
     handleToggle('get-bonus-parent')
     
     handleButtonToggle('bonus-button')
     // transaction 
const data={
    name:"get Bonus",
    date:new Date().toLocaleTimeString(),
}
transactionData.push(data)
})
document.getElementById('bill-button').addEventListener('click',function(){
   
    /////easy way
     handleToggle('pay-bill-parent')
     
     handleButtonToggle('bill-button')
     // transaction 
const data={
    name:"add Bill",
    date:new Date().toLocaleTimeString(),
}
transactionData.push(data)
})

document.getElementById('transactions-button').addEventListener('click',function(){
   
    /////easy way
     handleToggle('transaction-parent')
     
     handleButtonToggle('transactions-button')

})