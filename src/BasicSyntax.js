export function romanToInteger(str) {
    let result = 0;

    for (let i = 0; i < str.length; i++) {
        let current = 0;
        let next = 0;

        switch (str[i]) {
            case 'I':
                current = 1;
                break;
            case 'V':
                current = 5;
                break;
            case 'X':
                current = 10;
                break;
            case 'L':
                current = 50;
                break;
            case 'C':
                current = 100;
                break;
            case 'D':
                current = 500;
                break;
            case 'M':
                current = 1000;
                break;
        }

        if (i + 1 < str.length) {
            switch (str[i + 1]) {
                case 'I':
                    next = 1;
                    break;
                case 'V':
                    next = 5;
                    break;
                case 'X':
                    next = 10;
                    break;
                case 'L':
                    next = 50;
                    break;
                case 'C':
                    next = 100;
                    break;
                case 'D':
                    next = 500;
                    break;
                case 'M':
                    next = 1000;
                    break;
            }
        }

        if (current < next) {
            result -= current;
        } else {
            result += current;
        }
    }

    return result;
}
