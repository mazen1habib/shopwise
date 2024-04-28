import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const cartstate ={
    cart:[],
    cartTotalQuantity: 0,
  cartTotalAmount: 0,
    furn:[],
    fav:[],
    comment:[],
    singleproduct:{
        name:'',
        price:0 , 
        title :'' ,
         image :``
    },
    singleblog:{
        image1 :"",
        headtitle1:"" , 
        date1: "",
        chat1:"",
        title1 :""  
    }
    ,
    Register:[],
    profile:{
        name:'',
        email:'' , 
        address :'' ,
        phone:''
    },
    numberpro:0,
}
export const cartslice =createSlice({
    name :'cart',
    initialState:cartstate,
    reducers:{
    addToCart(state, action) {
       const existingIndex = state.cart.findIndex(
        (item) => item.node.title === action.payload.node.title);
      if (existingIndex >= 0){
      state.cart[existingIndex] =
      {...state.cart[existingIndex],
      cartQuantity: state.cart[existingIndex].cartQuantity + 1,};
      toast.info("Increased product quantity", {
        osition: "bottom-left",});
        } else {
              let tempProductItem = { ...action.payload, cartQuantity: 1 };
              state.cart.push(tempProductItem);
              toast.success("Product added to cart", {
                position: "bottom-left",
              });
            }
          },
          addtofurn:(state ,action)=>{
            const existingIndex = state.furn.findIndex(
                (item) => item.id === action.payload.id
              );
        
              if (existingIndex >= 0) {
                state.furn[existingIndex] = {
                  ...state.furn[existingIndex],
                  cartQuantity: state.furn[existingIndex].cartQuantity + 1,
                };
                toast.info("Increased product quantity", {
                  position: "bottom-left",
                });
              } else {
                let tempProductItem = { ...action.payload, cartQuantity: 1 };
                state.furn.push(tempProductItem);
                toast.success("Product added to cart", {
                  position: "bottom-left",
                });
              }  
        },
        decreaseCart(state, action) {
            const itemIndex = state.cart.findIndex(
              (item) => ((item.node.title=== action.payload.node.title))
            );
            if (state.cart[itemIndex].cartQuantity > 1) {
              state.cart[itemIndex].cartQuantity -= 1;
              toast.info("Decreased product quantity", {
                position: "bottom-left",
              });
            } else if (state.cart[itemIndex].cartQuantity === 1) {
              const nextCartItems = state.cart.filter(
                (item) => item.node.title !== action.payload.node.title
              );
      
              state.cart = nextCartItems;
      
              toast.error("Product removed from cart", {
                position: "bottom-left",
              });
            }
          },
          //  decreasefurn(state, action) {
          //   const itemIndex = state.furn.findIndex(
          //     (item) => ((item.id=== action.payload.id))
          //   );
      
          //   if (state.furn[itemIndex].cartQuantity > 1) {
          //     state.furn[itemIndex].cartQuantity -= 1;
      
          //     toast.info("Decreased product quantity", {
          //       position: "bottom-left",
          //     });
          //   } else if (state.furn[itemIndex].cartQuantity === 1) {
          //     const nextCartItems = state.furn.filter(
          //       (item) => item.id !== action.payload.id
          //     );
      
          //     state.furn = nextCartItems;
      
          //     toast.error("Product removed from cart", {
          //       position: "bottom-left",
          //     });
          //   }
          // },
          getTotals(state, action) {
            let { total, quantity } = state.cart.reduce(
              (cartTotal,cartItem) => {
                const { price, cartQuantity } = cartItem;
                const itemTotal = price * cartQuantity;
      
                cartTotal.total += itemTotal;
                cartTotal.quantity += cartQuantity;
      
                return cartTotal;
              },
              {
                total: 0,
                quantity: 0,
              }
            );
            total = parseFloat(total.toFixed(2));
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
          },
        addtofav:(state ,action)=>{
            const itemIndex = state.fav.findIndex(
                (items)=> items.node.title === action.payload.node.title );
              if(itemIndex>=0){
                state.fav[itemIndex].cartQuatity+=1
                toast.info("It has already been favorited",{
                    position:'bottom-left'
                })
              }
              else{
                const tempProduct={...action.payload, cartQuatity:1}
                state.fav.push(tempProduct)
                toast.success(`added a ${action.payload.node.title}to favorite`,{
                    position:'bottom-left'
                })
              }    
        },
        clearCart(state, action) {
            state.cart = [];
            toast.error("Cart cleared", { position: "bottom-left" });
          }, 
           removeFromCart(state, action) {
            state.cart.map((cartItem) =>{
              if (cartItem.node.title === action.payload.node.title) {
                const nextCartItems = state.cart.filter(
                  (item) => item.node.title !== cartItem.node.title
                );
      
                state.cart= nextCartItems;
      
                toast.error("Product removed from cart", {
                  position: "bottom-left",
                });
              }
            });
          },
        addtocomment:(state ,action)=>{
            state.comment.push(action.payload)
        },
        addtosingleproduct:(state ,action)=>{
            state.singleproduct={
                name:action.payload,
                price:action.payload,
                title:action.payload,
                image:action.payload
            }
        }, addtosingleblog:(state ,action)=>{
            state.singleblog={
                image1:(action.payload),
                headtitle1:(action.payload),
                date1:(action.payload),
                chat1:(action.payload),
                title1:(action.payload)
            }
        }
        , addtouser:(state ,action)=>{
            state.profile={
                name:action.payload,
                email:action.payload,
                address:action.payload,
                phone:action.payload
            }
        },
        addtoregister:(state ,action)=>{
            state.Register.push(action.payload)
        },
       removearry:(state ,action)=>{
            state.cart.splice(action.payload,1)
            state.fav.splice(action.payload,1)
            state.furn.splice(action.payload,1)
        }
        ,numberofpro:(state,action)=>{
            state.numberpro(action.payload)
        }
    }
})
export const { addToCart, decreaseCart, removeFromCart,getTotals, clearCart } =
  cartslice.actions;
export default cartslice.reducer;