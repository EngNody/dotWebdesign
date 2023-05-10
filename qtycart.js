

// body.style.backgroundColor='red'
// ===================================================
// copy menu for mobile
// ===================================================

// function copymenu() {
  
//   // copy inside .dpt-cat to .departments
//   const dptCategory=document.querySelector('.dpt-cat')
//   const dptPlace=document.querySelector('.departments')
//   dptPlace.innerHTML = dptCategory.innerHTML;
  
//   // copy inside nav to nav
//   const mainNav=document.querySelector('.header-nav nav')
//   const navPlace=document.querySelector('.off-canvas nav')
//   navPlace.innerHTML = mainNav.innerHTML;
  
//    // copy .header-top to .thetop-nav
//   const topNav=document.querySelector('.header-top .wrapper')
//   const topPlace=document.querySelector('.thetop-nav')
//   topPlace.innerHTML = topNav.innerHTML;
  
//   }
  
//   copymenu()
  
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
const closeminicart=document.querySelectorAll(".mini-cart .closeminicart")
const theminicart=document.querySelector(".mini-cart")
const ricloseelement=document.querySelectorAll(".ricloseelement")


closeminicart.forEach(item => {
  item.addEventListener("click",(eo) => {
  // eo.target.parentElement.parentElement.style.display="none"
// if (eo.target.parentElement.parentElement.classList.contains("mini-cart show")) {
//   eo.target.parentElement.parentElement.classList.add("show")
//   console.log("hhhhhhhhhhhhhhhhhhhhhhhh")

  eo.target.parentElement.parentElement.remove()

  let theprice=Number(eo.target.parentElement.parentElement.querySelector(".current").innerHTML.replace("$",""));

    thetotal.forEach(item => {
      let sum=Number(item.innerHTML.replace("$",""));
      console.log(sum)

  if (sum>0) {
  let resum= (sum - theprice).toFixed(2)
    item.innerHTML =  `$ ${resum}`;
  }

    })
  eo.preventDefault();
    })

});

// ================================================================

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


// ********************************************************************************
// // ======================================================================
// // write the total for the product in the topin cart page only
// // =====================================================================v


const thetotal=document.querySelectorAll(".thetotal")
console.log(thetotal)
const buybuttons=document.querySelectorAll(".newbutton")
console.log(buybuttons)


buybuttons.forEach(item => {
  
  item.addEventListener("click",(eo) => {

eo.target.setAttribute("disabled","")
// ======================================================================
// write the total for the product in the top
// =====================================================================
    thetotal.forEach(item => {
    let theprice=Number(eo.target.parentElement.parentElement.querySelector(".current").innerHTML.replace("$",""));
    let ourqty=Number(eo.target.parentElement.parentElement.querySelector(".qty-control input").value);
    console.log(ourqty)

    const oursubtotal=(theprice*ourqty).toFixed(2)

    item.innerHTML =`$ ${oursubtotal}`;
    });

  });
});
//***********************************************************************************

// =================================================
// plus & minus buttons
// =================================================
const plus=document.querySelectorAll(".plus")
const minus=document.querySelectorAll(".minus")
// ================ plus ============================
plus.forEach(item => {
  item.addEventListener("click",(eo) => {
let inputplus= Number(eo.target.parentElement.querySelector(".qty-control input").value);
let doplus=inputplus+1;
eo.target.parentElement.querySelector(".qty-control input").value=doplus;
// ==================================================
let theprice=Number(eo.target.parentElement.parentElement.parentElement.querySelector(".current").innerHTML.replace("$",""));
let ourqty=Number(eo.target.parentElement.parentElement.querySelector(".qty-control input").value);
let oursubtotal=(theprice*ourqty);
let finaltotal=eo.target.parentElement.parentElement.parentElement.querySelector(".finaltotal")

finaltotal.innerHTML=`$${oursubtotal}`
// ==================================================
item.parentElement.parentElement.parentElement.querySelector(".newbutton").removeAttribute("disabled")
  })
});
//============== minus ==============================
minus.forEach(item => {
  item.addEventListener("click",(eo) => {
let inputminus=  Number(eo.target.parentElement.querySelector(".qty-control input").value);
let dominus=inputminus-1
if (inputminus>1) {
  eo.target.parentElement.querySelector(".qty-control input").value=dominus
// ==================================================
let theprice=Number(eo.target.parentElement.parentElement.parentElement.querySelector(".current").innerHTML.replace("$",""));
let ourqty=Number(eo.target.parentElement.parentElement.querySelector(".qty-control input").value);
const oursubtotal=(theprice*ourqty)
let finaltotal=eo.target.parentElement.parentElement.parentElement.querySelector(".finaltotal")

finaltotal.innerHTML=`$${oursubtotal}`
// =======================================================
item.parentElement.parentElement.parentElement.querySelector(".newbutton").removeAttribute("disabled")
}
  })
});

// ====================================================================================================
// content cards 
// ==============================================
setInterval(() => {
  const thecartproducts=document.querySelector(".thecartproducts")
  const oneitem=document.querySelectorAll(".oneitem")

  if (oneitem.length==0) {
    thecartproducts.innerHTML=`<tr><td> Not Products found Yet !!! <tr><td> <br> <br>`;
  }
}, 100);

// ======================================================================================================














