import getData from './MyLib'

const mock = [
    {
        name: 'December 2018',
        weeks: [
            [
                {
                    day: 0,
                    holiday: false,
                    number: 30,
                    weekend: true,
                },
                {
                    day: 1,
                    holiday: false,
                    number: 31,
                    weekend: false,
                },
            ]
        ],
    },
    {
        name: 'January 2019',
        weeks: [
            [
                {
                    day: 2,
                    holiday: false,
                    number: 1,
                    weekend: false,
                },
                {
                    day: 3,
                    holiday: false,
                    number: 2,
                    weekend: false,
                },
                {
                    day: 4,
                    holiday: false,
                    number: 3,
                    weekend: false,
                },
                {
                    day: 5,
                    holiday: false,
                    number: 4,
                    weekend: false,
                },
                {
                    day: 6,
                    holiday: false,
                    number: 5,
                    weekend: true,
                },
            ],
            [
                {
                    day: 0,
                    holiday: false,
                    number: 6,
                    weekend: true,
                },
                {
                    day: 1,
                    holiday: false,
                    number: 7,
                    weekend: false,
                },
                {
                    day: 2,
                    holiday: false,
                    number: 8,
                    weekend: false,
                },
            ]
        ],
    },
]

it('should get model', () => {
    const model = getData({
        date: '12/30/2018',
        days: '9',
        country: 'US'
    });
    expect(model).toEqual(mock);
})