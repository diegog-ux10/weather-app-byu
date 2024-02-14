export const formatDate = (unix: number): string => {
  const date: Date = new Date(unix * 1000);
  const dateString: string = date.toLocaleDateString("en", {weekday: "short", day: "numeric", month: "short"})
  return dateString
};
