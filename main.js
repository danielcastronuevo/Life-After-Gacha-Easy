const mediaItems = document.querySelector(".media_item")
const media = document.querySelector(".media")

const showLoading = document.querySelector(".show_loading")

window.addEventListener("load",()=>{
  // mediaItems.style.display = `none`
  // media.style.display = `none`
  // showLoading.style.display = `none`
  setTimeout(() => {
    showLoading.removeChild(media)
    showLoading.style.display=`none`
  }, 500);
  
})




const showOn = document.querySelector(".show_on")

// showOn.style.display =`none` 






























const topNavButtons = document.querySelectorAll(".top_nav_buttons");

// topNavButtons.forEach((topNavButton) => {
//   topNavButton.addEventListener("focus", () => {
//     topNavButton.innerHTML = ``;
//   });
//   topNavButton.addEventListener("blur", () => {
//     topNavButton.innerHTML = topNavButton.value;
//   });
// });

// document.querySelector('button[id="top_nav_buttons1"]')

const topNavButton1 = document.querySelector('button[id="top_nav_buttons1"]')
const topNavButton2 = document.querySelector('button[id="top_nav_buttons2"]')
const topNavButton3 = document.querySelector('button[id="top_nav_buttons3"]')
const topNavButton4 = document.querySelector('button[id="top_nav_buttons4"]')

const defaultCssTextTopNavButtons = `
background-image: none;
background-size: none;
box-shadow: none;
height: 50px;`





const developmentSectionRelative = document.querySelector(".under_development_section_relative")

const InventorySection = document.querySelector(".inventory_section")

const sideNav = document.querySelector(".side_nav")

const sideNavButtonBack = document.querySelector(".button_back")

const gachaSection = document.querySelector(".voy_gacha")


topNavButtons.forEach((topNavButton) => {
  topNavButton.addEventListener("click", () => {
    
    topNavButton.innerHTML = ``;

    if(topNavButton.id == `top_nav_buttons1`){

        sideNavButton1.style.cssText = `
        background: rgb(163,121,93);
        border: 1px solid rgb(216,180,131);
        color: #ffe4aa;`

        sideNavButton2.style.cssText = defaultCssTextSideNavButtons
        sideNavButton3.style.cssText = defaultCssTextSideNavButtons
        sideNavButton4.style.cssText = defaultCssTextSideNavButtons
        sideNavButton5.style.cssText = defaultCssTextSideNavButtons
        sideNavButton6.style.cssText = defaultCssTextSideNavButtons

        sideNav.style.display = `flex`
        sideNavButtonBack.style.display = `flex`
        developmentSectionRelative.style.display = `none`
        gachaSection.style.display = `flex`
        InventorySection.style.display = `none`

        topNavInventoryButton.style.color = `#ffffff31`
        topNavInventoryButtonOpen = false

        topNavButton.style.cssText = `
        background-image: url(assets/nav/topdeals.png);
        background-size: 100% 100%;
        box-shadow: 0 0 5px #000000b4;
        height: 53px;`

        topNavButton2.style.cssText = defaultCssTextTopNavButtons
        topNavButton2.innerHTML = topNavButton2.value;

        topNavButton3.style.cssText = defaultCssTextTopNavButtons
        topNavButton3.innerHTML = topNavButton3.value;

        topNavButton4.style.cssText = defaultCssTextTopNavButtons
        topNavButton4.innerHTML = topNavButton4.value;

    }
    else if(topNavButton.id == `top_nav_buttons2`){

      developmentSectionRelative.style.display = `flex`
      sideNav.style.display = `none`
      sideNavButtonBack.style.display = `none`
      gachaSection.style.display = `none`
      InventorySection.style.display = `none`

      topNavInventoryButton.style.color = `#ffffff31`
      topNavInventoryButtonOpen = false

      topNavButton.style.cssText = `
      background-image: url(assets/nav/topup.png);
      background-size: 100% 100%;
      box-shadow: 0 0 5px #000000b4;
      height: 53px;`

      topNavButton1.style.cssText = defaultCssTextTopNavButtons
      topNavButton1.innerHTML = topNavButton1.value;

      topNavButton3.style.cssText = defaultCssTextTopNavButtons
      topNavButton3.innerHTML = topNavButton3.value;

      topNavButton4.style.cssText = defaultCssTextTopNavButtons
      topNavButton4.innerHTML = topNavButton4.value;
  }
  else if(topNavButton.id == `top_nav_buttons3`){

    developmentSectionRelative.style.display = `flex`
    sideNav.style.display = `none`
    sideNavButtonBack.style.display = `none`
    gachaSection.style.display = `none`
    InventorySection.style.display = `none`

    topNavInventoryButton.style.color = `#ffffff31`
    topNavInventoryButtonOpen = false

    topNavButton.style.cssText = `
    background-image: url(assets/nav/furniture.png);
    background-size: 100% 100%;
    box-shadow: 0 0 5px #000000b4;
    height: 53px;`

    topNavButton1.style.cssText = defaultCssTextTopNavButtons
    topNavButton1.innerHTML = topNavButton1.value;

    topNavButton2.style.cssText = defaultCssTextTopNavButtons
    topNavButton2.innerHTML = topNavButton2.value;

    topNavButton4.style.cssText = defaultCssTextTopNavButtons
    topNavButton4.innerHTML = topNavButton4.value;
}
else if(topNavButton.id == `top_nav_buttons4`){

  developmentSectionRelative.style.display = `flex`
  sideNav.style.display = `none`
  sideNavButtonBack.style.display = `none`
  gachaSection.style.display = `none`
  InventorySection.style.display = `none`

  topNavInventoryButton.style.color = `#ffffff31`
  topNavInventoryButtonOpen = false

  topNavButton.style.cssText = `
  background-image: url(assets/nav/fashion.png);
  background-size: 100% 100%;
  box-shadow: 0 0 5px #000000b4;
  height: 53px;`

  topNavButton1.style.cssText = defaultCssTextTopNavButtons
  topNavButton1.innerHTML = topNavButton1.value;

  topNavButton2.style.cssText = defaultCssTextTopNavButtons
  topNavButton2.innerHTML = topNavButton2.value;

  topNavButton3.style.cssText = defaultCssTextTopNavButtons
  topNavButton3.innerHTML = topNavButton3.value;
}
  });
});



const topNavInventoryButton = document.querySelector(".top_nav_inventory")

let topNavInventoryButtonOpen = false

topNavInventoryButton.addEventListener("click",()=>{
  if (topNavInventoryButtonOpen == false){
    topNavInventoryButton.style.color = `#eee`

    topNavButton1.style.cssText = defaultCssTextTopNavButtons
    topNavButton1.innerHTML = topNavButton1.value;

    topNavButton2.style.cssText = defaultCssTextTopNavButtons
    topNavButton2.innerHTML = topNavButton2.value;

    topNavButton3.style.cssText = defaultCssTextTopNavButtons
    topNavButton3.innerHTML = topNavButton3.value;

    topNavButton4.style.cssText = defaultCssTextTopNavButtons
    topNavButton4.innerHTML = topNavButton4.value;

    gachaSection.style.display = `none`
    developmentSectionRelative.style.display = `none`
    InventorySection.style.display = `flex`

    newNotificationInventory.style.display = `none`
    newNotificationTopNav.style.display = `none`

    sideNavButton1.style.cssText = defaultCssTextSideNavButtons
    sideNavButton2.style.cssText = defaultCssTextSideNavButtons
    sideNavButton3.style.cssText = defaultCssTextSideNavButtons
    sideNavButton5.style.cssText = defaultCssTextSideNavButtons
    sideNavButton6.style.cssText = defaultCssTextSideNavButtons

    sideNavButton4.style.cssText = `
    background: rgb(163,121,93);
    border: 1px solid rgb(216,180,131);
    color: #ffe4aa;`

    topNavInventoryButtonOpen = true
  }
  else{
    topNavInventoryButton.style.color = `#ffffff31`
    topNavInventoryButtonOpen = false

    developmentSectionRelative.style.display = `none`
    gachaSection.style.display = `flex`
    InventorySection.style.display = `none`
  }
})







const sideNavButtons = document.querySelectorAll(".menu_select");

const sideNavButton1 = document.querySelector('button[id="side_nav_buttons1"]')
const sideNavButton2 = document.querySelector('button[id="side_nav_buttons2"]')
const sideNavButton3 = document.querySelector('button[id="side_nav_buttons3"]')
const sideNavButton4 = document.querySelector('button[id="side_nav_buttons4"]')
const sideNavButton5 = document.querySelector('button[id="side_nav_buttons5"]')
const sideNavButton6 = document.querySelector('button[id="side_nav_buttons6"]')


const newNotificationInventory = document.querySelector(".new_notification")
const newNotificationTopNav = document.querySelector(".responsive_notification")

const defaultCssTextSideNavButtons = `
background: none;
border: none;
color: rgb(26, 26, 26);
border-bottom: 1px solid rgb(119, 119, 119);
border-right: none;
border-left: none;
`



sideNavButtons.forEach(sideNavButton => {
  sideNavButton.addEventListener("click",()=>{

    if(sideNavButton.id == `side_nav_buttons1`){

      gachaSection.style.display = `flex`
      developmentSectionRelative.style.display = `none`
      InventorySection.style.display = `none`

      topNavInventoryButton.style.color = `#ffffff31`
      topNavInventoryButtonOpen = false

      sideNavButton2.style.cssText = defaultCssTextSideNavButtons
      sideNavButton3.style.cssText = defaultCssTextSideNavButtons
      sideNavButton4.style.cssText = defaultCssTextSideNavButtons
      sideNavButton5.style.cssText = defaultCssTextSideNavButtons
      sideNavButton6.style.cssText = defaultCssTextSideNavButtons

      sideNavButton.style.cssText = `
      background: rgb(163,121,93);
      border: 1px solid rgb(216,180,131);
      color: #ffe4aa;`
    }
    else if(sideNavButton.id == `side_nav_buttons2`){

      gachaSection.style.display = `none`
      developmentSectionRelative.style.display = `flex`
      InventorySection.style.display = `none`

      topNavInventoryButton.style.color = `#ffffff31`
      topNavInventoryButtonOpen = false

      sideNavButton1.style.cssText = defaultCssTextSideNavButtons
      sideNavButton3.style.cssText = defaultCssTextSideNavButtons
      sideNavButton4.style.cssText = defaultCssTextSideNavButtons
      sideNavButton5.style.cssText = defaultCssTextSideNavButtons
      sideNavButton6.style.cssText = defaultCssTextSideNavButtons

      sideNavButton.style.cssText = `
      background: rgb(163,121,93);
      border: 1px solid rgb(216,180,131);
      color: #ffe4aa;`
    }

    else if(sideNavButton.id == `side_nav_buttons3`){

      gachaSection.style.display = `none`
      developmentSectionRelative.style.display = `flex`
      InventorySection.style.display = `none`

      topNavInventoryButton.style.color = `#ffffff31`
      topNavInventoryButtonOpen = false

      sideNavButton1.style.cssText = defaultCssTextSideNavButtons
      sideNavButton2.style.cssText = defaultCssTextSideNavButtons
      sideNavButton4.style.cssText = defaultCssTextSideNavButtons
      sideNavButton5.style.cssText = defaultCssTextSideNavButtons
      sideNavButton6.style.cssText = defaultCssTextSideNavButtons

      sideNavButton.style.cssText = `
      background: rgb(163,121,93);
      border: 1px solid rgb(216,180,131);
      color: #ffe4aa;`
    }

    else if(sideNavButton.id == `side_nav_buttons4`){

      gachaSection.style.display = `none`
      developmentSectionRelative.style.display = `none`
      InventorySection.style.display = `flex`

      newNotificationInventory.style.display = `none`
      newNotificationTopNav.style.display = `none`

      topNavInventoryButton.style.color = `#eee`
      topNavInventoryButtonOpen = true

      sideNavButton1.style.cssText = defaultCssTextSideNavButtons
      sideNavButton2.style.cssText = defaultCssTextSideNavButtons
      sideNavButton3.style.cssText = defaultCssTextSideNavButtons
      sideNavButton5.style.cssText = defaultCssTextSideNavButtons
      sideNavButton6.style.cssText = defaultCssTextSideNavButtons

      sideNavButton.style.cssText = `
      background: rgb(163,121,93);
      border: 1px solid rgb(216,180,131);
      color: #ffe4aa;`
    }

    else if(sideNavButton.id == `side_nav_buttons5`){

      gachaSection.style.display = `none`
      developmentSectionRelative.style.display = `flex`
      InventorySection.style.display = `none`

      topNavInventoryButton.style.color = `#ffffff31`
      topNavInventoryButtonOpen = false

      sideNavButton1.style.cssText = defaultCssTextSideNavButtons
      sideNavButton2.style.cssText = defaultCssTextSideNavButtons
      sideNavButton3.style.cssText = defaultCssTextSideNavButtons
      sideNavButton4.style.cssText = defaultCssTextSideNavButtons
      sideNavButton6.style.cssText = defaultCssTextSideNavButtons

      sideNavButton.style.cssText = `
      background: rgb(163,121,93);
      border: 1px solid rgb(216,180,131);
      color: #ffe4aa;`
    }

    else if(sideNavButton.id == `side_nav_buttons6`){

      gachaSection.style.display = `none`
      developmentSectionRelative.style.display = `flex`
      InventorySection.style.display = `none`

      topNavInventoryButton.style.color = `#ffffff31`
      topNavInventoryButtonOpen = false

      sideNavButton1.style.cssText = defaultCssTextSideNavButtons
      sideNavButton2.style.cssText = defaultCssTextSideNavButtons
      sideNavButton3.style.cssText = defaultCssTextSideNavButtons
      sideNavButton4.style.cssText = defaultCssTextSideNavButtons
      sideNavButton5.style.cssText = defaultCssTextSideNavButtons

      sideNavButton.style.cssText = `
      background: rgb(163,121,93);
      border: 1px solid rgb(216,180,131);
      color: #ffe4aa;`
    }
    }
  )
})













// INVENTORY

const inventoryNotificationBar = document.querySelector(".notification_bar")

inventoryNotificationBar.innerHTML = `<p>11:34</p>`










const inventoryItemsContainer = document.querySelector(".Inventory_grid_container")

const inventoryItemsEmptyContainer = document.querySelector(".Inventory_grid_container_empty")

const inventoryItem00 = document.querySelector(".inventory_item0");
const inventoryItem01 = document.querySelector(".inventory_item1");
const inventoryItem02 = document.querySelector(".inventory_item2");
const inventoryItem03 = document.querySelector(".inventory_item3");
const inventoryItem04 = document.querySelector(".inventory_item4");
const inventoryItem05 = document.querySelector(".inventory_item5");
const inventoryItem06 = document.querySelector(".inventory_item6");
const inventoryItem07 = document.querySelector(".inventory_item7");
const inventoryItem08 = document.querySelector(".inventory_item8");
const inventoryItem09 = document.querySelector(".inventory_item9");
const inventoryItem11 = document.querySelector(".inventory_item11");
const inventoryItem12 = document.querySelector(".inventory_item12");
const inventoryItem13 = document.querySelector(".inventory_item13");
const inventoryItem14 = document.querySelector(".inventory_item14");
const inventoryItem15 = document.querySelector(".inventory_item15");
const inventoryItem16 = document.querySelector(".inventory_item16");
const inventoryItem17 = document.querySelector(".inventory_item17");
const inventoryItem18 = document.querySelector(".inventory_item18");
const inventoryItem19 = document.querySelector(".inventory_item19");

const inventoryItem20 = document.querySelector(".inventory_item20");
const inventoryItem21 = document.querySelector(".inventory_item21");
const inventoryItem22 = document.querySelector(".inventory_item22");
const inventoryItem23 = document.querySelector(".inventory_item23");

const inventoryCounterItem00 = document.querySelector(".inventory_counter_item0");
const inventoryCounterItem01 = document.querySelector(".inventory_counter_item1");
const inventoryCounterItem02 = document.querySelector(".inventory_counter_item2");
const inventoryCounterItem03 = document.querySelector(".inventory_counter_item3");
const inventoryCounterItem04 = document.querySelector(".inventory_counter_item4");
const inventoryCounterItem05 = document.querySelector(".inventory_counter_item5");
const inventoryCounterItem06 = document.querySelector(".inventory_counter_item6");
const inventoryCounterItem07 = document.querySelector(".inventory_counter_item7");
const inventoryCounterItem08 = document.querySelector(".inventory_counter_item8");
const inventoryCounterItem09 = document.querySelector(".inventory_counter_item9");
const inventoryCounterItem11 = document.querySelector(".inventory_counter_item11");
const inventoryCounterItem12 = document.querySelector(".inventory_counter_item12");
const inventoryCounterItem13 = document.querySelector(".inventory_counter_item13");
const inventoryCounterItem14 = document.querySelector(".inventory_counter_item14");
const inventoryCounterItem15 = document.querySelector(".inventory_counter_item15");
const inventoryCounterItem16 = document.querySelector(".inventory_counter_item16");
const inventoryCounterItem17 = document.querySelector(".inventory_counter_item17");
const inventoryCounterItem18 = document.querySelector(".inventory_counter_item18");
const inventoryCounterItem19 = document.querySelector(".inventory_counter_item19");

const inventoryCounterItem20 = document.querySelector(".inventory_counter_item20");
const inventoryCounterItem21 = document.querySelector(".inventory_counter_item21");
const inventoryCounterItem22 = document.querySelector(".inventory_counter_item22");
const inventoryCounterItem23 = document.querySelector(".inventory_counter_item23");


const goldBarsContainer = document.querySelector(".goldbars_container") 
const skillPointsContainer = document.querySelector(".skillpoints_container") 
const newDollarsContainer = document.querySelector(".newdollars_container") 

const goldBarsK = document.querySelector(".mobile_gb_k")

addToInventory = (itemFromGacha) => {

  if(itemFromGacha.idForInventory == 5){
    inventoryItem20.style.display = `block`
    inventoryCounterItem20.innerHTML = parseInt(inventoryCounterItem20.innerHTML) + parseInt(itemFromGacha.amount)
    newNotificationInventory.style.display = `flex`
    newNotificationTopNav.style.display = `flex`
  }

  else if(itemFromGacha.idForInventory == 4){
    inventoryItem21.style.display = `block`
    inventoryCounterItem21.innerHTML = parseInt(inventoryCounterItem21.innerHTML) + parseInt(itemFromGacha.amount)
    newNotificationInventory.style.display = `flex`
    newNotificationTopNav.style.display = `flex`
  }

  else if(itemFromGacha.idForInventory == 3){
    inventoryItem22.style.display = `block`
    inventoryCounterItem22.innerHTML = parseInt(inventoryCounterItem22.innerHTML) + parseInt(itemFromGacha.amount)
    newNotificationInventory.style.display = `flex`
    newNotificationTopNav.style.display = `flex`
  }

  else if(itemFromGacha.idForInventory == 1){
    inventoryItem23.style.display = `block`
    inventoryCounterItem23.innerHTML = parseInt(inventoryCounterItem23.innerHTML) + parseInt(itemFromGacha.amount)
    newNotificationInventory.style.display = `flex`
    newNotificationTopNav.style.display = `flex`
  }

  else if(itemFromGacha.id == 11 || itemFromGacha.idForInventory == 2){
    inventoryItem11.style.display = `block`
        inventoryCounterItem11.innerHTML = parseInt(inventoryCounterItem11.innerHTML) + parseInt(itemFromGacha.amount)
        newNotificationInventory.style.display = `flex`
        newNotificationTopNav.style.display = `flex`
  }

  else if(itemFromGacha.id == 0){
    inventoryItem00.style.display = `block`
        inventoryCounterItem00.innerHTML = parseInt(inventoryCounterItem00.innerHTML) + parseInt(itemFromGacha.amount)
        newNotificationInventory.style.display = `flex`
        newNotificationTopNav.style.display = `flex`
  }
  else if(itemFromGacha.id == 1){
    inventoryItem01.style.display = `block`
        inventoryCounterItem01.innerHTML = parseInt(inventoryCounterItem01.innerHTML) + parseInt(itemFromGacha.amount)
        newNotificationInventory.style.display = `flex`
        newNotificationTopNav.style.display = `flex`
  }
  else if(itemFromGacha.id == 2){
    inventoryItem02.style.display = `block`
        inventoryCounterItem02.innerHTML = parseInt(inventoryCounterItem02.innerHTML) + parseInt(itemFromGacha.amount)
        newNotificationInventory.style.display = `flex`
        newNotificationTopNav.style.display = `flex`
  }
  else if(itemFromGacha.id == 3){
    inventoryItem03.style.display = `block`
        inventoryCounterItem03.innerHTML = parseInt(inventoryCounterItem03.innerHTML) + parseInt(itemFromGacha.amount)
        newNotificationInventory.style.display = `flex`
        newNotificationTopNav.style.display = `flex`
  }
  else if(itemFromGacha.id == 4){
    inventoryItem04.style.display = `block`
        inventoryCounterItem04.innerHTML = parseInt(inventoryCounterItem04.innerHTML) + parseInt(itemFromGacha.amount)
        newNotificationInventory.style.display = `flex`
        newNotificationTopNav.style.display = `flex`
  }
  else if(itemFromGacha.id == 5){
    inventoryItem05.style.display = `block`
        inventoryCounterItem05.innerHTML = parseInt(inventoryCounterItem05.innerHTML) + parseInt(itemFromGacha.amount)
        newNotificationInventory.style.display = `flex`
        newNotificationTopNav.style.display = `flex`
  }
  else if(itemFromGacha.id == 6){
    inventoryItem06.style.display = `block`
        inventoryCounterItem06.innerHTML = parseInt(inventoryCounterItem06.innerHTML) + parseInt(itemFromGacha.amount)
        newNotificationInventory.style.display = `flex`
        newNotificationTopNav.style.display = `flex`
  }
  else if(itemFromGacha.id == 7){
    inventoryItem07.style.display = `block`
        inventoryCounterItem07.innerHTML = parseInt(inventoryCounterItem07.innerHTML) + parseInt(itemFromGacha.amount)
        newNotificationInventory.style.display = `flex`
        newNotificationTopNav.style.display = `flex`
  }
  else if(itemFromGacha.id == 8){
    inventoryItem08.style.display = `block`
        inventoryCounterItem08.innerHTML = parseInt(inventoryCounterItem08.innerHTML) + parseInt(itemFromGacha.amount)
        newNotificationInventory.style.display = `flex`
        newNotificationTopNav.style.display = `flex`
  }
  else if(itemFromGacha.id == 9){
    inventoryItem09.style.display = `block`
        inventoryCounterItem09.innerHTML = parseInt(inventoryCounterItem09.innerHTML) + parseInt(itemFromGacha.amount)
        newNotificationInventory.style.display = `flex`
        newNotificationTopNav.style.display = `flex`
  }
  else if(itemFromGacha.id == 12){
    inventoryItem12.style.display = `block`
        inventoryCounterItem12.innerHTML = parseInt(inventoryCounterItem12.innerHTML) + parseInt(itemFromGacha.amount)
        newNotificationInventory.style.display = `flex`
        newNotificationTopNav.style.display = `flex`
  }
  else if(itemFromGacha.id == 13){
    inventoryItem13.style.display = `block`
        inventoryCounterItem13.innerHTML = parseInt(inventoryCounterItem13.innerHTML) + parseInt(itemFromGacha.amount)
        newNotificationInventory.style.display = `flex`
        newNotificationTopNav.style.display = `flex`
  }
  else if(itemFromGacha.id == 14){
    inventoryItem14.style.display = `block`
        inventoryCounterItem14.innerHTML = parseInt(inventoryCounterItem14.innerHTML) + parseInt(itemFromGacha.amount)
        newNotificationInventory.style.display = `flex`
        newNotificationTopNav.style.display = `flex`
  }
  else if(itemFromGacha.id == 15){
    inventoryItem15.style.display = `block`
        inventoryCounterItem15.innerHTML = parseInt(inventoryCounterItem15.innerHTML) + parseInt(itemFromGacha.amount)
        newNotificationInventory.style.display = `flex`
        newNotificationTopNav.style.display = `flex`
  }
  else if(itemFromGacha.id == 16){
    inventoryItem16.style.display = `block`
        inventoryCounterItem16.innerHTML = parseInt(inventoryCounterItem16.innerHTML) + parseInt(itemFromGacha.amount)
        newNotificationInventory.style.display = `flex`
        newNotificationTopNav.style.display = `flex`
  }
  else if(itemFromGacha.id == 17){
    inventoryItem17.style.display = `block`
        inventoryCounterItem17.innerHTML = parseInt(inventoryCounterItem17.innerHTML) + parseInt(itemFromGacha.amount)
        newNotificationInventory.style.display = `flex`
        newNotificationTopNav.style.display = `flex`
  }
  else if(itemFromGacha.id == 18){
    inventoryItem18.style.display = `block`
        inventoryCounterItem18.innerHTML = parseInt(inventoryCounterItem18.innerHTML) + parseInt(itemFromGacha.amount)
        newNotificationInventory.style.display = `flex`
        newNotificationTopNav.style.display = `flex`
  }
  else if(itemFromGacha.id == 19){
    inventoryItem19.style.display = `block`
    inventoryCounterItem19.innerHTML = parseInt(inventoryCounterItem19.innerHTML) + parseInt(itemFromGacha.amount)
    newNotificationInventory.style.display = `flex`
    newNotificationTopNav.style.display = `flex`
  }

  else if(itemFromGacha.id == 20){
    skillPointsContainer.innerHTML = parseInt(skillPointsContainer.innerHTML) + parseInt(itemFromGacha.amount)
  }

  else if(itemFromGacha.id == 21){
    newDollarsContainer.innerHTML = parseInt(newDollarsContainer.innerHTML) + parseInt(itemFromGacha.amount)
  }

  else if(itemFromGacha.id == 10){
    goldBarsK.style.display = `block`
    goldBarsContainer.innerHTML = parseInt(goldBarsContainer.innerHTML) + parseInt(itemFromGacha.amount) - 49950
  }
}





















































const plusCredits = document.querySelector(".plus_fed_credits");
let fedSunContainer = document.querySelector(".fed_credits");

plusCredits.addEventListener("click", () => {
  let addSuns = setInterval(() => {
    fedSunContainer.innerHTML = parseInt(fedSunContainer.innerHTML) + 1;
    modalFedsCreditsLeft.innerHTML = fedSunContainer.innerHTML
  }, 5);
  setTimeout(() => {
    clearInterval(addSuns)
  }, 2000);
});


const plusChecks = document.querySelector(".plus_fed_check");
const modalExchangeFedsContainer = document.querySelector(".modal_exchange_fed_check_container")
const closeModal = document.querySelector(".close_modal")
const modalExchangeFeds = document.querySelector(".modal_exchange_fed_check")
const amountChecksToBuy = document.querySelector(".amount_feds_checks_to_buy")
const amountChecksToBuyResult = document.querySelector(".modal_feds_check_result")
const modalFedsCreditsLeft = document.querySelector(".modal_feds_credits_left")
const modalMinusAmountFeds = document.querySelector(".modal_subtract_amount_feds")
const modalPlusAmountFeds = document.querySelector(".modal_add_amount_feds")
const modalConfirmExchangeButton = document.querySelector(".modal_confirm_exchange")
const modalExitExcangeButton = document.querySelector(".modal_exit_exchange")
const fedCheckContainer = document.querySelector(".fed_check");


// ABRIR MODAL
plusChecks.addEventListener("click", () => {
  modalFedsCreditsLeft.innerHTML = fedSunContainer.innerHTML
  modalExchangeFedsContainer.style.display = `flex`
});

modalExchangeFeds.addEventListener("click", () => {
  modalExchangeFedsContainer.style.display = `flex`
});

// CERRAR MODAL
closeModal.addEventListener("click", () => {
  modalExchangeFedsContainer.style.display = `none`
});

// BOTON CONFIRMAR EXCHANGE
modalConfirmExchangeButton.addEventListener("click",()=>{
  fedCheckContainer.innerHTML = parseInt(fedCheckContainer.innerHTML) + parseInt(amountChecksToBuyResult.innerHTML)

  fedSunContainer.innerHTML = parseInt(fedSunContainer.innerHTML) - parseInt(amountChecksToBuyResult.innerHTML)

  modalFedsCreditsLeft.innerHTML = fedSunContainer.innerHTML

  amountChecksToBuyResult.innerHTML = 0
  amountChecksToBuy.innerHTML = 0

  if (parseInt(fedSunContainer.innerHTML) < 0){
    fedSunContainer.innerHTML = 0
  }
})

// BOTON RESTAR
modalMinusAmountFeds.addEventListener("click",()=>{

  if(parseInt(amountChecksToBuy.innerHTML) <= 0){
    amountChecksToBuy.innerHTML = 0
  }
  else{
    amountChecksToBuy.innerHTML = parseInt(amountChecksToBuy.innerHTML) - 1
  }
  amountChecksToBuyResult.innerHTML = amountChecksToBuy.innerHTML
})



// BOTON SUMAR
modalPlusAmountFeds.addEventListener("click",()=>{

  let addChecks = setInterval(() => {

    if(parseInt(amountChecksToBuy.innerHTML) >= parseInt(modalFedsCreditsLeft.innerHTML)){
      clearInterval(addChecks)
      amountChecksToBuy.innerHTML = parseInt(modalFedsCreditsLeft.innerHTML)
      amountChecksToBuyResult.innerHTML = amountChecksToBuy.innerHTML
    }

    else{
      amountChecksToBuy.innerHTML = parseInt(amountChecksToBuy.innerHTML) + 10
      modalFedsCreditsLeft.innerHTML = fedSunContainer.innerHTML
      amountChecksToBuyResult.innerHTML = amountChecksToBuy.innerHTML
    }
  }, 5);
  setTimeout(() => {
    clearInterval(addChecks)
  }, 2000);
amountChecksToBuyResult.innerHTML = amountChecksToBuy.innerHTML
})















const items = [
  {
    id: 0,
    name: "<p>Custom Modification Optional Chest + 1</p>",
    item: `<img src="assets/items/resource_box.png">`,
    idForInventory : 1,
    amount: "1",
  },
  {
    id: 1,
    name: "<p>Formula Shard + 600</p>",
    item: `<img src="assets/items/formula_shard.png">`,
    idForInventory : 2,
    amount: "600",
  },
  {
    id: 2,
    name: "<p>Memory Material I + 15</p>",
    item: `<img src="assets/items/memory_material_I.png">`,
    idForInventory : 3,
    amount: "15",
  },
  {
    id: 3,
    name: "<p>Photoetching Pen + 10</p>",
    item: `<img src="assets/items/photoetching_pen.png">`,
    idForInventory : 4,
    amount: "10",
  },
  {
    id: 4,
    name: "<p>Aviation Wrench + 2</p>",
    item: `<img src="assets/items/aviation_wrench.png">`,
    idForInventory : 5,
    amount: "2",
  },
];

const buttonOpenOne = document.querySelector(".button_open_one");
const buttonOpenFive = document.querySelector(".button_open_five");

const itemBoxes = document.querySelectorAll(".toy_counter_boxes");
const itemBox1 = document.querySelector(".toy_counter_box_1");
const itemBox2 = document.querySelector(".toy_counter_box_2");
const itemBox3 = document.querySelector(".toy_counter_box_3");
const itemBox4 = document.querySelector(".toy_counter_box_4");
const itemBox5 = document.querySelector(".toy_counter_box_5");

let claimable1 = undefined;
let claimable2 = undefined;
let claimable3 = undefined;
let claimable4 = undefined;
let claimable5 = undefined;

let claimed1 = false;
let claimed2 = false;
let claimed3 = false;
let claimed4 = false;
let claimed5 = false;

let voyClaimable1 = document.querySelector(".voy_claimable1");
let voyClaimable2 = document.querySelector(".voy_claimable2");
let voyClaimable3 = document.querySelector(".voy_claimable3");
let voyClaimable4 = document.querySelector(".voy_claimable4");
let voyClaimable5 = document.querySelector(".voy_claimable5");

let voyCheck1 = document.querySelector(".voy_check1");
let voyCheck2 = document.querySelector(".voy_check2");
let voyCheck3 = document.querySelector(".voy_check3");
let voyCheck4 = document.querySelector(".voy_check4");
let voyCheck5 = document.querySelector(".voy_check5");













const progressLine = document.querySelector(".progress_line");

let progressLineNumber = -41;








buttonOpenOne.addEventListener("click", () => {

  if(parseInt(fedCheckContainer.innerHTML) > 120){
    progressLineNumber = progressLineNumber + 1;
    progressLine.style.height = `${progressLineNumber}px`;

    verifyProgress();

    spendCounter.innerHTML = parseInt(spendCounter.innerHTML) + 120

    openBox(1);

    fedCheckContainer.innerHTML = parseInt(fedCheckContainer.innerHTML) - 120
  }
  else{
    modalFedsCreditsLeft.innerHTML = fedSunContainer.innerHTML
    modalExchangeFedsContainer.style.display = `flex`
  }


});


buttonOpenFive.addEventListener("click", () => {

  if(parseInt(fedCheckContainer.innerHTML) > 500){
  progressLineNumber = progressLineNumber + 5;
  progressLine.style.height = `${progressLineNumber}px`;

  verifyProgress();

  spendCounter.innerHTML = parseInt(spendCounter.innerHTML) + 500

  openBox(5);

  fedCheckContainer.innerHTML = parseInt(fedCheckContainer.innerHTML) - 500
  }
  else{
    modalFedsCreditsLeft.innerHTML = fedSunContainer.innerHTML
    modalExchangeFedsContainer.style.display = `flex`
  }
});




let spendCounter = document.querySelector(".spend_counter");








const verifyProgress = () => {
  if (progressLineNumber >= -1 && progressLineNumber < 39) {
    itemBox5.style.background = `#B99763`;
    itemBox5.style.border = `1px solid #D6B387`;

    if (claimed5 === false) {
      claimable5 = true;
      verifyClaimable();
    }
  } else if (progressLineNumber >= 39 && progressLineNumber < 79) {
    itemBox4.style.background = `#B99763`;
    itemBox4.style.border = `1px solid #D6B387`;

    if (claimed4 == false) {
      claimable4 = true;
      verifyClaimable();
    }
  } else if (progressLineNumber >= 79 && progressLineNumber < 118) {
    itemBox3.style.background = `#B99763`;
    itemBox3.style.border = `1px solid #D6B387`;

    if (claimed3 == false) {
      claimable3 = true;
      verifyClaimable();
    }
  } else if (progressLineNumber > 118 && progressLineNumber < 159) {
    itemBox2.style.background = `#B99763`;
    itemBox2.style.border = `1px solid #D6B387`;

    if (claimed2 == false) {
      claimable2 = true;
      verifyClaimable();
    }
  } else if (progressLineNumber > 158 && progressLineNumber < 170) {
    itemBox1.style.background = `#B99763`;
    itemBox1.style.border = `1px solid #D6B387`;

    if (claimed1 == false) {
      claimable1 = true;
      verifyClaimable();
    }
  } else if (progressLineNumber > 170) {
    progressLineNumber = 170;
  }
};

const verifyClaimable = () => {
  if (claimable1 == true) {
    voyClaimable1.style.display = "block";
    itemBox1.style.cursor = `pointer`;
  } else if (claimable2 == true) {
    voyClaimable2.style.display = "block";
    itemBox2.style.cursor = `pointer`;
  } else if (claimable3 == true) {
    voyClaimable3.style.display = "block";
    itemBox3.style.cursor = `pointer`;
  } else if (claimable4 == true) {
    voyClaimable4.style.display = "block";
    itemBox4.style.cursor = `pointer`;
  } else if (claimable5 == true) {
    voyClaimable5.style.display = "block";
    itemBox5.style.cursor = `pointer`;
  }
};

itemBoxes.forEach((itembox) => {
  itembox.addEventListener("click", () => {
    if (claimable1 == true) {
      if (itembox.getAttribute("value") == 1) {

        if (claimed1 == false){
          voyCheck1.style.display = `block`;
          voyClaimable1.style.display = "none";
          itemBox1.style.cursor = `auto`;

          claimItem(items[0]);

          addToInventory(items[0])

          claimed1 = true;
        }
      }
    }
    if (claimable2 == true) {
      if (itembox.getAttribute("value") == 2) {

        if (claimed2 == false){
          voyCheck2.style.display = `block`;
          voyClaimable2.style.display = "none";
          itemBox2.style.cursor = `auto`;

          claimItem(items[2]);

          addToInventory(items[2])

          claimed2 = true;

        }
      }
    }
    if (claimable3 == true) {
      if (itembox.getAttribute("value") == 3) {

        if (claimed3 == false){
          voyCheck3.style.display = `block`;
          voyClaimable3.style.display = "none";
          itemBox3.style.cursor = `auto`;

          claimItem(items[1]);

          addToInventory(items[1])

          claimed3 = true;

        }
      }
    }
    if (claimable4 == true) {
      if (itembox.getAttribute("value") == 4) {

        if (claimed4 == false){
          voyCheck4.style.display = `block`;
          voyClaimable4.style.display = "none";
          itemBox4.style.cursor = `auto`;

          claimItem(items[3]);

          addToInventory(items[3])

          claimed4 = true;

        }
      }
    }
    if (claimable5 == true) {
      if (itembox.getAttribute("value") == 5) {

        if (claimed5 == false){
          voyCheck5.style.display = `block`;
          voyClaimable5.style.display = "none";
          itemBox5.style.cursor = `auto`;
  
          claimItem(items[4]);

          addToInventory(items[4])
  
          claimed5 = true;
        }
      }
    }
  });
});

// const claimItem = (obj) => {
//     itemBox1.innerHTML = obj.item
// }

// claimItem(items[0])

const claimItemContainer = document.querySelector(".claim_item_container");
const claimItemDisplay = document.querySelector(".claim_item");

let clearItemDisplay = undefined;

const claimItem = (obj) => {
  claimItemContainer.style.display = `flex`
  clearTimeout(clearItemDisplay);
  claimItemDisplay.style.animationName = `undefined`;
  setTimeout(() => {
    claimItemDisplay.style.animationName = `claim_item`;
    clearItemDisplay = setTimeout(() => {
      claimItemDisplay.style.animationName = `undefined`;
      claimItemContainer.style.display = `none`
    }, 2000);
  }, 100);

  claimItemDisplay.innerHTML = obj.item;
  claimItemDisplay.innerHTML += obj.name;
};


const boxOpeningVideo = document.querySelector(".box_opening_video");
const boxOpeningVideoContainer = document.querySelector(".openBox_container")

const openBox = (num) => {
  boxOpeningVideoContainer.style.animationName = `fade_in_out_video`
  boxOpeningVideoContainer.style.display = `block`
  boxOpeningVideo.play()
  setTimeout(() => {
    boxOpeningVideoContainer.style.display = `none`
    boxOpeningVideoContainer.style.animationName = ``

    showItemsGacha(num)

   },1700); 
}

const emptyBubblesCode5 = `
<div class="empty_bubbles_container">
      <div class="bubble bubble_gacha_item bubble_gacha_item_empty">
        <!-- <div class="item_bright item_bright_empty"></div>
        <div class="item_bright item_bright_empty"></div>
        <div class="item_bright item_bright_empty"></div> -->
        <div class="bubble_gacha_item_container bubble_gacha_item_container_empty">
        </div>
        </div>
  
        <div class="bubble bubble_gacha_item bubble_gacha_item_empty">
          <!-- <div class="item_bright item_bright_empty"></div>
          <div class="item_bright item_bright_empty"></div>
          <div class="item_bright item_bright_empty"></div> -->
          <div class="bubble_gacha_item_container bubble_gacha_item_container_empty">
          </div>
        </div>
  
        <div class="bubble bubble_gacha_item bubble_gacha_item_empty">
          <!-- <div class="item_bright item_bright_empty"></div>
          <div class="item_bright item_bright_empty"></div>
          <div class="item_bright item_bright_empty"></div> -->
          <div class="bubble_gacha_item_container bubble_gacha_item_container_empty">
          </div>
        </div>
  
        <div class="bubble bubble_gacha_item bubble_gacha_item_empty">
          <!-- <div class="item_bright item_bright_empty"></div>
          <div class="item_bright item_bright_empty"></div>
          <div class="item_bright item_bright_empty"></div> -->
          <div class="bubble_gacha_item_container bubble_gacha_item_container_empty">
          </div>
        </div>
  
        <div class="bubble bubble_gacha_item bubble_gacha_item_empty">
          <!-- <div class="item_bright item_bright_empty"></div>
          <div class="item_bright item_bright_empty"></div>
          <div class="item_bright item_bright_empty"></div> -->
          <div class="bubble_gacha_item_container bubble_gacha_item_container_empty">
          </div>
        </div>
    </div>`

const emptyBubblesCode1 = `
<div class="empty_bubbles_container">
  <div class="bubble bubble_gacha_item bubble_gacha_item_empty">
    <!-- <div class="item_bright item_bright_empty"></div>
    <div class="item_bright item_bright_empty"></div>
    <div class="item_bright item_bright_empty"></div> -->
    <div class="bubble_gacha_item_container bubble_gacha_item_container_empty">
    </div>
  </div>
</div>
`





const itemsGachaContainer = document.querySelector(".gacha_items_section")

const itemsGachaBackground = document.querySelector(".gacha_items_section_container")

const gachaDisplayInputs = document.querySelector(".gacha_display_inputs")




const emptyBubblesContainer = document.querySelector(".empty_bubbles_container")

let voy_reward = ``

showItemsGacha = (num) => {

  if(num == 5){
    itemsGachaContainer.innerHTML= emptyBubblesCode5
  }
  else{
    itemsGachaContainer.innerHTML= emptyBubblesCode1
  }

    for (let i = 0; i < num; i++) {
      239
      
      voy_reward = voyGachaItems[Math.floor(Math.random()*239)]
      

      if (voy_reward.rarity == 1){
        itemsGachaContainer.innerHTML += `
        <div class="bubble bubble_gacha_item bubble_transition">
          <div class="item_bright"></div>
          <div class="item_bright"></div>
          <div class="item_bright"></div>
          <div class="bubble_gacha_item_container bubble_rarity_1">
            <img class="voy_gacha_n${voy_reward.id}" src="${voy_reward.item}" alt="">
            <p>${voy_reward.name}&nbsp;x${voy_reward.amount}</p>
          </div>
        </div>`
      }
      else if (voy_reward.rarity == 2){
        itemsGachaContainer.innerHTML += `
        <div class="bubble bubble_gacha_item bubble_transition">
          <div class="item_bright"></div>
          <div class="item_bright"></div>
          <div class="item_bright"></div>
          <div class="bubble_gacha_item_container bubble_rarity_2">
            <img class="voy_gacha_n${voy_reward.id}" src="${voy_reward.item}" alt="">
            <p>${voy_reward.name}&nbsp;x${voy_reward.amount}</p>
          </div>
        </div>`
      }
      else if (voy_reward.rarity == 3 || voy_reward.rarity == 3.5){
        itemsGachaContainer.innerHTML += `
        <div class="bubble bubble_gacha_item bubble_transition">
          <div class="item_bright"></div>
          <div class="item_bright"></div>
          <div class="item_bright"></div>
          <div class="bubble_gacha_item_container bubble_rarity_3">
            <img class="voy_gacha_n${voy_reward.id}" src="${voy_reward.item}" alt="">
            <p>${voy_reward.name}&nbsp;x${voy_reward.amount}</p>
          </div>
        </div>`
      }
      else if (voy_reward.rarity == 4){
        itemsGachaContainer.innerHTML += `
        <div class="bubble bubble_gacha_item bubble_transition">
          <div class="item_bright"></div>
          <div class="item_bright"></div>
          <div class="item_bright"></div>
          <div class="bubble_gacha_item_container bubble_rarity_4">
            <img class="voy_gacha_n${voy_reward.id}" src="${voy_reward.item}" alt="">
            <p>${voy_reward.name}&nbsp;x${voy_reward.amount}</p>
          </div>
        </div>`
      }
      
      addToInventory(voy_reward)
    }

    itemsGachaBackground.style.display = `flex`

    gachaDisplayInputs.style.display = `flex`
}



// BOTONES DE LA GACHA DISPLAY  

const buttonOpenFiveGacha = document.querySelector(".open5_gacha_button");

const buttonBackGacha = document.querySelector(".back_gacha_button")

buttonBackGacha.addEventListener("click",()=>{
  itemsGachaBackground.style.display = `none`
  gachaDisplayInputs.style.display = `none`
  itemsGachaContainer.innerHTML = ``
})


buttonOpenFiveGacha.addEventListener("click",()=>{

  if(parseInt(fedCheckContainer.innerHTML) > 500){
    progressLineNumber = progressLineNumber + 5;
    progressLine.style.height = `${progressLineNumber}px`;

  
    verifyProgress();

    spendCounter.innerHTML = parseInt(spendCounter.innerHTML) + 500
  
    openBox(5);
  
    fedCheckContainer.innerHTML = parseInt(fedCheckContainer.innerHTML) - 500

    setTimeout(() => {
      itemsGachaBackground.style.display = `none`
      gachaDisplayInputs.style.display = `none`
      itemsGachaContainer.innerHTML = ``
    }, 500);

    }
    else{
      itemsGachaBackground.style.display = `none`
      gachaDisplayInputs.style.display = `none`
      itemsGachaContainer.innerHTML = ``

      modalFedsCreditsLeft.innerHTML = fedSunContainer.innerHTML
      modalExchangeFedsContainer.style.display = `flex`
    }
})