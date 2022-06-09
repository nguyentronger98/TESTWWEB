const rightt=document.querySelector('.nr')
const leftt=document.querySelector('.nl')
const imgg=document.querySelectorAll('.silder-product-one-content-itemss')
let indexx=0;
rightt.addEventListener("click",function(){
    indexx=indexx+1;
    if(indexx>imgg.length-1)
    {
        indexx=0;
    }
    document.querySelector(".silder-product-one-content-items-content").style.right=indexx*100+"%"
}
)
leftt.addEventListener("click",function(){
    indexx=indexx-1;
    if(indexx<0)
    {
        indexx=imgg.length-1;
    }
    document.querySelector(".silder-product-one-content-items-content").style.right=indexx*100+"%"
}
)
