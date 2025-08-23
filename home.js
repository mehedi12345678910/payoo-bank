///2
const validPin=1234;
// add money feature
document.getElementById('add-money-btn').addEventListener('click',function(e){
e.preventDefault();
console.log('click');
const bank=document.getElementById('bank').value
const accountNumber=document.getElementById('account-number').value
const amount=parseInt( document.getElementById('add-amount').value)

const pin=parseInt(document.getElementById('add-pin').value) 

const availableBalance=parseInt( document.getElementById('available-balance').innerText)

console.log(availableBalance);

if(accountNumber.length <11){
 alert('please provide valid account number')
 return;
}

if(pin !== validPin){
    alert('Please provide valid pin')
    return;
}

const totalNewAvailableBalance= amount + availableBalance;
document.getElementById('available-balance').innerText=totalNewAvailableBalance;

})
// cashout money feature last
document.getElementById('withdraw-btn').addEventListener('click',function(e){
    e.preventDefault();
     const amount=parseInt(document.getElementById('withdraw-amount').value)
    
     const availableBalance =parseInt(document.getElementById('available-balance').innerText)
     const totalNewAvailableBalance = availableBalance - amount;
  
    //  console.log(totalNewAvailableBalance);
     document.getElementById('available-balance').innerText=totalNewAvailableBalance
     
})

// toggling features 2 number akhaner
document.getElementById('add-button').addEventListener('click',function(){
    document.getElementById('cash-out-parent').style.display='none';
    document.getElementById('add-money-parent').style.display='block';
})

document.getElementById('cash-out-button').addEventListener('click',function(){
    document.getElementById('add-money-parent').style.display='none';
    document.getElementById('cash-out-parent').style.display='block';
})

