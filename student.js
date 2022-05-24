class student {
	constructor (name,dept,arrayOfMarks){
		this.name = name;
		this.dept = dept;
		this.arrayOfMarks = arrayOfMarks;
	}

	sumOfArray (){
		let total = this.arrayOfMarks.reduce((a,b)=>a+b);
        return total;
	}

	getAverage (){
		let total = this.sumOfArray();// to access teh sumOfArray method we need to use this keyword and we need to store it in a variable
		let A = (total / this.arrayOfMarks.length);
        return A;
    }

	getGrade (){
		
        let average = this.getAverage();// to access teh getAverage method we need to use this keyword and we need to store it in a variable

        if(average >= 80){
            return 'A';
        }
        else if(average >= 60){
            return 'B';
        }
        else if(average >= 40){
            return 'C';
        }
        else{
            return 'F';
        }
	}

	print () {
	 console.log(`${this.name} is in ${this.dept} and has ${this.getAverage()}% and grade is ${this.getGrade()}`);
	}
}

const obj = new student('abishek','ECE', [99,95.5,99,91,98]);// creating an object of student class
obj.print();// calling the print method