export default function linear_search(haystack: number[], needle: number): boolean {
    
    // Här går vi igenom varje steg i listan för att leta efter nålen
    for (let i = 0; i < haystack.length; i++) {
        // här sätter vi upp regler för vad vi ska leta efter
        if (haystack [i] === needle) {
            // Hittar vi värdet så returnerer vi sant
            return true;
        }
    }
    // Om annat falskt, alltså har vi 1,5,9,10 i arrayen och vi söker efter 18 så kommer vi få ett falskt värde
    return false;
}