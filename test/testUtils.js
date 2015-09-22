const colors = {
    red: '\x1b[31m',
    green: '\x1b[32m',
    reset: '\x1b[0m'
};

export function equal(a, b, description) {
    if (a === b) {
        console.log(colors.green, 'OK', colors.reset, description);
        return true;
    }

    console.log(colors.red, 'KO', colors.reset, description);
    return false;
}

export function test(fn) { return fn(); }
