export default {
    artHobbies: state => {
      return state.hobbies.filter(item => item.type === 'art');
    },
    sportsHobbies: state => {
      return state.hobbies.filter(item => item.type === 'sports');
    },
    name: state => {
      return state.name;
    }
}
