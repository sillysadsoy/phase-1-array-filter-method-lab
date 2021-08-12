function findMatching(array, string) {
    return array.filter(name => name === string || name.toLowerCase() === string.toLowerCase());
}

function fuzzyMatch(array, string) {
    return array.filter(name => name.slice(0,1) === string.slice(0,1)) 
    } 


function matchName(object, string) {
    return object.filter(driver => driver.name === string);
}