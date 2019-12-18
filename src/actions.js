export const login = (payload) => {
    console.log(payload)
    return {
        type:'LOGIN',
        payload
    }
}
export const locationsearch = (payload) => {
    console.log(payload)
    return {
        type:'LOCATION',
        payload
    }
}

export const cardadd = (payload) => {
    console.log(payload)
    return {
        type:'PACKAGEADD',
        payload
    }
}

export const cardremove = (payload) => {
    console.log(payload)
    return {
        type:'PACKAGEREMOVE',
        payload
    }
}