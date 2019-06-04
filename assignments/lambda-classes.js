class Person {
    constructor(obj) {
        this.name = obj.name;
        this.age = obj.age;
        this.location = obj.location;
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}


class Instructor extends Person {
    constructor(obj) {
        super(obj);
        this.specialty = obj.specialty;
        this.favLanguage = obj.favLanguage;
        this.catchPhrase = obj.catchPhrase;
    }

    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }

    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}


class Student extends Person {
    constructor(obj) {
        super(obj);
        this.previousBackground = obj.previousBackground;
        this.className = obj.className;
        this.favSubjects = obj.favSubjects;
    }

    listsSubjects() {
        this.favSubjects.forEach(function (subject) {
            console.log(subject);
        });
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}


class ProjectManager extends Instructor {
    constructor(obj) {
        super(obj);
        this.gradClassName = obj.gradClassName;
        this.favInstructor = obj.favInstructor;
    }

    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`);
    }

    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}


const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const derper = new Student({
    name: 'Derper',
    location: 'Mars',
    age: 15,
    favLanguage: 'Python',
    specialty: 'machine learning',
    catchPhrase: `I let my computer learn for me`,
    previousBackground: 'mumble rapper',
    className: "ML90000",
    favSubjects: ["astrophysics", "science fiction", "biology"]
});

const noSleep = new ProjectManager({
    name: 'No Sleep',
    location: 'Hell',
    age: 999,
    favLanguage: 'Binary',
    specialty: 'opcodes',
    catchPhrase: `What is life?`,
    previousBackground: 'crossing guard',
    className: "T-1000",
    favSubjects: ["neuroscience of sleep deprivation"],
    gradClassName: "I don't know what this is supposed to be",
    favInstructor: "stackoverflow.com"
});


//tests Person method
noSleep.speak();

//tests Instructor methods
fred.demo("artificial intelligence");
fred.grade(derper, "astrophysics");

//tests Student methods
derper.listsSubjects();
derper.sprintChallenge("biology");
derper.PRAssignment("science fiction");


//tests Project Manager methods
noSleep.standUp('night owls');
noSleep.debugsCode(derper, "javascript");


/*


#### Stretch Problem

* Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
* Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
* Add a graduate method to a student.
  * This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
  * If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.

*
* */

Student.prototype.grade = 70;
console.log(derper.grade); //tests that derper now has a grade

Instructor.prototype.randomizeGrade = function (student) {
    randNum = Math.random() * 10;
    if (randNum > 5) {
        student.grade += randNum;
    } else {
        student.grade -= randNum;
    }
    console.log(student.grade);
}

fred.randomizeGrade(derper); //tests the randomizeGrade function on fred and derper

Student.prototype.graduate = function () {
    if (this.grade > 70) {
        return `${this.name} has a passing grade of ${this.grade} and has now officially graduated!`;
    } else {
        return `${this.name} has a failing grade of ${this.grade} and has now officially failed!`;
    }
}

console.log(derper.graduate()); //tests the graduate function on derper
