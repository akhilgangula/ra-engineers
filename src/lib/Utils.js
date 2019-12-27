export const GenerateID = () => {
    return new Date().valueOf()
}

export const NumberConvertor = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const CamelCaseToUpper = (message) => {
    return message.replace(/([a-z])([A-Z])/, '$1 $2').toUpperCase();
}