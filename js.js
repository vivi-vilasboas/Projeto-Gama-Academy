var count = 0;
var maxCount = 1;

document.addEventListener('mouseleave', function (){
    if(count < maxCount){
        $("#exampleModal").modal('show'); 
        count +=1;   
    }
})