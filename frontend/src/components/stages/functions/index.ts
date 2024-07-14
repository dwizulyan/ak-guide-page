// this function is just to return a trimmed description
// when the description length are greater than 104
export function TrimDescription(description: string): string {
    const MAX_WORD = 104;
    return description.length > MAX_WORD ? description.slice(0, MAX_WORD).concat("...") : description
}