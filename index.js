document.getElementById('btn').addEventListener('click',function(){
  const input = document.getElementById('input-email').value ;
  
  const password = document.getElementById('password').value ;
  input.value = '' ;
  if(input ==='input1@gmail.com' && password ==='secets'){
    window.location.href = "http://127.0.0.1:5500/main.html"
  }
  else{
    alert('tumi passwords vule geso taka r tulte parbe na')
  }
})