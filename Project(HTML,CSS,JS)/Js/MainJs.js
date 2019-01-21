function NavScroll()
  {
    if(window.scrollY<scroll)
    {
      document.querySelector(".navAndLogo").style.visibility="visible";
      document.querySelector(".line").style.visibility="visible";

    }
      else
      {
      document.querySelector(".navAndLogo").style.visibility="hidden";
      document.querySelector(".line").style.visibility="hidden";
      }
      scroll=window.scrollY;
  }
  var spanContent=document.querySelectorAll("input+span");
  var flag=false;
  function validatBlur(event)
  {
    var element = event.target;
     var index=parseInt(event.target.name);
     if(index==1)
     checkName(element,index);
     else if (index==2)
       cheackPhone(element,index)
       else if(index==3)
         cheackEmail(element,index);
        else
          checkDate(element,index)
   }
  /*  function checkDate(element,index)
    {
      spanContent[index].style.visibility="visible";
      var myDate= new Date();
      var date=document.getElementById('date').value.split("-");
      console.log(date);
      if(parseInt(date[0])>=myDate.getFullYear()&&(date[1]>=myDate.getMonth()|| date[2]>=myDate.getDate()))
        {
          document.getElementById('dateSpan').innerHTML="<i class='fas fa-check' style='Color:green'></i>";
          flag=true;
        }
        else
         {
           document.getElementById('dateSpan').innerHTML="<i class='fas fa-times' style='Color:red'></i>";
           element.style.borderColor="red";
           flag=false;
         }

       }*/
    function checkName(element,index)
    {
      if(element.value=="" || element.value.length<5 ||isNaN(element.value)==false)
        {
          spanContent[index].style.visibility="visible";
          spanContent[index].innerHTML="<i class='fas fa-times' style='Color:red'></i>"
          element.style.borderColor="red";
          flag=false;
        }
        else
          {
            spanContent[index].style.visibility="visible";
            spanContent[index].innerHTML="<i class='fas fa-check' style='Color:green'></i>";
            falg=true;
          }
    }
    function cheackPhone(element,index)
    {
        var phonePattern=/^01[0-2|5][0-9]{8}$/
        if(element.value==""||isNaN(element.value)|| phonePattern.test(element.value)==false)
          {
            spanContent[index].style.visibility="visible";
            spanContent[index].innerHTML="<i class='fas fa-times' style='Color:red'></i>"
            element.style.borderColor="red";
            flag=false;
          }
         else
          {
            spanContent[index].style.visibility="visible";
            spanContent[index].innerHTML="<i class='fas fa-check' style='Color:green'></i>";
            flag=true;
          }
    }
    function cheackEmail(element,index)
    {
        var emailPattern=/^[a-z0-9]{4,}@[a-z0-9]{4,}\.[a-z]{1,3}$/;
        if(element.value =="" || emailPattern.test(element.value)==false)
          {
            spanContent[index].style.visibility="visible";
            spanContent[index].innerHTML="<i class='fas fa-times' style='Color:red'></i>"
            element.style.borderColor="red";
            flag=false;
          }
          else
             {
               spanContent[index].style.visibility="visible";
               spanContent[index].innerHTML="<i class='fas fa-check' style='Color:green'></i>";
               flag=true;
             }
    }
    function removeIcons(event)
    {
        var index=parseInt(event.target.name);
          spanContent[index].style.visibility="hidden";
          event.target.style.borderColor="white";

    }
    function validateForm()
    {
      if (flag==false)
      {
        document.getElementById('submitFalse').innerHTML="<p Style='border:1px solid red;margin-top:10px;'>you must valid input<p>";
      }
      else
      {
        document.getElementById('submitFalse').style.visibility="hidden";
        submit();
      }
    }
