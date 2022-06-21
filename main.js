const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(field) {
      this.field = field;
    }
  
    print() {
      console.log(this.field.join(''));
    }
  
    generateField(width, height) {
        let fieldArray = [];
      for (i = 0; i < height.length; i++) {
        for (j = 0; j < width.length; j++) {
          fieldArray.push(Math.floor(Math.random() * 9));
        }
      }
    }
  }

function generateField(width, height) {
    let fieldArray = [];
    for (let i = 0; i < height; i++) {
        let rowArray = [];
        for (let j = 0; j < width; j++) {
            let random = Math.floor(Math.random() * 9);
            arr.push(random);
        }
        field.push(arr);
    }
    return field;
}

console.log(generateField(10, 10));
  