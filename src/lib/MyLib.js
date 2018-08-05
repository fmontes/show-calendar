import getHolidays from './Holidays'

const MONTH_NAMES = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

function getDayModel(day, holiday) {
    const dayOfTheWeek = day.getDay()

    return {
        day: dayOfTheWeek,
        holiday: holiday,
        number: day.getDate(),
        weekend: dayOfTheWeek === 0 || dayOfTheWeek === 6,
    }
}

function getEndDate(date, days) {
    const result = new Date(date)
    result.setDate(result.getDate() + days)
    return result
}

async function getModel(months, country) {
    return await Promise.all(months.map(async month => {
        return {
            name: getMonthName(month[0]),
            weeks: await splitIntoWeeks(month, country),
        }
    }))
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

function isFuture(day) {
    const today = new Date();
    return day.getFullYear() > today.getFullYear() || day.getMonth() >= today.getMonth()
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

async function splitIntoWeeks(month, country) {
    const result = []
    let currentWeek = 0
    let holidaysInMonth = [];

    if (!isFuture(month[0])) {
        holidaysInMonth = await getHolidays(month[0], country).catch(() => [])
    }
    
    month.forEach(day => {
        let holyday = null;

        if (holidaysInMonth.length) {
            const filtered = holidaysInMonth.filter(holiday => {
                const holidayDate = new Date(holiday.date.split('-').join('/'))
                return holidayDate.getTime() === day.getTime()
            });
            holyday = filtered[0] || null
        }

        if (!result[currentWeek]) {
            result[currentWeek] = []
        }

        result[currentWeek].push(getDayModel(day, holyday))

        if (day.getDay() === 6) {
            currentWeek++
        }
    })

    return result
}

export default async params => {
    const date = new Date(params.date.split('-').join('/'))
    const days = parseInt(params.days, 10)
    const finalDate = getEndDate(date, days)
    const range = getRange(date, finalDate)
    const months = splitMonths(range)
    return await getModel(months, params.country)
}
