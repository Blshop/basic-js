const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }
  encrypt(message, key) {
    if (!message || !key) { throw new Error("Incorrect arguments!") }
    let result = []
    let j = 0
    message = message.toUpperCase()
    key = key.toUpperCase()
    for (let i = 0; i < message.length; i++) {
      if (message.charAt(i).match(/[a-z]/i)) {
        let char_code = ((message.charCodeAt(i) + key.charCodeAt(j % key.length) - 2 * 65) % 26) + 65
        j++
        result.push(String.fromCharCode(char_code))
      }
      else {
        result.push(message[i])
      }
    }
    return this.isDirect ? result.join('') : result.reverse().join('');
    // remove line with error and write your code here
  }
  decrypt(message, key) {
    if (!message || !key) { throw new Error("Incorrect arguments!") }
    let result = []
    let j = 0
    message = message.toUpperCase()
    key = key.toUpperCase()
    for (let i = 0; i < message.length; i++) {
      if (message.charAt(i).match(/[a-z]/i)) {
        let char_code = ((message.charCodeAt(i) - key.charCodeAt(j % key.length) + 26) % 26) + 65
        j++
        result.push(String.fromCharCode(char_code))
      }
      else {
        result.push(message[i])
      }
    }
    return this.isDirect ? result.join('') : result.reverse().join('');
    // remove line with error and write your code here
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
