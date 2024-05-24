var userfullname = document.querySelector('#user1');
var professional = document.querySelector('#professional1');
var age = document.querySelector('#age1');
var contactnumber = document.querySelector('#contactnumber1');
var country = document.querySelector('#country1');
var postcode = document.querySelector('#postcode1');
var city = document.querySelector('#city1');
var fulladdress=document.querySelector('#fulladdress1');
var emailaddress = document.querySelector('#emailaddress1');

function render(listinput){
    listinput.forEach(function(list){
        list.addEventListener('blur',function(){
            function showerror(input,message){
                input.value=input.value.trim();
                var small = input.parentElement.querySelector('small');
                small.innerText=message;
            }
            function showsuccess(input){
                var smail=input.parentElement.querySelector('small');
                smail.innerText='';
            }
            function checkEmptyerror(list){
                list.value=list.value.trim();
                var checkerror=false;
                if(!list.value){
                    checkerror=true;
                   showerror(list,'Không được để trống');
                }
                else{
                    showsuccess(list);
                }
                return checkerror;
            }
            function checkLengtherror(list,min,max){
                list.value=list.value.trim();
                if(list.value.length<min){
                    showerror(list,`Phải có ít nhất ${min} kí tự`);
                }
                if(list.value.length>max){
                    showerror(list,`Không được quá ${max} kí tự`);
                }
            }
            function checkEmailerror(list){
                list.value=list.value.trim();
                const regexemail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if(regexemail.test(list.value)){
                    showsuccess(list);
                }
                else{
                    showerror(list,'Không phải email');
                }
            }
            function checkAgeerror(list){
                if(list.value <= 0 || list.value <18 || list.value >200){
                    showerror(list,'Vui Lòng Nhập Lại Tuổi');
                }
                else{
                    showsuccess(list);
                }
            }
            checkEmptyerror(list);
            checkAgeerror(age);
            if(checkEmptyerror(list)==false){
            checkLengtherror(userfullname,3,20);
            checkLengtherror(professional,3,20);
            checkLengtherror(country,3,20);
            checkLengtherror(postcode,3,20);
            checkLengtherror(city,3,20);
            checkLengtherror(fulladdress,3,20);
            checkLengtherror(contactnumber,6,20);
            checkEmailerror(emailaddress);
            checkAgeerror(age);
            }
        })
    });
}

render([userfullname,professional,age,contactnumber,emailaddress,postcode,city,fulladdress,country]);


