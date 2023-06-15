var down=document.getElementById('cw');
var cake = document.getElementById('do');

cake.addEventListener('click',()=>{
    down.classList.toggle('hides')
})

var filter = document.getElementById('fps');
var xmark2 = document.getElementById('ccc');
var filter2 = document.getElementById('filter-by');

filter2.addEventListener('click',()=>{
    filter.classList.remove('hide')
})
xmark2.addEventListener('click',()=>{
    filter.classList.remove('hide')
} )