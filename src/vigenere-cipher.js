const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(isDirect) {
    this.isDirect = isDirect === undefined ? true : isDirect;
    this.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  }

  checkParametrs(message, key) {
    if (!message || !key) {
      throw new Error();
    }
  }

  encrypt(message, key) {
    this.checkParametrs(message, key);

    message = message.toUpperCase();
    key = key.toUpperCase();

    let encryptedChars = [];
    for(let indexChar = 0, indexKeyChar = 0; indexChar < message.length; indexChar++) {
      if (indexKeyChar === key.length) {
        indexKeyChar = 0;
      }

      let messageChar = message.charAt(indexChar);
      let keyChar = key.charAt(indexKeyChar);

      let messageCharIndex = this.getCharIndex(messageChar);
      let keyCharIndex = this.getCharIndex(keyChar);

      if (!this.isLatinChar(messageChar)) {
        encryptedChars.push(messageChar);
        continue;  
      }

      let char = this.alphabet[(messageCharIndex + keyCharIndex) % this.alphabet.length];
      encryptedChars.push(char);
      indexKeyChar++
    }

    if (this.isDirect) {
      return encryptedChars.join('');  
    } else {
      return encryptedChars.reverse().join('');
    }
    
  }    

  decrypt(encryptedMessage, key) {
    this.checkParametrs(encryptedMessage, key);

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let messageChars = [];
    for(let indexChar = 0, indexKeyChar = 0; indexChar < encryptedMessage.length; indexChar++) {
      if (indexKeyChar === key.length) {
        indexKeyChar = 0;
      }

      let encryptedMessageChar = encryptedMessage.charAt(indexChar);
      let keyChar = key.charAt(indexKeyChar);

      let encryptedCharIndex = this.getCharIndex(encryptedMessageChar);
      let keyCharIndex = this.getCharIndex(keyChar);

      if (!this.isLatinChar(encryptedMessageChar)) {
        messageChars.push(encryptedMessageChar);
        continue;
      }

      let char = this.alphabet[(encryptedCharIndex + this.alphabet.length - keyCharIndex) % this.alphabet.length];
      messageChars.push(char);
      indexKeyChar++
    }

    if (this.isDirect) {
      return messageChars.join('');  
    } else {
      return messageChars.reverse().join('');
    }
  }

  getCharIndex(char) {
    return this.alphabet.indexOf(char);
  }

  isLatinChar(char) {
    return this.alphabet.includes(char);
  }
}

module.exports = VigenereCipheringMachine;
