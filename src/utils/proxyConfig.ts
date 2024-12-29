export const proxyConfig: any = {

    // "proxy1": {
    //     country: 'us',
    //     host: "10.248.0.3",
    //     port: 8111,
    //     count: 1
    // },
    // "proxy2": {
    //     country: 'us',
    //     host: "10.248.0.3",
    //     port: 8112,
    //     count: 1
    // },
    // "proxy3": {
    //     country: 'us',
    //     host: "10.248.0.3",
    //     port: 8113,
    //     count: 1
    // },
    // "proxy4": {
    //     country: 'us',
    //     host: "10.248.0.3",
    //     port: 8114,
    //     count: 1
    // },
    // "proxy5": {
    //     country: 'us',
    //     host: "10.248.0.3",
    //     port: 8115,
    //     count: 1
    // },

};


const sortProxyKeysByCount = () => {

    const proxyKeys = Object.keys(proxyConfig)
    proxyKeys.sort(() => Math.random() - 0.5)
    proxyKeys.sort((a, b) => {
        if (proxyConfig[b].count > proxyConfig[a].count) {
            return -1
        }
        return 1
    })

    return proxyKeys

}



export const getProxyFromLoop = () => {
    const sortedProxy = sortProxyKeysByCount()
    if (sortedProxy.length == 0) {
        return ""
    }
    const proxyObj = proxyConfig[sortedProxy[0]]
    proxyObj.count = proxyObj.count + 1

    if (!proxyObj.host) {
        return ""
    }


    const proxyUrl = `http://:@${proxyObj.host}:${proxyObj.port}`;

    return proxyUrl


}

