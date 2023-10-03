import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateAvatarFallback(name: string) {
    // Split the input string into words
    const words = name.split(" ");

    // Iterate through the words and capitalize the first letter
    const capitalizedWords = words.map((word) => {
      // Check if the word ends with a period ('.')
      if (word.endsWith(".")) {
        // If it ends with a period, return ''
        return "";
      } else {
        // Capitalize the first letter of the word and return it
        return word.charAt(0).toUpperCase();
      }
    });

    // Join the capitalized words to form the final string
    const avatarFallback = capitalizedWords.join("");

    return avatarFallback;
  }