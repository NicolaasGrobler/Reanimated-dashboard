import $                        from 'jquery';

export function getDateString(str){ 
    let month = str[5] + str[6];

    switch(month) {
        case '01' : 
            month = 'Jan';
            break;
        case '02' :
            month = 'Feb';
            break;
        case '03' :
            month = 'Mar';
            break;
        case '04' :
            month = 'Apr';
            break;
        case '05' :
            month =  'May';
            break;
        case '06' :
            month =  'Jun';
            break;
        case '07' : 
            month =  'Jul';
            break;
        case '08' :
            month =  'Aug';
            break;
        case '09' :
            month =  'Sep';
            break;
        case '10' :
            month =  'Oct';
            break;
        case '11' :
            month =  'Nov';
            break;
        case '12' :
            month =  'Dec';
            break;
        default :
            month =  'Invalid date';
            break;
    }

    return str[8] + str[9] + ' ' + month + ' ' +  str[0] + str[1] + str[2] + str[3];
}

export function validateInput(inputArr) {
    let valid = true;
    let element;

    for (let input of inputArr) {
        if ($(`#${input}`).attr('data-isInputValid') == 'false'){
            valid = false;
            element = document.querySelector(`#${input}`);
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
            break;
        }
    }
    return valid;
}