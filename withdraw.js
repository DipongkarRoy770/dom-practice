document.getElementById('withdraw').addEventListener('click',function(){

  const input = document.getElementById('withdraw-input');
  const inputValue = input.value ;
  const userInput = parseFloat(inputValue);

  const withdraw = document.getElementById('withdraw-balance');
  const newWitdraw = withdraw.innerText ;
  const withdrawuser = parseFloat(newWitdraw);
  const totalWithdraw = userInput + withdrawuser ;
  

  const balance = document.getElementById('balance');
  const newBalance = balance.innerText ;
  const balanceUser = parseFloat(newBalance) ;
  
  const totalBalance = balanceUser - totalWithdraw ;
   
  if(totalWithdraw>totalBalance){
    alert('tor baper accound taka nai ') ;
    return ;
  }
  withdraw.innerText = totalWithdraw ;
  balance.innerText = totalBalance ;

  input.value= '' ; 
  
})