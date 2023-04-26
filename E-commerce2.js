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
const divtrigger=document.querySelector(".cart-trigger");

divtrigger.addEventListener('click',(e) => {
  setTimeout(() => {
    if(!divpopup.classList.contains('show')) {
      divpopup.classList.add("show")
    }
  }, 250);
    e.preventDefault();
})

// -------------- auto close by click outside .cart-trigger --------------

document.addEventListener("click",(e) => {
  const isclosest=e.target.closest(divtoshow);
  if (!isclosest && divpopup.classList.contains('show')) {
    divpopup.classList.remove("show");

  }
})


// ==========================================================================
// my red heart
//===========================================================================

const wishlist=document.querySelector(".wishlist")

wishlist.addEventListener("click",() => {

wishlist.classList.toggle("myheart")
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
// ***********************************************************
const ccgg=eo.target.parentElement.parentElement.querySelector(".object-cover a img").src
console.log(ccgg)
const body=document.querySelector("#body")
const allccgg=body.querySelectorAll(".item")
console.log(allccgg)

allccgg.forEach(item => {
  // item.addEventListener("click",(eo) => {
  const ttccgg=item.querySelector("img").src
  console.log(ttccgg)
if (ccgg==ttccgg) {
  eo.target.parentElement.parentElement.parentElement.parentElement.querySelector(".new")
}



  // })
});
// *********************************************************
eo.target.parentElement.parentElement.remove()
  // ****************************************************
// if (eo.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.classList.contains("show")) {
//   console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbb")
//   // eo.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add("show")
//   minicart.classList.add("show")
// }

    }
  })
// =================== in cart page only=============================================

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
console.log(thetotal)
const buybuttons=document.querySelectorAll(".newbutton")
console.log(buybuttons)


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