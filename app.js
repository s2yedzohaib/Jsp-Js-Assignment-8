    var input = document.getElementById("inputField");

    function getValue(number) {
        if (input.textContent === '0') {
            input.textContent = number;
        } else {
            input.textContent += number;
        }
    }

    function clrAll() {
        input.textContent = '0';
    }

    function deleteChar() {
        input.textContent = input.textContent.slice(0, -1) || '0';
    }

    function square() {
        input.textContent = Math.pow(parseFloat(input.textContent), 2);
    }

    function equal() {
        try {
            input.textContent = eval(input.textContent);
        } catch (e) {
            input.textContent = "Error";
        }
    }
