var rollOut = new Array()
rollOut[0] = 0
roll = 1 
function display_page(page_id){
    if(rollOut[rollOut.length-1]==page_id)
        return null
    rollOut[roll++] = page_id 
   
   console.log(rollOut)
    var page_no = document.querySelectorAll('.page')
        for(var i=0;i<page_no.length;i++){
            page_no[i].style.display = 'none'
        }
        setTimeout(function(){
            page_no[rollOut[rollOut.length-2]].style.display = 'none'
            page_no[rollOut[rollOut.length-2]].classList.remove('rollOut')
        },500)   
    page_no[rollOut[rollOut.length-2]].classList.remove('rollIn')
    page_no[rollOut[rollOut.length-2]].classList.add('rollOut')
    page_no[rollOut[rollOut.length-1]].classList.add('rollIn')
    page_no[rollOut[rollOut.length-1]].style.display = 'block'
    page_no[rollOut[rollOut.length-2]].style.display = 'block'
     
        
      
   

}