import { sample } from 'lodash';

export const populateVariations = (rawProducts) => {

    const mappedProducts = rawProducts.map(product => {
        
        return {
            ...product,
            variations:{
                colors:rawProducts
                    .filter(_product => _product.productId !== product.productId)
                    .filter(_product => _product.family && _product.family === product.family)
                    .reduce((products, _product)=>{

                        if(!products.find(__product => __product.color === _product.color)) {

                            products.push(_product);

                        }
                        
                        return products;

                    }, []),
                sizes:rawProducts
                    .filter(_product => _product.family === product.family)
                    .filter(_product => product.color === _product.color)
                
            }
        }

    });

    return mappedProducts;

}
export const generateSpecInventory = ()=>{

    const rawProducts = [];
    let n = 1;

    for (let logoType of ["VERYSAD", "CLOWN", "CLEVER", "DUCK"]) {

        for (let apparelType of ["TSHIRT", "HOODIE", "TOWEL"]) {

            for (let color of ["Red", "Yellow", "Green", "Orange", "Light Blue"]) {

                for (let size of ["SMALL", "MEDIUM", "LARGE"]) {

                    rawProducts.push({
                        productId:`P${n++}`,
                        shortName:`${logoType} Pepe ${apparelType}`,
                        longName:`Authentic 1st Edition ${logoType} Pepe ${apparelType}`,
                        description:`This legendary t-shirt is sure to delight your basest friends, while alienating and displeasing the rest. The choice is yours!`,
                        size,
                        logoType,
                        apparelType,
                        familyId:`${apparelType}_${logoType}_001`,
                        family:`${apparelType}_${logoType}_001`,
                        color,
                        variations:{
                            colors:[],
                            sizes:[]
                        },
                        priceUSD: 49.99,
                        quantity: ~~( Math.random() * n )
                    })
                }
            }
        }
    }

                

        // }
    // }

    const mappedProducts = populateVariations(rawProducts);

    const highlightedMappedProducts = mappedProducts.map(product => ({
        ...product,
        highlightedVariation: sample(product.variations.colors) || product

    }));

    return highlightedMappedProducts;
}