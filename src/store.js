import Vue from 'vue'
import Vuex from 'vuex'
import questionSet from './questionSet.json'
import defaultQuestionSet from './questionSet.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nameOfCandidate: '',
    selectedLanguage: '',
    storeData:questionSet,
    storeQuestionSet: {},
    viewQuestion: 0
  },
  mutations: {
    updateOfNameAndLanguage(state,obj){
      state.nameOfCandidate = obj.nameOfCandidate;
      state.selectedLanguage = obj.selectedLanguage;
    },
    updateQuestionSet(state,value){
      state.storeQuestionSet = value;
    },
    updateViewQuestion(state, value){
      state.viewQuestion = value;
    }
  },
  actions: {
    goToHomedefault({commit}){
      commit("updateQuestionSet",storeData);
      commit("updateViewQuestion",0);
      commit("updateOfNameAndLanguage",{nameOfCandidate: '',selectedLanguage:''});
    }
  },
  getters:{
    getQuestionSet: state => {
      return state.storeQuestionSet
    },
    getQuestionSetLength: state =>{
      return state.storeQuestionSet.details.length;
    }
  }
})
