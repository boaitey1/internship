function vlidatefname(fname)
            {
                var  Mess=document.getElementById("mess")
                var Fname=document.getElementById("fname")
                var regex=/^[a-zA-Z ]{2,30}$/;

                if(regex.test(Fname.value))
                {
                    Fname.style.border="solid 2px green"
                    Mess.style.visibility="hidden"
                    return true;
                }
                else
                {
                    Fname.style.border="solid 2px red"
                    Mess.style.visibility="visible" 
                    return false;
            
                }

            }

            function vlidatelname(lname)
            {
                var  Mess=document.getElementById("mes")
                var Lname=document.getElementById("lname")
                var regex=/^[a-zA-Z ]{2,30}$/;

                if(regex.test(Lname.value))
                {
                    Lname.style.border="solid 2px green"
                    Mess.style.visibility="hidden"
                    return true;
                }
                else
                {
                    Lname.style.border="solid 2px red"
                    Mess.style.visibility="visible"
                    Mess.innerText=("invalid")
                    
                    return false;
                }

            }

            function phone(tel)
            {
                var  Mess=document.getElementById("telm")
                var Tel=document.getElementById("tel")
                var regex=/^[0-9]{9}$/;

                if(regex.test(Tel.value))
                {
                    Tel.style.border="solid 2px green"
                    Mess.style.visibility="hidden"
                    return true;
                }
                else
                {
                    Tel.style.border="solid 2px red"
                    Mess.style.visibility="visible"
                    Mess.innerText=("invalid")
                    
                    return false;
                }

            }

            function emaill(email)
            {
                var  Mess=document.getElementById("emes")
                var Mail=document.getElementById("email")
                var regex= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                if(regex.test(Mail.value))
                {
                    Mail.style.border="solid 2px green"
                    Mess.style.visibility="hidden"
                    return true;
                }
                else
                {
                    Mail.style.border="solid 2px red"
                    Mess.style.visibility="visible"
                    Mess.innerText=("invalid")
                    
                    return false;
                }

            }
