const students = [
    {
        'id'  : 1,
        'name'  :'Shweta Shrestha',
        'games' :['football','table tennis'],
        'selected':false
    },
    {
        'id'  : 2,
        'name'  :'Salina Shrestha',
        'games' :['basketball','chess'],
        'selected':false
    },
    {
        'id'  : 3,
        'name'  :'Aditya Shrestha',
        'games' :['basketball','football'],
        'selected':false
    },
    {
        'id'  : 4,
        'name'  :'Niroj Shrestha',
        'games' :['basketball','football'],
        'selected':false
    },
]
export default{
    getStudents(){
        return students;
    }
}