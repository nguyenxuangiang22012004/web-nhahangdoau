

var username = document.querySelector('.username');
var password = document.querySelector('.password');
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
            checkEmptyerror(list);
            if(checkEmptyerror(list)==false){
            checkLengtherror(username,2,20);
            checkLengtherror(password,2,20);
            }
        })
    });
}
render([username,password]);
