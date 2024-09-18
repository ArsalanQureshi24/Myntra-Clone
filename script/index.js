let bagItems = [];
onLoad();
function onLoad (){
let bagItemsStr = localStorage.getItem('bagItems');
bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
displayItemsOnHomePage();
displayBagItemscount();
}
function addToBag (itemsId){
    bagItems.push(itemsId);
    localStorage.setItem('bagItems',JSON.stringify(bagItems));
    displayBagItemscount();
}
function displayBagItemscount (){
    let bagItemCountElement  = document.querySelector('.add-bag-count');
    if(bagItems.length > 0){
    bagItemCountElement.style.visibility = 'visible';
    bagItemCountElement.innerText = bagItems.length;
    }
    else{
        bagItemCountElement.style.visibility = 'hidden';
    }
}

function displayItemsOnHomePage (){
    let itemsContainerElement = document.querySelector('.items-container');
    if(itemsContainerElement===null){
        return;
    }
let innerHTML = ``;
item.forEach(items => {
    innerHTML += `
<div class="item-container">
                <img class="item-image" src="${items.image}" alt="product image">
                <div class="rating">
                     ${items.rating.stars}⭐| ${items.rating.count}k 
                </div>
                <div class="campany-name">${items.company}</div>
                <div class="item-name">${items.item_name}</div>
                <div class="price">
                    <span class="current-price">Rs ${items.current_price}</span>
                    <span class="original-price">Rs ${items.original_price}</span>
                    <span class="discount">(${items.discount_percentage}% OFF)</span>
                </div>
                <button class="add-bag-btn" onclick= "addToBag(${items.id}); 
">Add To Bag</button>
            </div>`;
});
itemsContainerElement.innerHTML = innerHTML;
}
