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
        if ($(`#${input}`).attr('data-isinputvalid') == 'false'){
            valid = false;
            $(`#${input}`).css('borderColor', 'tomato');
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

export function inputsChanged(inputArr) {
    let changesMade = false;
    let element;

    for (let input of inputArr) {
        if ($(`#${input}`).attr('data-changesmade') == 'true'){
            changesMade = true;
            break;
        }
    }
    return changesMade;
}

export function realTimeValidation(target, validationType) {
    //Realtime validation
    switch(true){
        case (validationType == 'normal'): 
            if(!(target.value.length > 0)){
                $(target).css('borderColor', 'tomato'); 
                $(target).attr('data-isinputvalid', false);
            } else {
                $(target).css('borderColor', 'white'); 
                $(target).attr('data-isinputvalid', true);
            }
            break;
        case (validationType == 'cellNumber'):
            if((target.value.replace(/\s/g, '').length != 10) || !(target.value.replace(/\s/g, '').match(/^[0-9]+$/))){
                $(target).css('borderColor', 'tomato'); 
                $(target).attr('data-isinputvalid', false);
            } else {
                $(target).css('borderColor', 'white'); 
                $(target).attr('data-isinputvalid', true);
            }
            break; 
        case (validationType == 'email'):
            if(!(this.ValidateEmail(target.value))){
                $(target).css('borderColor', 'tomato'); 
                $(target).attr('data-isinputvalid', false);
            } else {
                $(target).css('borderColor', 'white'); 
                $(target).attr('data-isinputvalid', true);
            }
            break;
        default:
            break;
    }
}

export function homeButton() {
    window.location.replace('http://localhost:3000/')
}