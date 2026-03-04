function Intro(fname){

    this.fname = fname;
}

Intro.prototype.sayHello = function(otherName){

    console.log(`hi ${otherName} I am ${this.fname}`)

}

const user = new Intro("Aryan");
user.sayHello("Sandeep");