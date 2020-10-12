export const exhaust = (x: never): never => {
    console.error("invalid data:", x)
    throw new Error("FAILURE")
}
