
export interface ListItem  {
    item  : {
        id : String,
        name : String,
        description : String,
        price : String,
        color : String,
        image1 : String,
        image2 : String,
        image3? : String,

        

    }    
}
export interface products {
    list : ListItem[]
}

export type ProductActions = {
    type : String,
    payload :products
} 