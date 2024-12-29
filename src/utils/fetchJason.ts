import fetch from 'node-fetch';

import { HttpsProxyAgent } from "https-proxy-agent"
import { getProxyFromLoop } from './proxyConfig';

export function getRuntime() {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
        return "browser"
    }
    if (typeof navigator !== "undefined" && navigator.product === "ReactNative") {
        return "native"
    }

    if (typeof Bun !== "undefined") {
        return "bun"
    }

    if (typeof process !== "undefined" && process.versions && process.versions.node) {
        return "node"
    }

    return "unknown"
}


export const fetchJason = async (url, options = {}) => {
    console.log('fetchJason', url, options);
    const proxyUrl = getProxyFromLoop()

    console.log('proxyUrl', proxyUrl);
    // @ts-ignore
    return await fetch(url, {
        ...options,
        ...(proxyUrl ? {
            ...(getRuntime() == "bun" ? {
                proxy: proxyUrl
            } : {
                agent: new HttpsProxyAgent(proxyUrl)
            })
        } : {})
    })
}




