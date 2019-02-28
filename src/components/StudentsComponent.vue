<template>
    <div>
        <h1>Students</h1>
        <ul>
            <li v-for="(student,index) in students" :key="student.id">
                {{student.name}}
                <i>{{student.games.length}} games played</i>
                <button @click="addTeamMember('A',index)">Team A</button>
                <button @click="addTeamMember('B',index)">Team B</button>
            </li>
        </ul>
        <hr/>
        <TeamComponent  type ='A'> Team A</TeamComponent>
        <TeamComponent  type ='B'> Team B</TeamComponent>
    </div>
</template>
<script>
import store from "../store/index";
import TeamComponent from "./TeamComponent";
export default {
    components:{
        TeamComponent         
    },
    computed:{
    students(){
        return store.state.students;
    }
    },
    methods:{
        addTeamMember(type,index){
            store.dispatch("addTeamMember",{type,index});
        }
   },
    created(){
        store.dispatch("getStudents");
    }
};
</script>

