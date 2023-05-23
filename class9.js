//array.find מביא רק את התוצאה הראשונה שמוצא במערך
//בשונה מ
//array.filter שחל על כל הפונקציה

let users=[
    {
        firstName:"Rony" ,
        lastName:"Yechiel" ,
        age:"16.8" 
    },

    {
        firstName:'Naama' ,
        lastName:'Dorani' ,
        age:'16.11'
    },
    {
        firstName:'Noa' ,
        lastName:'Mizrahi' ,
        age: '17'
    },

    {
        firstName:'Hemda' ,
        lastName:'Zeevi' ,
        age: '16.5'
    },

    {
        firstName:'Adi' ,
        lastName:'Viater' ,
        age: '17.3'
    }
]

console.log(users[1]);

console.log(users[3].age);

console.log(users[0].lastName);

console.log(users.map(user=>user.firstName));


let items=[
    {
        barcode:'1123456' ,
        iName:'bear' ,
        prise:200 ,
        qty: 30,
        img:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71vz0MrmwfL._AC_SX425_.jpg"
    },

    {
        barcode:'2123456' ,
        iName:'chocolate' ,
        prise:10 ,
        qty: 100,
        img:"https://leonidas.co.il/wp-content/uploads/2019/03/700gr-1-600x400.png"
    },

    {
        barcode:'3123456' ,
        iName:'bouquet of flowers' ,
        prise:30 ,
        qty:233,
        img:'https://www.tamar-flowers.co.il/wp-content/uploads/2018/01/b62dd_1SPLIT201706SPLIT20201718.png'
    },

    {
        barcode:"4123456" ,
        iName:'greeting card' ,
        prise:6.7 ,
        qty:358,
        img:'https://lafleur-flowers.com/wp-content/uploads/2020/10/a869d_1SPLIT202010SPLIT21113117-600x600.jpg'
    },

    {
        barcode:'5123456' ,
        iName:'gift wrapping' ,
        prise:2 ,
        qty: 158,
        img:'https://sc04.alicdn.com/kf/HTB1CpoBFbSYBuNjSspiq6xNzpXat.jpg'
    }
]

function getItem(barcode){
  let item=items.find(item=>item.barcode==barcode)
  if(!item)
  {
    console.log("no item");
  }
  else{
  console.log(item);
}}

getItem(1123456)
getItem(9)

function getItemName(iName){
   let names= items.filter(x=>x.iName.includes(iName))
   if(names.length==0){
    console.log("no item");
   }
   else{
    console.log(names);
}}

getItemName('a')
getItemName('b')
getItemName("fl")

function reduceQty(barcode,qty){
    let item=items.find(item=>item.barcode==barcode)
    item.qty=item.qty-qty
    console.log(item);
}

reduceQty('2123456',10)
reduceQty("5123456",33)
//תתרגלי אותו דבר הפוך

function addItem(barcode,iName,prise,qty){
    items.push({
        barcode:barcode ,
        iName:iName ,
        prise:prise ,
        qty: qty

    })
}

// addItem('6123456',"new object","?",1)
// console.log(items);

// addItem('7123456',"love card",'7',23)
// console.log(items);

let container=document.getElementById("container")




items.map(item=>{
    let card=document.createElement('div')
    card.className='card'
    document.getElementById('container').appendChild(card)


    let iName= document.createElement("div")
    iName.innerHTML=item.iName
    iName.className="name"
    card.appendChild(iName)
    
    
    let price=document.createElement("div")
    price.innerHTML=item.prise+"₪"
    price.className="price"
    card.appendChild(price)

    let img=document.createElement("img")
    img.src=item.img
    img.className="img"
    card.appendChild(img)

    let btn=document.createElement('button')
    btn.className="btn"
    btn.innerHTML="Click here to add the item"
    card.appendChild(btn)
    btn.onclick=()=>alert(item.iName+" "+'added to your cart')
})

//החלפה ושינוי של כל אותה מילה
//ctrl+f2  ctrl+f






