module.exports = function toReadable(number) {

    str = number.toString();

    let result = '';

    let units = '';
    getUnits();

    let dozens = '';
    getDozens();

    let hundreds = '';
    getHundreds();

    function getUnits() {
        let lastInt = '';

        if (str.length < 2) {
            lastInt = str;
        } else {
            lastInt = str[str.length - 1];
        }

        if (str.length >= 2 && lastInt === '0') {
            units = '';
        } else {
            switch (lastInt) {
                case '0': units = 'zero'; break;
                case '1': units = 'one'; break;
                case '2': units = 'two'; break;
                case '3': units = 'three'; break;
                case '4': units = 'four'; break;
                case '5': units = 'five'; break;
                case '6': units = 'six'; break;
                case '7': units = 'seven'; break;
                case '8': units = 'eight'; break;
                case '9': units = 'nine'; break;
            }
        }
    }

    function getDozens() {
        let lastTwoInt = str[str.length - 2] + str[str.length - 1];

        if (str.length >= 3 && lastTwoInt === '00') {
            dozens = '';
        } else if (str.length >= 3 && (Number(lastTwoInt) > 0 && Number(lastTwoInt) < 10)) {
            dozens = units;
        } else {
            switch (true) {
                case (lastTwoInt >= 10 && lastTwoInt < 20):
                    switch (lastTwoInt) {
                        case '10': dozens = 'ten'; break;
                        case '11': dozens = 'eleven'; break;
                        case '12': dozens = 'twelve'; break;
                        case '13': dozens = 'thirteen'; break;
                        case '14': dozens = 'fourteen'; break;
                        case '15': dozens = 'fifteen'; break;
                        case '16': dozens = 'sixteen'; break;
                        case '17': dozens = 'seventeen'; break;
                        case '18': dozens = 'eighteen'; break;
                        case '19': dozens = 'nineteen'; break;
                    }; break;
                case (lastTwoInt >= 20 && lastTwoInt < 30): dozens = `twenty ${units}`; break;
                case (lastTwoInt >= 30 && lastTwoInt < 40): dozens = `thirty ${units}`; break;
                case (lastTwoInt >= 40 && lastTwoInt < 50): dozens = `forty ${units}`; break;
                case (lastTwoInt >= 50 && lastTwoInt < 60): dozens = `fifty ${units}`; break;
                case (lastTwoInt >= 60 && lastTwoInt < 70): dozens = `sixty ${units}`; break;
                case (lastTwoInt >= 70 && lastTwoInt < 80): dozens = `seventy ${units}`; break;
                case (lastTwoInt >= 80 && lastTwoInt < 90): dozens = `eighty ${units}`; break;
                case (lastTwoInt >= 90 && lastTwoInt < 100): dozens = `ninety ${units}`; break;
            }
        }
    }

    function getHundreds() {
        let lastThreeInt = str[str.length - 3] + str[str.length - 2] + str[str.length - 1];

        switch (true) {
            case (lastThreeInt >= 100 && lastThreeInt < 200): hundreds = `one hundred ${dozens}`; break;
            case (lastThreeInt >= 200 && lastThreeInt < 300): hundreds = `two hundred ${dozens}`; break;
            case (lastThreeInt >= 300 && lastThreeInt < 400): hundreds = `three hundred ${dozens}`; break;
            case (lastThreeInt >= 400 && lastThreeInt < 500): hundreds = `four hundred ${dozens}`; break;
            case (lastThreeInt >= 500 && lastThreeInt < 600): hundreds = `five hundred ${dozens}`; break;
            case (lastThreeInt >= 600 && lastThreeInt < 700): hundreds = `six hundred ${dozens}`; break;
            case (lastThreeInt >= 700 && lastThreeInt < 800): hundreds = `seven hundred ${dozens}`; break;
            case (lastThreeInt >= 800 && lastThreeInt < 900): hundreds = `eight hundred ${dozens}`; break;
            case (lastThreeInt >= 900 && lastThreeInt < 1000): hundreds = `nine hundred ${dozens}`; break;
        }
    }

    switch (true) {
        case (number < 10): result = units; break;
        case (number >= 10 && number < 100): result = dozens; break;
        case (number >= 100): result = hundreds; break;
    }

    return result.trim();
}

// console.log(toReadable(10));
