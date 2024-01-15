# Cipher Project - Codecademy

## Overview

The Cipher Project is a command-line encryption and decryption tool developed during my Codecademy Bootcamp. The project demonstrates the use of different cipher methods, including Caesar Cipher, Symbol Cipher, and Reverse Cipher, to encode and decode messages.

## Project Files

### 1. message.mixer.js

#### Description:

The message.mixer.js file serves as the user interface for encrypting messages. It imports functions from encryptors.js for different encryption methods and handles user input and output logic.

#### Functions:

+ getEncryptionMethod: Determines the chosen encryption method based on command-line arguments.
- displayEncryptedMessage: Displays the encrypted message to the user.

#### Usage:

Run the program using:

```bash
node message.mixer.js [encryptionType] [amount]
```

Example:

```bash
node message.mixer.js caesar 5
```

### 2. super-encryptor.js

#### Description:

The super-encryptor.js file provides a higher-level interface for encoding and decoding messages. It imports functions from encryptors.js and combines them to create an advanced encryption/decryption process.

#### Functions:
+ encodeMessage: Combines cipher methods (Caesar, Symbol, Reverse) to encode a message.
- decodeMessage: Combines cipher methods to decode a message.
+ handleInput: Handles user input and invokes the appropriate encryption/decryption method.

#### Usage:

Run the program using:

```bash
node super-encryptor.js [encode/decode]
```

Example:

```bash
node super-encryptor.js encode
```

## Encryption Methods

+ **Caesar Cipher**:
    Shifts characters in the message by a fixed amount.

- **Symbol Cipher**:
    Replaces each character with a symbol.

+  **Reverse Cipher**:
    Reverses the order of characters in the message.

## User Input/Output
+ The user is prompted to enter the message they would like to encrypt/decrypt.
- The program displays the result to the user.

## Running the Program
+ Open a local terminal and download the project files
    
    ```bash
    git clone https://github.com/Olakunleniola/Cipher-Project.git
    ```

- For **message.mixer.js**, run the program with the desired encryption type and, if applicable, the amount:<br><br>

    ```bash
    node message.mixer.js [encryptionType] [amount]
    ```

+  For **super-encryptor.js**, run the program with the option to 'encode' or 'decode':<br><br>

    ```bash
    node super-encryptor.js [encode/decode]
    ```

**Note**: Ensure you have Node.js installed on your machine to run the programs.

## Contributing
If you'd like to contribute to the Cipher Project, feel free to fork the repository and submit a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](https://) file for details.

Happy Encrypting!
