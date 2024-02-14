export const celsiusToFarenheit = (celsius: string): string => {
    const value = Number(celsius)
    const ValueF = Math.round((value * 9/5) + 32)

    return ValueF.toString()
}