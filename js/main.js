
(function ($) {
   var abc =0;
   
    "use strict";

    
   
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');
   
 
         //   alert(inputData.length);
    $('.validate-form').on('submit',function(e){
        e.preventDefault();
     
       
        
       
        
        
       
        
      
            if(validate(input[0]) == false)
            {
                showValidate(input[0]);
            }
             if(validate(input[1]) == false)
            {
                showValidate(input[1]);
            }
             if(validate(input[2]) == false)
            {
                showValidate(input[2]);
            }
                
                
                 
                 if(validate(input[0]) == true)
                 {
                     hideValidate(input[0]);
                 }
                 
                  if(validate(input[1]) == true)
                 {
                     hideValidate(input[1]);
                 }
                 
                  if(validate(input[2]) == true)
                 {
                     hideValidate(input[2]);
                 }
             
          
          
                if(validate(input[0]) == true && validate(input[1]) == true && validate(input[2]) == true)
              {
            
                 
                 
                 
     
            
                      var YtLink = $('#ytlink').val();
           
        
         
           if(YtLink.length == 28 )
           {
                $("#video1").attr('src','https://www.youtube.com/embed/'+YtLink.replace('https://youtu.be/',''));       
             
               $("#exampleModalToggle").modal('show');  
           }
           else 
           {
                showValidate(input[2]);
           }
        
       
          $("#ModalBtnPreview").click(function() 
       { 
             $("#exampleModalToggle").modal('hide');
            
             $("#video1").attr("src","");
              $("#exampleModalToggle2").modal('show');
       });
       
        $("#ModalBtnPaid").click(function() 
       { 
             $("#exampleModalToggle2").modal('hide');
              $("#exampleModalToggle3").modal('show');
       });
       
       
       
       $("#ModalBtnCancel").click(function() 
       { 
            $("#exampleModalToggle2").modal('hide');
       });
       
        $("#ModalBtnDone").click(function() 
       {  
             $("#exampleModalToggle3").modal('hide');
             
       });
         
   
   
 
              
             
             
               
            
            
            
           
            
           
        }

         
    
       
    });


    $('.validate-form .input100').each(function(e){
     e.preventDefault();
        $(this).focus(function(){
           hideValidate(this);
            
        });
    });


   



    function validate (input) {
        if($(input).attr('type') == 'number' || $(input).attr('name') == 'number') {
        
         var  inputData = String(input.value);
   // alert(inputData.length);
            if(inputData.length < 10 || inputData.length > 10 )
             {
                return false;
               
            }
            
            else
            {
                return true;
            }
            
        
        }
        
      
       
        
       
            
            
        
     
         if($(input).attr('type') == 'ytvideo' || $(input).attr('name') == 'ytvideo') {
          
          // alert("a");
           var  inputData = String(input.value);
   // alert(inputData.length);
        
      
            if(inputData.length < 1)
             {
            
                return false;
                
             
            }
            
            else
            {
                return true;
            }
            }
            
            
            
             if($(input).attr('type') == 'name' || $(input).attr('name') == 'name') {
          
           var  inputData = String(input.value);
    //alert(inputData.length);
    
             
    
            if(inputData.length < 1)
             {
             
                return false;
                
              
            }
            
            else
            {
                return true;
            }
            
          
            
           
            
           
        }
        
            
          
        }
    
   
   

    function showValidate(input) {
  

        var thisAlert = $(input).parent();
        
        $(thisAlert).addClass('alert-validate');
       
    }

    function hideValidate(input) {
   
     
       var thisAlert = $(input).parent();
    
        $(thisAlert).removeClass('alert-validate');

    }
    
   
         
    
        
         
       

})(jQuery);
