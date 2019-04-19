'use strict'

test('Hello world: hello should greet the world', ()=>
{
    let hello = 'world'
    expect(hello).toEqual('world')
})

//       name: 'Kwezi',
//       studentNumber: 453528,
//       yearOfStudy: 4,
//       electives: [electiveOne, electiveTwo, electiveThree]

//     courseCode: 'ELEN4001',
//     yearOffered: 4

test('Add: Add should successfully add a new student to list',() => 
{
    let classList = require('../classList')
    let student = {name:'sixolele',studentNumber: 1122277,yearOfStudy: 4, electives:[{courseCode: 'ELEN4010',yearOffered:4}]}
    
    classList.add(student);
    let resultantClassList = classList.getList();

    expect(resultantClassList).toContain(student)
})
test('get: get sould correctly return the student at the specified index', () =>
{
    let classList = require('../classList')
    let student = {name:'sixolele',studentNumber: 1122277,yearOfStudy: 4, electives:[{courseCode: 'ELEN4010',yearOffered:4}]}
    
    classList.add(student);

    expect(student).toEqual(classList.get(0)) 
})
