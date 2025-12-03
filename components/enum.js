export const SCHEDULE_TYPE = [
    {
        name: 'Speaker',
        value: 'S'
    },
    {
        name: 'Solution Provider',
        value: 'SP'
    },
    {
        name: 'Other',
        value: 'M'
    }
]

Object.freeze(SCHEDULE_TYPE)

export const URL_VALIDATOR_REGEX = /^(https?:\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/[a-zA-Z0-9._\-~:/?#[\]@!$&'()*+,;=%]*)?|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
export const EMAIL_VALIDATOR_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;