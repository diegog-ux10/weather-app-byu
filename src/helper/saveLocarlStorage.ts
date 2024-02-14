export const saveLocalStorage = (searches: string[]): void => {    
    localStorage.setItem("citySearchHistory", JSON.stringify(searches))
}