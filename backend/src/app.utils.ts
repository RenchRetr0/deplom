const PASSWORD_RULE = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\(\)\[\]\{\}\~?<>;:\\_\/`+=\-\|!@#\$%\^&\*\.])(?=.{8,})/;

const PASSWORD_RULE_MESSAGE = 'Password must be at least 6 characters, must contain 1 special character and number.';

export const REGEX = {
    PASSWORD_RULE
}

export const MESSAGE = {
    PASSWORD_RULE_MESSAGE
}