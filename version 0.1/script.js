function display_page(page_id){
    var page_no = document.querySelectorAll('.page')
        for(var i=0;i<page_no.length;i++)
            page_no[i].style.display = 'none'
    page_no[page_id].style.display = 'block'   
}