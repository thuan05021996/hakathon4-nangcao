import { useId, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
/* import './App.css' */
/* import './product/css' */

function App() {
  const [product,setProDuct]=useState([
    {
      img :'https://www.coca-cola.com/content/dam/onexp/vn/home-image/coca-cola/Coca-Cola_OT%20320ml_VN-EX_Desktop.png',
      name: "Coca-cola",
      price : 5000,
      quanlity : 0,
      id: 1
    },
    {
      img :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHD8rdCSU9O7LOgTYbNhs1bD86I797MH_Gmw&usqp=CAU',
      name: "Pepsi",
      price : 5000,
      quanlity : 0,
      id: 2
    },
    {
      img :'https://www.coca-cola.com/content/dam/onexp/vn/home-image/fanta/Fanta_Orange_RCG_320ml_Desktop.png',
      name: "FANTA",
      price : 5000,
      quanlity : 0,
      id: 3
    },
    {
      img :'https://sieuthitt.com/images/stories/virtuemart/product/number-1.jpg',
      name: "Number - one",
      price : 5000,
      quanlity : 0,
      id: 4
    },
    {
      img :'https://cdn.tgdd.vn/2021/06/CookProduct/1-1200x676-48.jpg',
      name: "Red-bull",
      price : 5000,
      quanlity : 0,
      id: 5
    },
    {
      img :'https://cdnphoto.dantri.com.vn/Y67ZaA06rd6lm6txCSx7gMLriD4=/zoom/1200_630/2022/08/06/caphe-crop-1659747953858.jpeg',
      name: "Coffe",
      price : 5000,
      quanlity : 0,
      id: 6
    },
    {
      img :'https://cdn.tgdd.vn/Files/2022/12/03/1492859/kham-pha-meo-siberian-dac-diem-cach-nuoi-gia-ban-202212050652382134.jpg',
      name: "Mèo Nga",
      price : 5000,
      quanlity : 0,
      id: 7
    },
    {
      img :'https://static-images.vnncdn.net/files/publish/2023/7/12/hoa-hau-thanh-thuy-7-1143.jpg',
      name: "Hoa Hậu",
      price : 1200000000000,
      quanlity : 0,
      id: useId()
    },

  ])
  const [money,setMoney]=useState(50000000000000);
  const reduce = (index) =>{
    let arr = [...product];
    if(arr[index].quanlity!=0){
      arr[index].quanlity=arr[index].quanlity-1
    }
    setProDuct(arr)
  }
const buyproduc = (index) => {
  let arr = [...product];
  arr[index].quanlity=arr[index].quanlity+1
  setProDuct(arr)

}
// hiển thị sản phẩm đã mua
let Mycarrt = product.filter((item)=>{
  return item.quanlity != 0;
  
})
// tổng tiền
let totalMoyney = Mycarrt.reduce((a,b)=>{
  return a+b.price*b.quanlity
},0)
// xóa giỏ hàng

const resetCart = () =>{
  let result = [...product]
 for(let i= 0;i<result.length;i++ ){
  result[i].quanlity=0
 }
 setProDuct(result)

}
const buyMoney= {money}-{totalMoyney}
// 
console.log("đây là đâu",buyMoney);
  return (
    <>
      <div className='header'>Bạn có số tiền là {money-totalMoyney }$$$</div>
      <div className='product'>
            {product.map((item,index) => {
              return <div className='product-item'>
              <img src={item.img}></img>
              <p>Tên sản phẩm : {item.name} </p>
              <p>Gía : {item.price} $$ </p>
              <p>
              <button onClick={() => reduce(index)} >Gỉam</button>
              số lượng :  {item.quanlity} 
              <button onClick={() => buyproduc(index)}>Tăng</button>
              </p>
            </div>
            })}
      </div>
      <div className='cart1'>
            <h2>Giỏ hàng của bạn</h2>
        <div>
         {Mycarrt.map((item)=>{
          return <div className='cart'>
          <p>Tên: {item.name} </p>
          <img src={item.img}></img>
           <p>Số lượng :<button>-</button> {item.quanlity}  <button>+</button></p>
        
          </div>
         })
          
         }
        </div>
        <div className='total'>
        <p>Tổng số tiền :{totalMoyney} </p>
        <button onClick={resetCart}>Xóa giỏ hàng</button>
        </div>
      </div>
     
    </>
  )
}

export default App
