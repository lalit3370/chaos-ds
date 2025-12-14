export function classname (...args) {
    let finalClassName = [];
    args.forEach((x) => {
        if(typeof x === 'object' && x!== null && !Array.isArray(x)) {
            for(let property in x) {
                if(x[property] ) {
                    finalClassName.push(String(property));
                }
            }
        } else if (Array.isArray(x)){
            finalClassName = [...finalClassName, ...x]
        } else {
            finalClassName.push(String(x));
        }
    })
    return finalClassName.join(' ');
}