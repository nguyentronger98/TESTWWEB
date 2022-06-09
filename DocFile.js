// JavaScript Document

function DocFile(parent)
{
			var xml = new XMLHttpRequest();
			xml.open('GET',parent.innerHTML,false);
			xml.send();
			var xmlDate = xml.responseXML;
			if(!xmlDate)
				{
					xmlDate=(new DOMParser()).parseFromString(xml.responseText,'text/xml');
				}
			var text='';
			var DTS = xmlDate.getElementsByTagName("d");
			for( var i=0;i<DTS.length;i++)
				{
					
					var xmlten= DTS[i].getElementsByTagName("ten")[0].childNodes[0].nodeValue;
					var xmllink=DTS[i].getElementsByTagName("anh")[0].childNodes[0].nodeValue;
					var xmlgia = + DTS[i].getElementsByTagName("gia")[0].childNodes[0].nodeValue;
					var giagoc =  xmlgia.toLocaleString('de-DE');
					var xmlgg = DTS[i].getElementsByTagName("giamgia")[0].childNodes[0].nodeValue;
					var giaban = xmlgia - (xmlgia*xmlgg /100);
					var gb = giaban.toLocaleString('de-DE');
					text+='<a href="#" ><button class="click" value="8" name="xiaomi.xml"><div class="sanpham-item"><div class="aaa"><img class="image" src="'+xmllink+'"></div><div class="sanpham-item-text"><ul><li><b class="ten">'+xmlten+'</b></li><li class="giakm"> <span class="gia">'+gb+'</span><sup>đ</sup></li><li><a ><span class="giagoc"> '+giagoc+' <sup>đ</sup></span></a><span > -'+xmlgg+'%</span></li></ul></div><button  class="bi bi-cart-plus-fill giohang nut_tvgh nut_gh"> </button></div></button></a>';	
				}
	parent.innerHTML = text;
			
}
var files = document.querySelectorAll(".data");
files.forEach(function(file)
{
        DocFile(file);
})
function DocFile2(path)
{
			var t='';
			var j=0;
			var xml = new XMLHttpRequest();
			xml.open('GET',path.name,false);
			var sl = path.innerHTML;
			path.innerHTML='';
			xml.send();
			var xmlDate = xml.responseXML;
			if(!xmlDate)
				{
					xmlDate=(new DOMParser()).parseFromString(xml.responseText,'text/xml');
				}
			var DTS = xmlDate.getElementsByTagName("d");
			for(var i=0;i<DTS.length&&i<sl*2;i++)
				{
					j++;
					var xmlten= DTS[i].getElementsByTagName("ten")[0].childNodes[0].nodeValue;
					var xmllink=DTS[i].getElementsByTagName("anh")[0].childNodes[0].nodeValue;
					var xmlgia = + DTS[i].getElementsByTagName("gia")[0].childNodes[0].nodeValue;
					var giagoc =  xmlgia.toLocaleString('de-DE');
					var xmlgg = DTS[i].getElementsByTagName("giamgia")[0].childNodes[0].nodeValue;
					var giaban = xmlgia - (xmlgia*xmlgg /100);
					var gb = giaban.toLocaleString('de-DE');
					t+='<a class="aaaa" href="#" onClick="ChuyenTrangChiTiet('+i+',0)"><div class="sanpham-item item-sale"><div class="aaa"><img class="image" src="'+xmllink+'"></div><div class="sanpham-item-text"><ul><li><b class="ten">'+xmlten+'</b></li><li class="giakm"> <span class="gia">'+gb+'</span><sup>đ</sup></li><li><a ><span class="giagoc"> '+giagoc+' <sup>đ</sup></span></a><span > -'+xmlgg+'%</span></li></ul></div><button  class="bi bi-cart-plus-fill giohang btt" style="margin: 0px; width: 284px; margin-left: -142px; margin-top: -113px;" > </button></div></a>';	
					if(j%sl==0)
						{
							var d=document.createElement("div");
							d.classList.add("silder-product-one-content-itemss");
							d.innerHTML=t;
							path.appendChild(d);
							t='';
						}
				}
}
var fs = document.querySelectorAll(".data2");
fs.forEach(function(f)
{
        DocFile2(f);
})


function ChuyenTrangChiTiet(path)
			{
				var xml = new XMLHttpRequest();
			xml.open('GET',path.name,false);
			var vt= path.value;
			xml.send();
			var xmlDate = xml.responseXML;
			if(!xmlDate)
				{
					xmlDate=(new DOMParser()).parseFromString(xml.responseText,'text/xml');
				}
				var DTS = xmlDate.getElementsByTagName("d");
				sessionStorage.link = DTS[vt].getElementsByTagName("anh")[0].childNodes[0].nodeValue;
				sessionStorage.ten = DTS[vt].getElementsByTagName("ten")[0].childNodes[0].nodeValue;
				sessionStorage.gia = DTS[vt].getElementsByTagName("gia")[0].childNodes[0].nodeValue;
				sessionStorage.gg = DTS[vt].getElementsByTagName("giamgia")[0].childNodes[0].nodeValue;
				sessionStorage.giaban = sessionStorage.gia - (sessionStorage.gia*sessionStorage.gg /100);
				sessionStorage.links=DTS[vt].getElementsByTagName("links")[0].childNodes[0].nodeValue;
				sessionStorage.nd=DTS[vt].getElementsByTagName("nd")[0].childNodes[0].nodeValue;
				sessionStorage.tieude=DTS[vt].getElementsByTagName("tieude")[0].childNodes[0].nodeValue;
				sessionStorage.manhinh=DTS[vt].getElementsByTagName("manhinh")[0].childNodes[0].nodeValue;
				sessionStorage.hdh=DTS[vt].getElementsByTagName("hdh")[0].childNodes[0].nodeValue;
				sessionStorage.camsau=DTS[vt].getElementsByTagName("camsau")[0].childNodes[0].nodeValue;
				sessionStorage.camtruoc=DTS[vt].getElementsByTagName("camtruoc")[0].childNodes[0].nodeValue;
				sessionStorage.cpu=DTS[vt].getElementsByTagName("cpu")[0].childNodes[0].nodeValue;
				sessionStorage.ram=DTS[vt].getElementsByTagName("ram")[0].childNodes[0].nodeValue;
				sessionStorage.rom=DTS[vt].getElementsByTagName("rom")[0].childNodes[0].nodeValue;
				sessionStorage.bonhongoai=DTS[vt].getElementsByTagName("bonhongoai")[0].childNodes[0].nodeValue;
				sessionStorage.sim=DTS[vt].getElementsByTagName("sim")[0].childNodes[0].nodeValue;
				sessionStorage.pin=DTS[vt].getElementsByTagName("pin")[0].childNodes[0].nodeValue;
				sessionStorage.nam=DTS[vt].getElementsByTagName("nam")[0].childNodes[0].nodeValue;
				sessionStorage.thang=DTS[vt].getElementsByTagName("thang")[0].childNodes[0].nodeValue;
				sessionStorage.ngay=DTS[vt].getElementsByTagName("ngay")[0].childNodes[0].nodeValue;
				sessionStorage.gio=DTS[vt].getElementsByTagName("gio")[0].childNodes[0].nodeValue;
				sessionStorage.phut=DTS[vt].getElementsByTagName("phut")[0].childNodes[0].nodeValue;
				sessionStorage.giay=DTS[vt].getElementsByTagName("giay")[0].childNodes[0].nodeValue;
				location.assign("ChiTietSanPham.html");
				
			}


var clicks = document.querySelectorAll(".click");
clicks.forEach(function(click)
{
        click.addEventListener("click",function(){
			ChuyenTrangChiTiet(click);
		})
})

