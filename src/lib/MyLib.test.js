import getData from './MyLib'

const holidaysMock = [
    {
        name: 'Fake Holiday',
        date: '2018-6-30',
        observed: '2018-6-30',
        public: true,
    },
]

const mock = [
    {
        name: 'June 2018',
        weeks: [
            [
                {
                    day: 5,
                    holiday: null,
                    number: 29,
                    weekend: false,
                },
                {
                    day: 6,
                    holiday: {
                        name: 'Fake Holiday',
                        date: '2018-6-30',
                        observed: '2018-6-30',
                        public: true,
                    },
                    number: 30,
                    weekend: true,
                },
            ],
        ],
    },
    {
        name: 'July 2018',
        weeks: [
            [
                {
                    day: 0,
                    holiday: null,
                    number: 1,
                    weekend: true,
                },
                {
                    day: 1,
                    holiday: null,
                    number: 2,
                    weekend: false,
                },
                {
                    day: 2,
                    holiday: null,
                    number: 3,
                    weekend: false,
                },
                {
                    day: 3,
                    holiday: null,
                    number: 4,
                    weekend: false,
                },
                {
                    day: 4,
                    holiday: null,
                    number: 5,
                    weekend: false,
                },
                {
                    day: 5,
                    holiday: null,
                    number: 6,
                    weekend: false,
                },
                {
                    day: 6,
                    holiday: null,
                    number: 7,
                    weekend: true,
                },
            ],
            [
                {
                    day: 0,
                    holiday: null,
                    number: 8,
                    weekend: true,
                },
            ],
        ],
    },
]

beforeEach(function() {
    global.fetch = jest.fn().mockImplementation(() => {
        return new Promise((resolve, reject) => {
            resolve({
                ok: true,
                json: function() {
                    return {
                        holidays: holidaysMock,
                    }
                },
            })
        })
    })
})

it('should get model', async () => {
    const model = await getData({
        date: '6/29/2018',
        days: '9',
        country: 'US',
    })
    expect(model).toEqual(mock)
})
