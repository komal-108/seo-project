let menuBar = document.getElementById("menu_bar");
let ulList = document.getElementById('ul_list');
menuBar.addEventListener('click',function(){
    if(ulList.style.display == 'none'){
        ulList.style.display = 'block';
    }else{
        ulList.style.display = 'none';
    }
})