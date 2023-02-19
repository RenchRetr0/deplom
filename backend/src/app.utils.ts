const PASSWORD_RULE = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\(\)\[\]\{\}\~?<>;:\\_\/`+=\-\|!@#\$%\^&\*\.])(?=.{8,})/;

const PHONE_RULE = /^(\+7|7|8)?(\s?)(\(?)9[1-9]{2}(\)?)(\s?)[0-9]{3}?(\s|\-)?[0-9]{2}(\s|\-)?[0-9]{2}/;

const PASSWORD_RULE_MESSAGE = 'Password must be at least 6 characters, must contain 1 special character and number.';

const PHONE_RULE_MESSAGE = 'Mobile phone number dialed incorrectly.';

export const REGEX = {
    PASSWORD_RULE,
    PHONE_RULE
}

export const MESSAGE = {
    PASSWORD_RULE_MESSAGE,
    PHONE_RULE_MESSAGE
}