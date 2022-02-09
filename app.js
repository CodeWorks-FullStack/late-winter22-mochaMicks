console.log('time to make some mochas')

let budget = 30

let menu = [
  { id: 1,
    name: 'Mocha',
    price: 10.99,
    imgUrl: 'https://s3-alpha-sig.figma.com/img/60f3/b0c0/7c8a0add6e09c3b5d1cd783734c89231?Expires=1645401600&Signature=GhwBczxJ-P2y2Tmk5slGdF2BuMMOAlksiPJxFiK06SSGvkwm-Xti~qYKj0FKm7vYNNkrt9dP84LTlfSsXX8gRUWc~u5guvvAF5VpZXi1NgTfTbG-d-wKASIaiEbEhH~YmVceDgiRAtSCp2CApZt~NZLW9o8Q3rROQfb-VTQydCS4EwdYO2sU0NCbfrXpkL6J6OUdSE6xqz0tO-~9nWxIGz8PTYmMcl9XcUJXNv5EB-d4XvezrRk-1gP6SODy3GuZlrsSSZQa1vWm8LS7oRDTNwqzU0rMrxHCPfbEsCN-J2z0uRTIh8tn7Irpuot~Zm~9hkD5nNkgA0gu92o0ynmsOQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
  },
  { id: 2,
    name: 'Chai Latte',
    price: 12,
    imgUrl: 'https://images.unsplash.com/photo-1594075731547-8c705bb69e50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  { id: 3,
    name: 'Vanilla Latte',
    price: 7.99,
    imgUrl: 'https://images.unsplash.com/photo-1568649929103-28ffbefaca1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },
  { id: 4,
    name: 'Beer Coffee',
    price: 20.45,
    imgUrl: 'https://images.unsplash.com/photo-1567387511134-96c0155ffdb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80'
  }
]

// NOTE tracks items i've added to cart
let cart = []
// NOTE tracks the cost of all the items in the card
let total = 0

function drawMenu(){
  let template = ''
  for (let i = 0; i < menu.length; i++) {
    const item = menu[i];
    template += `
    <div  class="menu-item col-6 bg-light p-0 selectable" onclick="buyCoffee(${item.id})">
      <img class="img-fluid "
      src="${item.imgUrl}"
      alt="">
        <div class="d-flex justify-content-between p-2">
        <h6>${item.name}</h6>
        <p>$${item.price}</p>
        </div>
    </div>
    `
  }
  // console.log("what's the template",template);// Remember to check your work
  document.getElementById('menu').innerHTML = template
}

function drawCart(){
  console.log('your budget sir/madam', budget)
  let subTotal = 0
  let template = ''
  cart.forEach(item => {
    // NOTE adds item price to subTotal
    subTotal += item.price
    // NOTE adds template to template to inject
    template += `
    <div class="col-12">
    <div class="d-flex justify-content-between p-1">
      <h6 class="text-light">1 ${item.name} </h6>
      <b>$${item.price}</b>
    </div>
  </div>
    `
  })
  // console.log(template, total)
  document.getElementById('cart').innerHTML = template
  document.getElementById('total').innerText = total.toFixed(2)
  // NOTE disable check out button if you don't enough money, the error here can be ignored
  document.getElementById('checkout').disabled = total >= budget

}


function buyCoffee(coffeeId){
  // console.warn('tried to by coffee is not yet written', coffeeId);
  let itemToAdd = menu.find( mi => mi.id == coffeeId )
  console.log('adding',itemToAdd);
  // NOTE update cart with item added and update total with item price
  cart.push(itemToAdd)
  total += itemToAdd.price
  // console.log('cart', cart);
  drawCart()
}

function checkout(){
  // NOTE is something in the cart
  if(cart.length){
    // NOTE do you have enough money
    if(total <= budget){
      budget -= total
      alert('thanks for yo monee 🤑')
    } else {
      alert('not enough liquid funds')
    }
  } else {
    alert('buy somthin stoopid')
  }
  cart = []
  total = 0
  drawCart()
}


// NOTE function call here runs the draws when the page loads
drawCart()
drawMenu()