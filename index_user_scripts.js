/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* widget  .uib_w_4 */
    $(document).on("click", ".uib_w_4", function(evt)
    {
        /* your code goes here */ 
         return false;
    });
    
        /* button  #b_materi */
    
    
        /* button  #b_home */
    $(document).on("click", "#b_home", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#page_93_4"); 
         return false;
    });
     
         $(document).on("click", "#m_home", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#page_93_4"); 
         return false;
    });
    
        /* button  #b_materi */
    $(document).on("click", "#b_materi", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#materi"); 
         return false;
    });
    
        $(document).on("click", "#m_materi", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#materi"); 
         return false;
    }); 
     
        /* button  #b_program */
    $(document).on("click", "#m_program", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#program"); 
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
