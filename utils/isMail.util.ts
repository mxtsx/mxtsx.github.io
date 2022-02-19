type IsMailType = (str: string) => boolean

export const isMailUtil: IsMailType = (str) => {
    return str.split(':')[0] === 'mailto'
}
