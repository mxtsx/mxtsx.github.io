export const timer = (timeout: number) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}
