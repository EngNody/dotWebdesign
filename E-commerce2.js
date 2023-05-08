// body.style.backgroundColor='red'
// ===================================================
// copy menu for mobile
// ===================================================

function copymenu() {
  
// copy inside .dpt-cat to .departments
const dptCategory=document.querySelector('.dpt-cat')
const dptPlace=document.querySelector('.departments')
dptPlace.innerHTML = dptCategory.innerHTML;

// copy inside nav to nav
const mainNav=document.querySelector('.header-nav nav')
const navPlace=document.querySelector('.off-canvas nav')
navPlace.innerHTML = mainNav.innerHTML;

 // copy .header-top to .thetop-nav
const topNav=document.querySelector('.header-top .wrapper')
const topPlace=document.querySelector('.thetop-nav')
topPlace.innerHTML = topNav.innerHTML;

}

copymenu()

// ===========================================================
// show mobile menu
// ===========================================================

const menuButton=document.querySelector('.trigger');
const closeButton=document.querySelector('.t-close');
const addclass=document.querySelector('.site');

// function way
menuButton.addEventListener('click',function() {
  addclass.classList.toggle('showmenu')
})
// another function way
closeButton.addEventListener('click',(e) =>{
  e.preventDefault(); 
  addclass.classList.toggle('showmenu')
})






// ============================================================
// add and remove classes with toggle - new method
// ============================================================

// show sub menu on mobile
const submenu=document.querySelectorAll('.has-child .icon-small')
submenu.forEach((menu) => menu.addEventListener('click',toggle));

function toggle(e){
e.preventDefault(); 

submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand'):null);
if (this.closest('.has-child').classList != 'expand') {
  this.closest('.has-child').classList.toggle('expand')
}
}


// slider

const swiper = new Swiper('.swiper', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

});

// ==================================================
// search buttom
// ==================================================

const oursearch=document.querySelector(".t-search");
const tclose=document.querySelector(".search-close");
const showsearch=document.querySelector(".site");

oursearch.addEventListener("click",() => {
  showsearch.classList.toggle("xxx");

  if (favmob.classList.contains="showfavmob") {
    favmob.classList.remove("showfavmob")
    wishlist.classList.remove("myheart")

  }
})

tclose.addEventListener("click",() => {
  showsearch.classList.remove("xxx");
})

// ========================================================
// show menu
// =======================================================

const triggerbutton=document.querySelector('.dpt-cat .dpt-trigger') 
const thesite=document.querySelector(".site")

triggerbutton.addEventListener("click",(eo) => {
  eo.preventDefault();
thesite.classList.toggle("showdpt");
})


// ==============================================================
// product image slider ============ very important   
// ==============================================================

const productThumb = new Swiper ('.small-image', {
loop: true,
spaceBetween: 10,
slidesPerView: 4,
freeMode: true,
watchSlidesProgress: true,
breakpoints: {
  481: {
    spaceBetween: 32,
  }
}
})

const productBig = new Swiper ('.big-image', {
loop: true,
autoHeight:true,
navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
},
thumbs: {
  swiper: productThumb,
},
})



// ===========================================================
// stock products bar width percentage
// ===========================================================

let stocks=document.querySelectorAll(".products .stock")
for (let x = 0; x < stocks.length; x++) {
  let stock = stocks[x].dataset.stock;
  
available=stocks[x].querySelector(".qty-available").innerHTML;
sold=stocks[x].querySelector(".qty-sold").innerHTML;
percent=sold*100/stock;

stocks[x].querySelector(".available").style.width = percent + `%`
}




// ====================================================================


//========================   show mini cart   ========================

// const iscart=document.querySelector(".iscart")
// const minicart=document.querySelector(".mini-cart")


// iscart.addEventListener("mouseover" , () => {
//   minicart.classList.add("showlist")
// })
// iscart.addEventListener("mouseout" , () => {
//   minicart.classList.remove("showlist")
// })



// ====================================================================
// show cart on click
// ====================================================================

const divtoshow=".mini-cart";
const divpopup=document.querySelector(divtoshow);
// const divpopup=document.querySelector(".mini-cart");
const divtrigger=document.querySelector(".cart-trigger");
const itemnumbercart=document.querySelector(".cart-trigger .fly-item")
console.log(itemnumbercart)

divtrigger.addEventListener('click',(e) => {
  setTimeout(() => {
    if(!divpopup.classList.contains('show')) {
      divpopup.classList.add("show")
    // divpopup.classList.toggle("show")



    wishlist.classList.remove("myheart");
    showsearch.classList.remove("xxx");
    favmob.classList.remove("showfavmob");
    itemnumbercart.classList.add("dn");
    }
  }, 250);
    e.preventDefault();
})

// -------------- auto close by click outside .cart-trigger --------------

document.addEventListener("click",(e) => {
//   const divtoshow=".mini-cart";
// const divpopup=document.querySelector(divtoshow);

  const isclosest=e.target.closest(divtoshow);
  if (!isclosest && divpopup.classList.contains('show')) {
    divpopup.classList.remove("show");
    itemnumbercart.classList.remove("dn");

  }
})


// ==================================+========================================
// my red heart
//===========================================================================
const wishlist=document.querySelector(".wishlist")

wishlist.addEventListener("click",(eo) => {
  const favmob=document.querySelector(".favmob")
eo.preventDefault()
wishlist.classList.toggle("myheart")
})

// ========================================================================================================================
//===== show mobile heart list when click on showlist 
// ============================================================
const favmob=document.querySelector(".favmob")
const showlist=document.querySelector(".showlist")
const wishlista=document.querySelector("#wishlista")

wishlista.addEventListener("click",(eo) => {
  
favmob.classList.toggle("showfavmob");

if (showsearch.classList.contains="xxx") {
  showsearch.classList.remove("xxx")
}
})


// ===============================================================
// close X elements
// ===============================================================

// const closeminicart=document.querySelectorAll(".hide-class .closeminicart")
const minicart=document.querySelector(".mini-cart")
const closeminicart=document.querySelectorAll(".mini-cart .closeminicart")
const theminicart=document.querySelector(".mini-cart")
const ricloseelement=document.querySelectorAll(".ricloseelement")


// minicart.forEach(item => {
// eo.target.parentElement.parentElement.style.display="none";
  minicart.addEventListener("click",(eo) => {

    if (eo.target.classList == "ri-close-line") {

  let theprice=Number(eo.target.parentElement.parentElement.querySelector(".current").innerHTML.replace("$",""));

    thetotal.forEach(item => {
      let sum=Number(item.innerHTML.replace("$",""));

  if (sum>0) {
  let resum= (sum - theprice).toFixed(2)
    item.innerHTML =  `$ ${resum}`;
  }
    })
// **************** delete disabled when close product from mini cart ***************************************
const imgsrc=eo.target.parentElement.parentElement.querySelector(".object-cover a img").src
console.log(imgsrc)
const allimg=document.querySelectorAll(".keybuy img")
console.log(allimg)

allimg.forEach(item => {
  const allimgsrc=item.src;
  console.log(allimgsrc)

if (imgsrc == allimgsrc) {
const imgbuy=item.parentElement.parentElement.parentElement.parentElement
console.log(imgbuy)
const disablebuy=imgbuy.querySelector(".newbutton")
console.log(disablebuy)
disablebuy.removeAttribute("disabled")
}
  })
  eo.preventDefault()
// });
// ********************* delete product from mini cart ************************************
// eo.target.parentElement.parentElement.remove()

  eo.target.parentElement.parentElement.remove();

  setTimeout(() => {
    if(!divpopup.classList.contains('show')) {
      divpopup.classList.add("show")
    }
  }, 1);

  
  // ****************************************************
// if (eo.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.classList.contains("show")) {
//   console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbb")
//   // eo.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add("show")
//   minicart.classList.add("show")
// }

    }
  })
// =================== in cart page only=============================================
// ===================delete product from list=======================================
// ==================================================================================
ricloseelement.forEach(item => {
  item.addEventListener("click",(eo) => {
    // eo.preventDefault();
    
// =========================================
// let theprice=eo.target.parentElement.parentElement.parentElement.querySelector(".current").innerHTML.replace("$","");
  let theprice=Number(eo.target.parentElement.parentElement.parentElement.querySelector(".finaltotal").innerHTML.replace("$",""));
console.log(theprice)

thetotal.forEach(item => {
  // let sum=item.innerHTML.replace("$","");
        let sum=Number(item.innerHTML.replace("$",""));

  sum=Number(sum);
if (sum>0) {
// let resum= ( Number(sum) - Number(theprice)).toFixed(2)
  let resum= (sum - theprice).toFixed(2)
item.innerHTML =  `$ ${resum}`;
}
})
// =========================================
    eo.target.parentElement.parentElement.parentElement.remove()
  })
});





// ================================================================
// component the cart
// ================================================================


const totaljs=document.querySelectorAll(".totaljs")
// console.log(totaljs)


totaljs.forEach(item => {
  
  setInterval(() => {
    const calccartbody=document.querySelector(".cart-body ul")
    const items=document.querySelectorAll(".cart-body ul .item")
  
    item.innerHTML=items.length;
    // console.log(items.length)
    if (items.length=="") {
      calccartbody.innerHTML=`Not Products found Yet !!! <br> <br>`;
    }
  }, 100);

  
});





// =====================================================================  
// calc the total
// =====================================================================

const thetotal=document.querySelectorAll(".thetotal")
const buybuttons=document.querySelectorAll(".newbutton")


buybuttons.forEach(item => {
  
  item.addEventListener("click",(eo) => {

    eo.target.setAttribute("disabled","")

// =======================================================================
// create element in mini-cart page when press buy button
// =======================================================================

const nameitemminicart=eo.target.parentElement.parentElement.parentElement.querySelector("h3").innerText;
const srcitemminicart=eo.target.parentElement.parentElement.parentElement.querySelector("img").src;    
const priceitemminicart=Number(eo.target.parentElement.parentElement.parentElement.querySelector(".current").innerHTML.replace("$",""));    

const itembornminicart=`
<li class="item">
<div class="thumbnail object-cover">
<a href="#"><img src="${srcitemminicart}" alt=""></a>
</div>
<div class="item-content">
<p><a href="#">${nameitemminicart}</a></p>
<span class="price">
<div>
  <span class="current">$${priceitemminicart}</span>
  <span class="fly-item"><span>2X</span></span>
</div>
</span>
</div>
<a href="#" class="item-remove closeminicart">
<i class="ri-close-line"></i></a>
</li>
`;

const calccartbody=document.querySelector(".cart-body ul")

if (calccartbody.innerHTML=="Not Products found Yet !!! <br> <br>") {
  calccartbody.innerHTML = itembornminicart;

}else{
  calccartbody.innerHTML += itembornminicart;

}


// =======================================================================
// create <tr></tr> element in cart page when press buy button
// =======================================================================
// const thecartproducts=document.querySelector(".thecartproducts")
// console.log(thecartproducts)
//     const nameitem=eo.target.parentElement.parentElement.parentElement.querySelector("h1").innerText;
//     const srcitem=eo.target.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector("img").src;    
// //     

// const itemborn=`
// <tr>
// <td class="flexitem">
//   <div class="thumbnail object-cover">
//     <a href=""><img src="${srcitem}" alt=""></a>
//   </div>
//   <div class="content">
//     <strong><a href="#"><h1>${nameitem}</h1></a></strong>
//     <p>color:white</p>
//   </div>
// </td>
// <td><span class="current">$255.99</span></td>

// <td>
//   <div class="qty-control flexitem">
//     <button class="minus">-</button>
//     <input type="text" value="1" min="1">
//     <button class="plus">+</button>
//   </div>
// </td>

// <td><span class="finaltotal">$255.99</span></td>

//   <td><button class="newbutton">Buy</button></td>
// <td><a href="#"><i class="ri-close-line ricloseelement"></i></a></td>
// </tr>
// `;

// thecartproducts.innerHTML+=itemborn
// =======================================================================




  // ==========================================
    thetotal.forEach(item => {
      // ====================== All pages =============================
      let theprice=Number(eo.target.parentElement.parentElement.querySelector(".current").innerHTML.replace("$",""));
      console.log(theprice)
      let sum=Number(item.innerHTML.replace("$",""));
      console.log(sum)
      let resum=(sum + theprice).toFixed(2)

      resum=Number(resum)
    
    item.innerHTML =  `$ ${resum}`;
//     // ======================== cart page only ===================================
// let ourqty=Number(eo.target.parentElement.parentElement.querySelector(".qty-control input").value);
//     const oursubtotal=(resum*ourqty)
//     // const oursubtotal2=Math.round(oursubtotal)
//     let finaltotal=eo.target.parentElement.parentElement.querySelector(".finaltotal")
    
//     finaltotal.innerHTML=`$${oursubtotal}`
//     item.innerHTML =`$ ${oursubtotal}`;

// =======================================================================
})
})
    });



// =============================================================================
//                page offer   -  write a review                           
// =============================================================================



const ratethis=document.querySelector(".rate-this")
const namereview=document.querySelector(".namereview")
const summaryreview=document.querySelector(".summaryreview")
const textareareview=document.querySelector(".textareareview")
const reviewblockbody=document.querySelector(".review-block-body")
// console.log(ratethis.innerHTML)
const newreview=document.querySelector("#newreview");



// newreview.addEventListener("click",(eo) => {
//   eo.preventDefault()

//   let d=new Date()
//   // console.log(d)
//   let time=d.getDate()
//   console.log(time)
//   let month=d.getMonth()
//   console.log(month)
//   let year=d.getFullYear()
//   console.log(year)

// const creatnewreview=`
// <li class="item">
// <div class="review-form">
//   <p class="person">${namereview.value}</p>
//   <p class="mini-text">On ${time}/${month}/${year}</p>
// </div>
// <div class="review-rating rating">
// <div class="stars"></div>

// </div>
// <div class="review-title">
//   <p>${summaryreview.value}</p>
// </div>
// <div class="review-taxt">
//   <p>${textareareview.value}</p>
// </div>
// </li>
// `;

// reviewblockbody.innerHTML+=creatnewreview;

// setTimeout(() => {
//   console.log(namereview.value)
//   console.log(summaryreview.value)
//   console.log(textareareview.value) 
//   console.log(ratethis.innerHTML)
// }, 1000);

// })

// =====================================
// add ri-heart-line 
// =====================================
const favnumber=document.querySelectorAll(".item-number-heart");
const favnumbermob=document.querySelectorAll(".item-number-heart-mob");
const checkheart=document.querySelectorAll(".contentheart")
// console.log(checkheart)
const ourheart=document.querySelectorAll(".item .hoverable li a i.ri-heart-line")


// ================== chang number items ==========================================
// web-mode
setInterval(() => {
  const ulcheckheartitems=document.querySelector(".contentheart");
  const checkheartitems=ulcheckheartitems.querySelectorAll(".contentheart .item");
let favlength=Number(checkheartitems.length)
favnumber.forEach(item => {
  item.innerHTML=favlength
}, 100);

// mobile-mode
const checkheartitemsmob=document.querySelectorAll(".favmob .contentheart .item");
let favlengthmob=Number(checkheartitemsmob.length)
favnumbermob.forEach(item => {
  item.innerHTML=favlengthmob
});
});


// =================== the content text =======================================

checkheart.forEach(item => {
  item.innerHTML="Not Products Favorite Found Yet !!! <br>";

});
// ================== when click for each heart ==================================================

ourheart.forEach(item => {
  
item.addEventListener("click",(eo) => {
eo.preventDefault();

eo.target.classList.toggle("primary-color")

  const nameitemminicart=eo.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector("h3").innerText;
const srcitemminicart=eo.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector("img").src;    
const priceitemminicart=Number(eo.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector(".current").innerHTML.replace("$",""));    

const ourheartitem=`
<li class="item favitems">
<div class="thumbnail object-cover">
<a href="#"><img src="${srcitemminicart}" alt=""></a>
</div>
<div class="item-content">
<p><div>${nameitemminicart}</div></p>
<span class="price">
<div>
  <span class="current">$${priceitemminicart}</span>
  <span class="fly-item"><span>2X</span></span>
</div>
</span>
</div>
<a href="#" class="item-remove closeminicart">
<i class="ri-close-line"></i></a>
</li>
`;

// ============= Not Products Favorite Found Yet !!! <br> =========================
checkheart.forEach(item => {
  if (eo.target.classList=="ri-heart-line primary-color") {

    if (item.innerHTML=="Not Products Favorite Found Yet !!! <br>") {
      item.innerHTML = ourheartitem;
    }
    else{
      item.innerHTML += ourheartitem;
    }};
});

setInterval(() => {
  const checkheartitems=document.querySelectorAll(".contentheart .item");
  if (checkheartitems.length == 0){
    checkheart.forEach(item => {
      item.innerHTML="Not Products Favorite Found Yet !!! <br>";
    });
  }
}, 1000);
// ===================== remove element from mini cart===================================
  if(eo.target.classList=="ri-heart-line"){

const favitems=document.querySelectorAll(".favitems img");

favitems.forEach(item => {
const hisrc=item.src

if (hisrc == srcitemminicart) {
  item.parentElement.parentElement.parentElement.remove();

}
});
}
})
});
// ============= close favorate heart from cart favorate ===========
setInterval(() => {
  const allfavclose=document.querySelectorAll(".favitems .ri-close-line")
// ========== remove the element================
allfavclose.forEach(item => {
  item.addEventListener("click",(eo) => {
eo.preventDefault();

    // ================ remove the same item
    eo.target.parentElement.parentElement.remove();

// ========== remove the color from main heart =================
const itemimgcartfav= eo.target.parentElement.parentElement.querySelector("img").src;
const mainitemsimgpage=document.querySelectorAll(".keybuy .item img");

mainitemsimgpage.forEach(item => {
  const ouritemsrc=item.src;

  if (itemimgcartfav == ouritemsrc) {
    item.parentElement.parentElement.parentElement.querySelector(".ri-heart-line").classList.remove("primary-color");
  }
});
// ================================= remove mob item when click web item
// ================================= remove mob item minicart when click web item minicart
const itemimgcartfavmob=document.querySelectorAll(".favmob .item img");
// console.log(itemimgcartfavmob)

itemimgcartfavmob.forEach(item => {
  const ouritemsrcmob=item.src;
  // console.log(ouritemsrcmob)

  if (itemimgcartfav == ouritemsrcmob) {
  item.parentElement.parentElement.parentElement.remove();
  }

});

// // // ================================= remove web item when click mob item
// // // ================================= remove web item minicart when click mob item minicart

const itemimgcartfavweb=document.querySelectorAll(".minicartheart .item img");
// console.log(itemimgcartfavweb)

itemimgcartfavweb.forEach(item => {
  const ouritemsrcweb=item.src;
  // console.log(ouritemsrcweb)

  if ( itemimgcartfav == ouritemsrcweb) {
  item.parentElement.parentElement.parentElement.remove();
  }

});
  })
});
}, 1000);

// ==================================================================================




























// =============================================================
// show sub menu on mobile
// for add expand without toggle
// ?????????????????????????????????????????????????????????????
// =============================================================

// const submenu=document.querySelectorAll('.has-child .icon-small')
// console.log(submenu)
// // submenu.forEach((menu) => menu.addEventListener('click',toggle));
// submenu.forEach(item => {

//   item.addEventListener('click',() => {
    
// const ourchilds=document.querySelectorAll('.off-canvas .has-child')
// for (let i = 0; i < ourchilds.length; i++) {
//   const element = ourchilds[i];
//   element.classList.remove("expand");
// }

// item.parentElement.parentElement.classList.toggle('expand');
//       item.parentElement.parentElement.style.color='red'

// // if (item.classList.contains('expand')) {
// //   item.classList.remove('expand')
// //       item.style.color='red'

// // }
//   })
// });


























//     // const nameitem=eo.target.parentElement.parentElement.parentElement.querySelector("h1").innerText;
//     // const srcitem=eo.target.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector("img").src;    
//     