import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max)
}

export const getRandomPoints = () => {
  const points = [1, 5, 10]
  const random = Math.floor(Math.random() * points.length)
  return points[random]
}
