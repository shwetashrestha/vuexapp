import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex)
import data from '../api/data';
export default new Vuex.Store({
    state:{//data
        student:[],
        teamA:[],
        teamB:[]
    },
    getters:{//computed properties

    },
    actions:{//methods
        getStudents(context){
            context.commit('setStudents')
        },
        addTeamMember(context,data){
            context.commit('pushMemberToTeam', data);
           // console.log(data);
        }
    },
    mutations:{//used for changind the state
        setStudents(state) {
            state.students = data.getStudents()
           // console.log(data);
        },
        pushMemberToTeam(state,data){
            if(data.type === 'A'){
            state.teamA.push(state.students[data.index])
            }else{
            state.teamB.push(state.students[data.index])
            }
            
        }
    }
})
