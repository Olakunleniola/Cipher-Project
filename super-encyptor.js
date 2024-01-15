// Import the encryptors functions here.
const {caesarCipher, symbolCipher, reverseCipher} = require("./encryptors")

const encodeMessage = (str) => {
    // Use the encryptor functions here.
    str = caesarCipher(str, 9);
    str = symbolCipher(str);
    str = reverseCipher(str);
    return str;
}

const decodeMessage = (str) => {
// Use the encryptor functions here.
    str = reverseCipher(str);
    str = symbolCipher(str);
    str = caesarCipher(str, -9);
    return str;
}

// User input / output.

const handleInput = (userInput) => {
    const str = userInput.toString().trim();
    let output;
    if (process.argv[2] === 'encode') {
        output = encodeMessage(str);
    } 
    if (process.argv[2] === 'decode') {
        output = decodeMessage(str);
    } 

    process.stdout.write(output + '\n');
    process.exit();
}

// Run the program.
const option = process.argv[2];
if (option === 'encode' || option === 'decode') {
    process.stdout.write('Enter the message you would like to encrypt...\n> ');
    process.stdin.on('data', handleInput);
}else {
    process.stdout.write(" Run the program with an option to 'decode' or 'encode' as the last arguement \n example: node super-encryptor.js encode \n")
}