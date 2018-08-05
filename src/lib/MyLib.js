const MONTH_NAMES = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'Junio',
    'Julio',
    'August',
    'September',
    'Octuber',
    'November',
    'December',
]

function getDayModel(day) {
    const dayOfTheWeek = day.getDay()

    return {
        day: dayOfTheWeek,
        holiday: false, // Will set this later
        number: day.getDate(),
        weekend: dayOfTheWeek === 0 || dayOfTheWeek === 6,
    }
}

function getEndDate(date, days) {
    const result = new Date(date)
    result.setDate(result.getDate() + days)
    return result
}

function getModel(months) {
    return months.map(month => {
        return {
            name: getMonthName(month[0]),
            weeks: splitIntoWeeks(month),
        }
    })
}

function getMonthName(month) {
    return MONTH_NAMES[month.getMonth()] + ' ' + month.getFullYear()
}

function getRange(start, end) {
    const dates = [start]
    const month = start.getMonth()
    const year = start.getFullYear()
    let day = start.getDate()

    while (dates[dates.length - 1] < end) {
        dates.push(new Date(year, month, ++day))
    }

    return dates
}

function splitMonths(range) {
    let prevMonth
    let currentMonth = 0
    const result = []

    range.forEach(date => {
        if (prevMonth === undefined) {
            prevMonth = date.getMonth()
            result[currentMonth] = []
        }

        if (prevMonth !== date.getMonth()) {
            currentMonth++
            prevMonth = date.getMonth()
            result[currentMonth] = []
        }

        result[currentMonth].push(date)
    })

    return result
}

function splitIntoWeeks(month) {
    const result = []
    let currentWeek = 0

    month.forEach(day => {
        if (!result[currentWeek]) {
            result[currentWeek] = []
        }

        result[currentWeek].push(getDayModel(day))

        if (day.getDay() === 6) {
            currentWeek++
        }
    })

    return result
}

export default (params) => {
    const date = new Date(params.date.split('-').join('/'))
    const days = parseInt(params.days, 10)
    const finalDate = getEndDate(date, days)
    const range = getRange(date, finalDate)
    const months = splitMonths(range)
    return getModel(months)
}


