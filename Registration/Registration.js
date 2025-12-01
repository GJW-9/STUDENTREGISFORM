     const readline = require('readline').createInterface({
     input: process.stdin,
     output: process.stdout
   });
   
   function confirmPassword(password) {
     if (password.length < 8) return "Password must be at least 8 characters";
     if (!/\d/.test(password)) return "Include a number in password";
     if (!/[A-Z]/.test(password)) return "There must be a capital letter";
     return null; // No error
   }
   
   function signup() {
     readline.question('Enter your email: ', (email) => {
       if (!email.includes('@')) {
         console.log('Enter a valid email address');
         return signup(); // Ask again
       }
   
       readline.question('Enter your name: ', (name) => {
         if (name.length < 3) {
           console.log('Enter full name');
           return signup();
         }
   
         readline.question('Enter password: ', (password) => {
           const passwordError = validatePassword(password);
           if (passwordError) {
             console.log(passwordError);
             return signup();
           }
   
           readline.question('Confirm password: ', (confirmPassword) => {
             if (password !== confirmPassword) {
               console.log('Passwords do not match');
               return signup();
             }
   
             console.log('Signup successful!', { email, name });
             readline.close();
           });
         });
       });
     });
   }
   
   signup(); 

