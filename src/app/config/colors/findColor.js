import colors from './colors.json';

export function removeTextStyling(text){
    return text
        .replace(/\s/g, "")
        .toUpperCase();

}

export function findColor(colorName) {

    let colorMap = {};
    
    for (let key in colors) {

        colorMap[removeTextStyling(key)] = colors[key];

    }

    return colorMap[removeTextStyling(colorName)];

}