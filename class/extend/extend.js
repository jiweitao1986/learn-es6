/**
 * 动物
 */
class Animal {

    constructor(name) {
        this.name = name;
        this.age = 20;
        this.favorites = [];
    }

    intro() {
        console.log('I am ' + this.name + '.');
    }

    eat() {
        console.log('I eat food.');
    }
}

/**
 * 鸟
 */
class Bird extends Animal{

    constructor(name, wings) {
        super(name);
        this.wings = wings;
    }

    eat() {
        super.eat();
        console.log('I eat bugs.');
    }

    fly() {
        console.log('I can fly.');
    }

    showWings() {
        console.log('I have wings');
    }
}

/**
 * 鱼
 */
class Fish extends Animal {

    constructor(name, fins) {
        super(name);
        this.fins = fins;
    }

    eat() {
        super.eat();
        console.log(this.favorites.length + ' eat earthworms');
    }

    swim() {
        console.log('I can swim.');
    }

    showFins() {
        console.log('I have ' + this.fins + 'fins.');
    }
}