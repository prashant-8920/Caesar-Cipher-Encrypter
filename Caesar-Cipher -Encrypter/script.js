document.addEventListener('DOMContentLoaded', () => {
    let encryptBtn = document.getElementById('encrypt-btn');
    let eInput = document.getElementById('encryptedInput');
    let pInput = document.getElementById('plainInput');
    let copyBtn = document.getElementById('copy');

    [eInput, pInput].forEach(input => {
        input.oninput = () => {
            input.value = input.value.toUpperCase();
        };
    });

    function encrypt() {
        let plainText = pInput.value;
        let solved = '';
        let shiftInput = parseInt(document.getElementById('shiftInput').value);

        for (let i = 0; i < plainText.length; i++) {
            let ascii_num = plainText.charCodeAt(i);
            if (ascii_num >= 65 && ascii_num <= 90) {
                let sum = ascii_num + shiftInput;
                if (sum > 90) {
                    sum = 65 + (sum - 91);
                }
                solved += String.fromCharCode(sum);
            } else {
                solved += plainText[i];
            }
        }
        eInput.value = solved;
    }

    function copy() {
        eInput.select();
        eInput.setSelectionRange(0, 999999); // For mobile devices
        document.execCommand('copy');
        alert(`Copied to clipboard: ${eInput.value}`);
    }

    encryptBtn.addEventListener('click', encrypt);
    copyBtn.addEventListener('click', copy);
});
