export const initialState = {

    basket:[{
        id:"12345686",
        title:"Learn React",
        image:"https://images-na.ssl-images-amazon.com/images/I/51S8VABMqeL._SX258_BO1,204,203,200_.jpg",
        price:10.50,
        rating:3
    }],
    user:null
};


export const getBasketTotal = (basket) => {

   return basket?.reduce((amount,item)=>item.price + amount, 0);
}

const reducer = (state,action) => {

    console.log(action);

    switch(action.type){

        case "SET_USER":

            return {

                ...state,
                user:action.user,

            }
        case "ADD_TO_BASKET":
                
                return {

                ...state,
                basket:[...state.basket,action.item],
            
            };
        
           

        case 'REMOVE_FROM_BASKET':

        let newBasket= [...state.basket];

        const index = state.basket.findIndex((item)=>item.id===action.id);
        
        if(index >= 0){

            newBasket.splice(index,1);
        }else{

            console.warn(`Can´t remove this item ${index}`);

        }
            return {
                
                ...state,
                basket:newBasket,
            
            };


            default:
                return state;

    }

};

export default reducer;