
export default function reduxTestReduncer(preState = 0, action) {
    console.log(preState)
    const {type, data} = action
    switch (type) {
        case 'increment':
            return preState + data
            break
        case 'decrement':
            return preState - data
            break
        default:
            return preState
            break
    }
}

