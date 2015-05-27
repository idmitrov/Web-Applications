var calculator;

//CALCULATOR OBJECT
calculator = {
    //CALCULATOR PARTS
    parts: {
        //DISPLAY
        display: {
            input: document.getElementById('input')
        },
        //KEYS
        keys: {
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
            17: document.getElementById('delete-all-button')
        }
    },
    //FUNCTIONS
    functions: {
        Start: function() {
            this.Calculate();
            this.ChangeColor();
        },

        //CALCULATE
        Calculate: function() {
            var keysLength, input, i;

            input = document.getElementById('input');
            keysLength = Object.keys(calculator.parts.keys).length;

            //ADD EVENT LISTENERS TO ALL KEYS
            for (i = 0; i < keysLength; i += 1) {
                //EACH KEY LISTEN FOR
                calculator.parts.keys[i].addEventListener('click', function() {
                    //DELETE|DELETE ALL
                    if (this.value == '' || this.value == 'delete') {
                        if (this.value == '') {
                            input.value = '';
                        } else {
                            input.value = input.value.substr(0, input.value.length -1);
                        }
                    } else {
                        //ADD VALUES IF ARE NOT MATH OPERATORS
                        if (!this.value.match(/[\+-/*.=]+/)) {
                            input.value += this.value;
                        } else {
                            //MATH OPERATORS LOGIC
                            
                        }
                    }
                });
            }
        },

        //CHANGE COLOR
        ChangeColor: function() {
            var changeWindowColorButton, changeBackgroundButton, changeFontColor;
            changeWindowColorButton = document.getElementById('change-color-button');
            changeBackgroundButton = document.getElementById('change-background-button');
            changeFontColor = document.getElementById('change-font-color-button');

            //GENERATE COLOR
            function generateColor() {
                var value, hex;

                value = Math.floor(Math.random() * 256);
                hex = value.toString(16);

                if (hex.length < 2) {
                    hex = '0' + hex;
                }
                return hex;
            }


            //CHANGE WINDOW COLOR
            changeWindowColorButton.addEventListener('click', function () {
                var calculatorWindow, red, green, blue;

                red = generateColor();
                green = generateColor();
                blue = generateColor();

                calculatorWindow = document.getElementById('calculator-window');
                calculatorWindow.style.backgroundColor = "#" + red + green + blue;
                calculatorWindow.style.boxShadow = "0 0 1rem" + "#" + red + green + blue;
            });

            //CHANGE BACKGROUND COLOR
            changeBackgroundButton.addEventListener('click', function () {
                var red, green, blue;

                red = generateColor();
                green = generateColor();
                blue = generateColor();

                document.body.style.backgroundColor = "#" + red + green + blue;
            });

            //CHANGE FONT COLOR
            changeFontColor.addEventListener('click', function() {
                var calculatorButtons, red, green, blue, color, currentButton;

                red = generateColor();
                green = generateColor();
                blue = generateColor();
                color = "#" + red + green + blue;

                document.documentElement.style.color = color;
                document.getElementById('calculator-title').style.color = color;
                document.getElementById('input').style.color = color;
                calculatorButtons = document.getElementsByTagName('button');

                for(currentButton = 0; currentButton < calculatorButtons.length; currentButton += 1) {
                    calculatorButtons[currentButton].style.color = color;
                }
            });
        }
    }
};

calculator.functions.Start();