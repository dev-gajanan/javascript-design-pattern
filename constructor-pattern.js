function CreateProgrammer(firstName, lastName, programmingLanguage) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.programmingLanguage = programmingLanguage;
    this.info = () => {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName} & I love ${this.programmingLanguage}`);
    }
}

const gajanan = new CreateProgrammer("Gajanan", "Mallik", "Java");
gajanan.info();