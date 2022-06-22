const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(field = [[]]) {
      this.field = field;
      this.locationX = 0;
      this.locationY = 0;
      this.field[0][0] = pathCharacter;
    }
  
    print() {
      const displayField = this.field.map(row => {
        return row.join('');
      }).join('\n');
      console.log(displayField);
    }
  
    static generateField(width, height, percentage = 0.2) {
        const field = new Array(height).fill(0).map(el => new Array(width));
        for (let y = 0; y < height; y++) {
          for (let x = 0; x < width; x++) {
            const prob = Math.random();
            field[y][x] = prob > percentage ? fieldCharacter : hole;
          }
        }

        const hatLocation = {
          x: Math.floor(Math.random() * width),
          y: Math.floor(Math.random() * height)
        }
        while (hatLocation.x === 0 && hatLocation.y === 0) {
          hatLocation.x = Math.floor(Math.random() * width);
          hatLocation.y = Math.floor(Math.random() * height);
        }
        field[hatLocation.y][hatLocation.x] = hat;
        return field;
    }
  }

const field = new Field(Field.generateField(20, 10, 0.2));
console.log(field.print());
  