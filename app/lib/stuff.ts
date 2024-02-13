export function capitalizeWords(input: string) {
    return input
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
}

export function formatDate(input: Date) {
  const hours = input.getHours() < 10 ? `0${input.getHours()}` : input.getHours();
  const minutes = input.getMinutes() < 10 ? `0${input.getMinutes()}` : input.getMinutes();
  return `${hours}:${minutes}`;
}

export function formatHours(input: Date) {
  return input.getHours() < 10 ? `0${input.getHours()}` : input.getHours();
}