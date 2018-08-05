const API_URL =
    'https://holidayapi.com/v1/holidays?key=af29847b-cc8e-481f-940c-eae61835c584'

export default async function getHolidays(date, country) {
    const year = date.getFullYear()
    const month = date.getMonth() + 1

    return fetch(`${API_URL}&country=${country}&year=${year}&month=${month}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.statusText)
            }

            return res
        })
        .then(res => res.json())
        .then(data => data.holidays)
}
