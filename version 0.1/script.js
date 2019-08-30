function display_page(page_id){
    
    var page_no = document.querySelectorAll('.page')
        for(var i=0;i<page_no.length;i++){
            page_no[i].style.display = 'none'
      
        }
    var rollOut = null
    page_no[page_id].style.display = 'block'
    page_no[rollOut].classList.remove('rollIn') 
    page_no[page_id].classList.add('rollOut')
    page_no[page_id].classList.all('rollIn')    
    setTimeout(function(){
        page_no[rollOut].style.display = 'none'
    },1000)   

}