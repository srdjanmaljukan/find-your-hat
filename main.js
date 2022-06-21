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
      for (i = 0; i < height.length; i++) {
        for (j = 0; j < width.length; j++) {
          
        }
      }
    }
  }
  