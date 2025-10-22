/*
Given a string str and an array of positive integers widths, write a function that splits the string into lines, each with the exact number of characters as specified by the corresponding width. Return an array of the substrings. Use the last width for any remaining characters if the array is shorter than needed.
*/

export const splitByWidths = (str: string, widths: number[]) => {
    if (widths.length === 0) {
        return [str];
    }
    let widthsIndex = 0;
    let lengthConsumed = 0;
    const result = [];
    while (lengthConsumed < str.length) {
        let width = widthsIndex < widths.length ? widths[widthsIndex++] : widths[widths.length - 1];
        if (typeof width !== 'number' || width <= 0 || !Number.isFinite(width) || !Number.isInteger(width)) {
            throw new Error('widths contains a number that is not a positive integer');
        }
        result.push(str.substring(lengthConsumed, lengthConsumed + width));
        lengthConsumed += width;
    }
    return result;
}

export default splitByWidths;