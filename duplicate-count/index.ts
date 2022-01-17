export const duplicateCount = (text: string): number => {
    let countObj: Record<string, number> = {}
    let count: number = 0
    let allLetters = text.toLowerCase().split("")
    allLetters.forEach((letter) => {
        countObj[letter] ? countObj[letter]++ : (countObj[letter] = 1)
    })
    for (const key in countObj) {
        if (countObj[key] > 1) {
            count++
        }
    }
    return count
}
