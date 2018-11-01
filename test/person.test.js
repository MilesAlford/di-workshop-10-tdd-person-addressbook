const chai = require('chai')
const expect = chai.expect

const Person = require('../models/person.js')

describe('Person', ()=> {
it('should intialize properly', ()=> {
    var person = new Person('Joe', 'Bloggs', '1 Jan 1990')
   
    expect(person.firstName).to.equal('Joe')
    expect(person.surname).to.equal('Bloggs')
    expect(person.dob).to.equal('1 Jan 1990')

    expect(person.emails).to.deep.equal([])
})

it('should capitalize the first name', ()=> {
    var person = new Person('amy', 'Nother', '1 Jan 1990')
   
    expect(person.firstName).to.equal('Amy')
   
})

it('should return a full name', ()=>{
    var person = new Person('Joe', 'Bloggs', '1 Jan 1990')

    expect(person.fullname()).to.equal('Joe Bloggs')
})

it('should accept new emails and add them to the array', ()=> {
    var person = new Person('Joe', 'Bloggs', '1 Jan 1990')

    person.addEmail('joe@example.com')
    person.addEmail('joe.bloggs@workexample.com')

    expect(person.emails).to.deep.equal(['joe@example.com', 'joe.bloggs@workexample.com'])
})

it('should accept new phone numbers and add them to the array', ()=> {
    var person = new Person('Joe', 'Bloggs', '1 Jan 1990')

    person.addPhoneNumber('0309 9884 9312')
    person.addPhoneNumber('0908 5643 2341')

    expect(person.phoneNumbers).to.deep.equal(['0309 9884 9312', '0908 5643 2341'])
})

it('Should return details',()=>{
    var person = new Person('Joe', 'Bloggs', '1 Jan 1990')  

    person.addEmail('joe.bloggs@example.com')
    person.addPhoneNumber('0293 9932 4456')

    expect(person.returnFormattedDetails()).to.deep.equal(['Joe Bloggs','----------','DOB: 1 Jan 1990',"/n",'Email Addresses', '- joe.bloggs@example.com', "/n", 'Phone Numbers', '- 0293 9932 4456'])

})
})
// Your Person test goes here!