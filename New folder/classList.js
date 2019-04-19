//private
//var list = []
// const electiveOne = {
//     courseCode: 'ELEN4010',
//     yearOffered: 4
//   }
//   const electiveTwo = {

//   }
//   const electiveThree = {
//     courseCode: 'ELEN4020',
//     yearOffered: 4
//   }
//   const electiveFour = {
//     courseCode: 'ELEN4017',
//     yearOffered: 4
//   }
  let list =  []
//     {
//       name: 'Kwezi',
//       studentNumber: 453528,
//       yearOfStudy: 4,
//       electives: [electiveOne, electiveTwo, electiveThree]
//     },
//     {
//       name: 'Pieter',
//       studentNumber: 454345,
//       yearOfStudy: 3,
//       electives: [electiveOne, electiveTwo, electiveFour]
//     },
//     {
//       name: 'Jade',
//       studentNumber: 678345,
//       yearOfStudy: 4,
//       electives: [electiveTwo, electiveThree, electiveFour]
//     },
//     {
//       name: 'Kiren',
//       studentNumber: 567893,
//       yearOfStudy: 4,
//       electives: [electiveOne, electiveTwo, electiveThree]
//     }
//   ]

//public
module.exports = 
{
    add:function(student){
        list.push(student)
    },
    edit:function(student,index){
        list[index] = student
    },
    get: function(index){
        return list[index]
    },
    delete: function(index){
        list.splice(index,1)
    },
    getList: function(){
        return list
    }
}