export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function padNumber(value: number, length = 2) {
  return String(value).padStart(length, "0");
}
