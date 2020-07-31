export default function(state = null, action){
    switch (action.type) {
      case 'Car_select':
        return action.payload;
        break;
      default:
        return state;
    }
}
