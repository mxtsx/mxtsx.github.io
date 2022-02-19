export const screenshotName = (url: string) => {
    return url.split("/")?.
        [2].split(".")?.
        [0].split("")?.map((n, i) => i === 0 ? n.toUpperCase() : n)
        .join("")
        .replace("_", " ")
}
