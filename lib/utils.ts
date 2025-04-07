import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
// convert prisma object to plain object
export function convertToPlainObject<T>(data: T) {
  return JSON.parse(JSON.stringify(data))
}
// format number with decimal places
export function formatNumberWithDecimal(num: number): string {
  const [integerPart, decimalPart] = num.toString().split(".");
  return decimalPart ? `${integerPart}.${decimalPart.padEnd(2, '0')}` : `${integerPart}.00`;
}

