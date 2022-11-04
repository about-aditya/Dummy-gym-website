 
 function validate(form) {
            fail =  validateUsername(form.name.value)
            fail += validatePhonenumber(form.phone.value)
            fail += validateEmail(form.email.value)

            if (fail=="") return true;
            else{
                alert(fail);
                return false;
            }
            
           }
   
   
            function validateUsername(field){
                var Uname= /[^0-9]/;
                 if(field=="") {
                    return "Name cannot be empty\n" ;
                   }
                else if(Uname.test(field)){
                    return "";
                  }
                  else{
                      return "Please enter a valid Username.\n";
                  }
                
            }
   
   
            function validatePhonenumber(field){
       
                 if(field=="") {
                   return "Contact number cannot be empty\n" ;
                 }
                 else {
                     return "";
                 }
                
            }
   
   
   
            function validateEmail(field){
                var e=/@gmail.com$/;
                if(field==""){
                    return "Email-id cannot be empty.\n";
                }
                else if(e.test(field)){
                    return "";
                }
                else{
                    return "Please enter a valid Email-id.\n";
                }
                
            }

    
         
   
   