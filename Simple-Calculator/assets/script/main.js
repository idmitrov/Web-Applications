var keys, keysLength, input;

//KEYS
keys = {
    0: document.getElementById('zero-button'),
    1: document.getElementById('one-button'),
    2: document.getElementById('two-button'),
    3: document.getElementById('three-button'),
    4: document.getElementById('four-button'),
    5: document.getElementById('five-button'),
    6: document.getElementById('six-button'),
    7: document.getElementById('seven-button'),
    8: document.getElementById('eight-button'),
    9: document.getElementById('nine-button'),
    10: document.getElementById('plus-button'),
    11: document.getElementById('minus-button'),
    12: document.getElementById('multiply-button'),
    13: document.getElementById('float-button'),
    14: document.getElementById('equal-button'),
    15: document.getElementById('divide-button'),
    16: document.getElementById('delete-button'),
    17: document.getElementById('delete-all-button'),
};

//KEYS LENGTH (KEYPAD NUMBER OF KEYS)
keysLength = Object.keys(keys).length;

//INPUT (CALCULATOR DISPLAY)
input = document.getElementById('input');

//ADD EVENT LISTENERS TO ALL KEYS
for (var i = 0; i < keysLength; i += 1) {
    keys[i].addEventListener('click', function(){
        if (this.value == 'delete') {
            input.value = input.value.substr(0, input.value.length - 1);
        } else if (this.value == '') {
            input.value = this.value;
        } else if(this.value == '=') {
            input.value = eval(input.value);//DEBUG
        } else {
            input.value += this.value;
        }
    });
}

//TODO#1...CONTINUE WITH NAVIGATION BAR FUNCTIONALLY
//TODO#2>...CHANGE EVAL FUNCTION WITH BETTER PARSE ALGORITHM