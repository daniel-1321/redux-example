export const mua = (product) => {
    return {
        type: 'MUA',
        data: product
    }
}

export const xoa = (product) => {
    return {
        type: 'XOA',
        data: product
    }
}