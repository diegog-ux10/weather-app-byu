export const loadLocalStorage = (): string[] | undefined => {
  const data = localStorage.getItem("citySearchHistory");
  const value = JSON.parse(data as string);
  if (value) return value as string[];
};
