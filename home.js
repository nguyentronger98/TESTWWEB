/**-------code của form */
const addressbtn=document.querySelector('#address-form')
const addressclose=document.querySelector('#address-close')
addressbtn.addEventListener("click",function()
{
    document.querySelector('.address-form').style.display="flex";
})
addressclose.addEventListener("click",function()
{
    document.querySelector('.address-form').style.display="none";
})
/*-----------------------code của slider left top--------------------*/

const right=document.querySelector('.fa-chevron-right')
const left=document.querySelector('.fa-chevron-left')
const img=document.querySelectorAll('.slider-content-left-top img')
let index=0;
right.addEventListener("click",function(){
    index=index+1;
    if(index>img.length-1)
    {
        index=0;
    }
    document.querySelector(".slider-content-left-top").style.right=index*100+"%"
}
)
left.addEventListener("click",function(){
    index=index-1;
    if(index<=0)
    {
        index=img.length-1;
    }
    document.querySelector(".slider-content-left-top").style.right=index*100+"%"
}
)
/**------------------code của slider left bottom--------- */
const imgli=document.querySelectorAll('.slider-content-left-bottom li')
imgli.forEach(function(imge,index){
    imge.addEventListener("click",function(){
        removeactive()
        document.querySelector(".slider-content-left-top").style.right=index*100+"%"
        imge.classList.add("active")
    })
})
function removeactive(){
    let imgactive=document.querySelector('.active')
    imgactive.classList.remove('active')
}
/*----------------------------------------tạo silder chạy auto của left top -------------*/
function automatic() 
{
    index=index+1;
    if(index>img.length-1)
    {
        index=0;
    }
    removeactive()
    document.querySelector(".slider-content-left-top").style.right=index*100+"%"
    imgli[index].classList.add("active")
}

setInterval(automatic,3000)
/*---------------------------------------code cart--------------------------*/
/*----------------them dien thoai------*/
const btnbt=document.querySelectorAll(".giohang")
btnbt.forEach(function(button,index)
{
    button.addEventListener("click",function(event)
    {
        var btitem=event.target;
        var product=btitem.parentElement;
        var productImg=product.querySelector(".image").src
        var productTen=product.querySelector(".ten").innerText
        var productGia=product.querySelector(".gia").innerText
        addCart(productGia,productImg,productTen)
    })
})
/**them hang */
function addCart(productGia,productImg,productTen)
{
    var  addtr=document.createElement("tr")
    var cartItem=document.querySelectorAll("tbody tr")
    for( var i=0;i<cartItem.length;i++)
    {
        var productT=document.querySelectorAll(".tensanpham")
        if(productT[i].innerHTML==productTen)
        {
            alert("san pham da ton tai")
            return
        }
    }
    var tam='<tr><td style="display:flex; align-items:center;"><img style="width:70px;" src="'+productImg+'"><span class="tensanpham">'+productTen+'</span></td><td><p><span class="giahang">'+productGia+'</span><sup>đ</sup></p></td><td><input type="number" min="0" value="1" style="width:40px; outline:none;"></td><td style="cursor:pointer ;"><span class="deletecart">Xóa</span></td></tr>'
    addtr.innerHTML=tam;
    var carttable=document.querySelector("tbody")
    carttable.append(addtr);
    tinhtongtien();
    deletecarrt();
}
/**-------------------tinh tong tien------------------ */
var t=0;
function tinhtongtien()
{
    var tongc=0
    var cartItem=document.querySelectorAll("tbody tr")
    
    for( var i=0;i<cartItem.length;i++)
    {
        var inputvalue=cartItem[i].querySelector("input").value
        var gia=cartItem[i].querySelector(".giahang").innerHTML
        var tong =gia*inputvalue*1000
        tongc=tongc + tong
        /**var tongd=tongc.toLocaleString('de-DE') */
    }
	t=tongc;
    var carttongtien=document.querySelector(".tong span")
    var tienhang=document.querySelector(".sanpham span")
    carttongtien.innerHTML=tongc.toLocaleString('de-DE')
    tienhang.innerHTML=tongc.toLocaleString('de-DE')
    inputchange()
}
var chot = document.getElementById("chot");
chot.addEventListener("click",function(){
	if(t==0)
		{
			alert("Chú ý: giỏ hàng rỗng!!!");
		}
	
})

/** xoa hang */
function deletecarrt()
{
    var cartItem=document.querySelectorAll("tbody tr")
    for( var i=0;i<cartItem.length;i++)
    {
        var productT=document.querySelectorAll(".deletecart")
        productT[i].addEventListener("click",function(event)
        {
            var cartxoa=event.target
            var carItem=cartxoa.parentElement.parentElement
            carItem.remove()
            tinhtongtien();
        })
    }
}

function inputchange()
{
    var cartItem=document.querySelectorAll("tbody tr")
    for( var i=0;i<cartItem.length;i++)
    {
        var inputT=cartItem[i].querySelector("input")
        inputT.addEventListener("change",function()
        {
            tinhtongtien();
        })
    }

}
const cartbtn=document.querySelector(".fa-xmark")
const cartshow=document.querySelector(".fa-cart-shopping")
cartshow.addEventListener("click",function()
{
    document.querySelector(".cart").style.right="0"
})

cartbtn.addEventListener("click",function()
{
    document.querySelector(".cart").style.right="-100%"
})