function validatePassword(password){

  if(password.length<8)return 'Password must be atleast 8 characters';
  if(!/\d/.test(password)) return 'Include a number in the password';
  if(!/[A-Z]/.test(password)) return 'There must be a capital letter';

  return null;
}

document.getElementById('enterBtn').addEventListener('click',()=>{

  const id= document.getElementById('idnumber').value.trim();
  const email= document.getElementById('email').value.trim();
  const name= document.getElementById('name').value.trim();
  const password= document.getElementById('password').value;

  if(!id || !email || !name || !password){
    return alert('Please fill in all the boxes');
  }

  if(!/^\d{6,12}$/.test(id)) return alert('ID must be 6-12 digits');
  if(!email.includes('@')) return alert('Enter a valid email address');
  if(name.length<2) return alert("Enter your full Names");

  const passwordError = validatePassword(password);
  if (passwordError) return alert(passwordError);


  document.getElementById('formContent').classList.add('hide');
  launchConfetti();

  const welcome= document.getElementById('welcome');
  welcome.textContent = 'Welcome,' + name + '!';
  setTimeout(()=>welcome.classList.add('show'),600);
});