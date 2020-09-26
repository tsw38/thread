export const unixToMonthYear = unix => {
    const [dow, month, date, year] = new Date(unix).toDateString().split(' ');


    return `${month}. ${year}`
}