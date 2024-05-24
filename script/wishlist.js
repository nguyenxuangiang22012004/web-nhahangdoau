var listproducts =[
    {
        image:"../img/09-img/image_itemsList_3.png",
        name:"Belgium waffles with strawberries",
        unitprice:150,
        quantity:2,

    },
    {
        image:"../img/09-img/image_itemsList_4.png",
        name:"Chicken skewers",
        unitprice:150,
        quantity:1,
    },
    {
        image:"../img/09-img/image_itemsList_3.png",
        name:"Belgium waffles with strawberries",
        unitprice:150,
        quantity:2,

    },
    {
        image:"../img/09-img/image_itemsList_4.png",
        name:"Chicken skewers",
        unitprice:150,
        quantity:1,
    },
    {
        image:"../img/09-img/image_itemsList_3.png",
        name:"Belgium waffles with strawberries",
        unitprice:150,
        quantity:2,

    },
    {
        image:"../img/09-img/image_itemsList_4.png",
        name:"Chicken skewers",
        unitprice:150,
        quantity:1,
    },
   
];

function render(){
    const html = listproducts.map(function(listproduct){
        return `<li>
        <div class="_3caidau">
            <img src="${listproduct.image}">
            <span class="belgium">${listproduct.name}</span>
            <span class="_150">$${listproduct.unitprice}</span>
        </div>
        <div class="_3caisau">
            <div class="congvatru">
            <button class="cong">+</button>
            <span>${listproduct.quantity}</span>
            <button class="tru">-</button>
            </div>
            <span class="addtocart">Add to cart</span>
            <button class="x">X</button>
        </div>
    </li>`
    }).join('');
    document.querySelector(".list").innerHTML=html;
    const buttoncong=document.querySelectorAll('.cong');
    const buttontru=document.querySelectorAll('.tru');
    const buttonxoa=document.querySelectorAll('.x');
    function updatequantity(index,quantity){
        if(quantity<0){
            return;
        }
        listproducts[index].quantity=quantity;
        render();
    }
    function remove(index){
        listproducts.splice(index,1);
        render();
    }
    for (let i=0;i<buttonxoa.length;i++){
        buttoncong[i].addEventListener('click',function(){
            updatequantity(i,listproducts[i].quantity+1);
        })
        buttontru[i].addEventListener('click',function(){
            updatequantity(i,listproducts[i].quantity-1);
        })
        buttonxoa[i].addEventListener('click',function(){
            remove(i);
        })
    }
}
render();

