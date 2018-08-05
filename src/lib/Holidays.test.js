import getHolidays from './Holidays'

it('should call the api correctly', async () => {
    const spy = jest.fn().mockImplementation(() => {
        return new Promise((resolve, reject) => {
            resolve({
                ok: true,
                json: function() {
                    return {
                        holidays: [],
                    }
                },
            })
        })
    })
    global.fetch = spy

    const date = new Date('03/08/2018')
    getHolidays(date, 'US')

    expect(spy).toHaveBeenCalledWith(
        'https://holidayapi.com/v1/holidays?key=af29847b-cc8e-481f-940c-eae61835c584&country=US&year=2018&month=3'
    )
})
