export const formatDate = (date: string) => {
  const dateObj = new Date(date)
  const [_, month, day, year] = dateObj.toDateString().split(" ")

  return `${month.toLowerCase()} ${day}, ${year}`
}
