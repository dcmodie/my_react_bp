const initialState = {
  name: 'aaa',
  street: 'ccc'
}

export default function personalInfoReducer(state = initialState, action) {
	switch (action.type){
		case "nameChanged":
			return {...state, name:action.payload}
			break;

		case "streetChanged":
			return {...state, street:action.payload}
			break;
		default :
			return state;
	}
}

