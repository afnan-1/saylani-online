
function savebtn(){
   let name = document.getElementById('name')
   let age = document.getElementById('age')
   let key = firebase.database().ref('student').push().key; //with key firebase generated
   let obj = {
       name:name.value,
       age:age.value,
       key:key
   }
   console.log(firebase);
   firebase.database().ref('student/'+key).set(obj);
 
}

function getValue(){
    // firebase.database().ref('student/-METKC7MFRACbsiIVG1Y').once('value',function(data){
    firebase.database().ref('student').on('child_added',function(data){
        console.log(data.val());
    })
}
getValue();
function removVal(){
    firebase.database().ref('student').remove()
}
// console.log(firebase);