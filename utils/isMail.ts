type IsMailType = (str: string) => boolean

export const isMail: IsMailType = (str) => {
    return str.split(':')[0] === 'mailto'
}
