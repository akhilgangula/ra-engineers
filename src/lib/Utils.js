export const GenerateID = () => {
    return new Date().valueOf()
}

export const NumberConvertor = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}