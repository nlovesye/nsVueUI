type validKey = string | number

export function oneOf (val: string, validList: validKey[]) {
    for (let i = 0; i < validList.length; i++) {
        if (val === validList[i]) {
            return true
        }
    }
    return false
}
