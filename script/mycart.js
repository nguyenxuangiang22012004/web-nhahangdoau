

var listproducts = [
    {   
        image:"../img/09-img/image_itemsList_3.png",
        name : 'Belgium waffles with strawberrie',
        unitprice : 150 ,
        quantity:1,
        total:150,
       
       
    },
    {
        image:"../img/09-img/image_itemsList_4.png",
        name : 'Chicken skewers',
        unitprice : 150 ,
        quantity:2,
        total:150,
    }
];

function render(){
    let ordersubtotal = 0;
    listproducts.forEach(function(listproduct){
        ordersubtotal+=listproduct.quantity * listproduct.unitprice;
    })
    let coupon = 0;
    let totalcart = ordersubtotal+coupon;
    for (var i=0;i<listproducts.length;i++){
        listproducts[i].total=listproducts[i].unitprice * listproducts[i].quantity;
    }
    const html =listproducts.map(function(listproduct){
        return `<li>
        <div class="_3caidau">
            <img src="${listproduct.image}">
            <span class="belgium">${listproduct.name}</span>
            <span style="margin-bottom: 19px">$${listproduct.unitprice}</span>
        </div>
        <div class="_3caisau">
            <div class="congvatru">
                <button class="cong">+</button>
                <span>${listproduct.quantity}</span>
                <button class="tru">-</button>
            </div>
        <span style="margin-right: 60px;">$${listproduct.total}</span>
        <button class="x">X</button>
        </div>
    </li>`
    }).join('');
    document.querySelector('.listproduct1').innerHTML=html;
    document.querySelector('.option2').innerHTML=
    `<p>Order Subtotal<span>$${ordersubtotal.toFixed(2)}</span></p>
        <p>Shipping<span>Free Shipping</span></p>
        <p>Coupon<span style="margin-left: 240px;">$${coupon.toFixed(2)}</span></p>
        <p>Total<span style="margin-left: 250px;">$${totalcart.toFixed(2)}</span></p>`;  
    const buttoncong = document.querySelectorAll('.cong');
    const buttontru = document.querySelectorAll('.tru');
    const buttonxoa = document.querySelectorAll('.x');
    function updatequantity(index,quantity){
        if(quantity<1){
            return ;
        }
        listproducts[index].quantity=quantity;
        render();
    }
    function remove(index){
        listproducts.splice(index,1)
        render(); 
    }
    for(let i=0;i<buttonxoa.length;i++){
        buttoncong[i].addEventListener('click',function(){
            updatequantity(i,listproducts[i].quantity+1);
        })
        buttontru[i].addEventListener('click',function(){
            updatequantity(i,listproducts[i].quantity-1);
        })
        buttonxoa[i].addEventListener('click',function(){
            remove();
        })
    }  
}
render()