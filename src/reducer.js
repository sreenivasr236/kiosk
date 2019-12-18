const globaldata={
    id:'',
    pin:'',
    location:'',
    package:0,

}

const reducer=(state=globaldata,action)=>{
   
    switch(action.type){
        case "LOGIN":
            return{
                id:action.payload.id,
                pin:action.payload.pin
            }
         case "LOCATION":
            return{
                
                location:action.payload.location,
                
                }  
                
            case "PACKAGEADD":
                return{
                        
                    // package:state.package + action..package.price
                        
                } 
                case "PACKAGEREMOVE":
                    return{
                            
                        // package:state.package - action.payload.package
                            
                    } 
    }
    console.log(globaldata, 'reducer')
    return state;
}
export default reducer