document.getElementById ('btn-deposit').addEventListener('click',function(){
  const depositInput = document.getElementById("deposit-input");
   const depositInputNew = depositInput.value ;
  const newDeposit1 = parseFloat(depositInputNew);

  const deposit = document.getElementById('deposit');
  const newDeposit = deposit.innerText ;
  const newDepositUser = parseFloat(newDeposit)
  const total = newDeposit1 + newDepositUser ;
  deposit.innerText =total ;

  const balance= document.getElementById('balance')
  const newBalance = balance.innerText ;
  const newBalanceUser = parseFloat(newBalance);
  const totalDeposit = newBalanceUser + total
  balance.innerText =totalDeposit ;
  depositInput.value = "" ;
})