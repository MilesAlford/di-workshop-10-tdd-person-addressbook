// Your Person class goes here!
class Person {
constructor(firstName, surname, dob){
this.firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1)
this.surname = surname
this.dob = dob
this.emails = []
this.phoneNumbers = []
}


fullname() {
 return this.firstName + ' ' + this.surname
}

addEmail(email) {
    this.emails.push(email)
}

addPhoneNumber(phoneNumber) {
    this.phoneNumbers.push(phoneNumber)
}

returnFormattedDetails() {
    var details = [
        this.fullname(),
        '----------',
        'DOB: ' + this.dob,
        "/n",
        'Email Addresses',
        '- ' + this.emails,
        "/n",
        'Phone Numbers',
        '- ' + this.phoneNumbers
    ]
    return details
}

}

module.exports = Person