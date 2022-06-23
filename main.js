const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(field = [[]]) {
      this.field = field;
      this.locationX = Math.floor(Math.random() * this.field[0].length);
      this.locationY = Math.floor(Math.random() * this.field.length);
      this.field[this.locationY][this.locationX] = pathCharacter;
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

    isInBounds() {
      if (this.locationX >= 0 &&
        this.locationY >= 0 &&
        this.locationX < this.field[0].length &&
        this.locationY < this.field.length) {
          return true;
        } else {
          return false;
        }
    }

    isHat() {
      return this.field[this.locationY][this.locationX] === hat;
    }

    isHole() {
      return this.field[this.locationY][this.locationX] === hole;
    }

    askQuestion() {
      const answer = prompt('Which way? ').toUpperCase();
      if (answer === 'U') {
        this.locationY -= 1;
      } else if (answer === 'D') {
        this.locationY += 1;
      } else if (answer === 'R') {
        this.locationX += 1;
      } else if (answer === 'L') {
        this.locationX -= 1;
      } else {
        console.log('Nope, choose either L, D, R or U');
        this.askQuestion();
      }
    }

    runGame() {
      let playing = true;
      while (playing) {
        this.print();
        this.askQuestion();
        if (!this.isInBounds()) {
          console.log('Aww, you stepped out of bounds, better luck next time!');
          playing = false;
          break;
        } else if (this.isHole()) {
          console.log('Did you really not see that giant hole you just found yourself in?');
          playing = false;
          break;
        } else if (this.isHat()) {
          console.log('Well done, you found your hat!');
          playing = false;
          break;
        }
        this.field[this.locationY][this.locationX] = pathCharacter;
      }
    }
  }

const myField = new Field(Field.generateField(20, 10, 0.2));
myField.runGame();
  