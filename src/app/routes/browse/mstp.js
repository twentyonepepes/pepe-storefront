import { uniqBy } from 'lodash';

export const mapStateToProps = ({inventory})=> ({

    getInventory({category1}){

        const map = {
            tshirts: "TSHIRT",
            sweaters: "HOODIE",
            towels: "TOWEL"
        }

        const filteredInventory = category1 ? inventory.filter( product => { 

            return product.apparelType === map[category1];

        }) : inventory;

        const uniqInventory = uniqBy(filteredInventory, item => item.family);

        console.log("Unique?", inventory, uniqInventory);
        return uniqInventory;

    }
    
});

export const mapDispatchToProps = ()=>({

    handleClickItem:(item, history)=>{

        if (!item.productId) {

            console.info("An item generated an error", item);
            throw new Error("Item does not have a product ID", item);
            
        }

        history.push(`/detail/${item.productId}?nonseq=${new Date().getTime()}`);

    }

});