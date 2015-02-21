/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // insert code to be run when the composition is fully loaded here4
         yepnope( { load : "http://www.edgehero.com/edgehero.js/1.1/edgehero_1.1_min.js" } );

      });
      //Edge binding end

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ptbtn}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("introen.html", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_enbtn}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("intropt.html", "_self");
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Preloader'
   (function(symbolName) {   
   
   })("Preloader");
   //Edge symbol end:'Preloader'

   //=========================================================
   
   //Edge symbol: 'logo'
   (function(symbolName) {   
   
   })("logo");
   //Edge symbol end:'logo'

   //=========================================================
   
   //Edge symbol: 'Frases'
   (function(symbolName) {   
   
   })("Frases");
   //Edge symbol end:'Frases'

   //=========================================================
   
   //Edge symbol: 'estrela'
   (function(symbolName) {   
   
   })("estrela");
   //Edge symbol end:'estrela'

   //=========================================================
   
   //Edge symbol: 'logonovo'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_logonovo}", "mouseover", function(sym, e) {
         // Gets an element. For example, 
         // var element = sym.$("Text2");
         // element.hide();
         
         

      });
      //Edge binding end

   })("logonovo");
   //Edge symbol end:'logonovo'

   //=========================================================
   
   //Edge symbol: 'logolast'
   (function(symbolName) {   
   
   })("logolast");
   //Edge symbol end:'logolast'

})(jQuery, AdobeEdge, "EDGE-37478103");