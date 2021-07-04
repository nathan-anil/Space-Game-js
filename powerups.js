function timeOuts(element,text) {
    this.element = element;
    this.text = text;


    this.setTime = function() {
        setTimeout(function(){ 
            this.element.textContent = this.text;
            this.isTrue1 = varName1;
         }, 2000);
         setTimeout(function(){
             this.element.style.display = 'none';
             this.isTrue2 = varName2;
             this.isTrue3 = varName3;
         },4000);  
    }
}