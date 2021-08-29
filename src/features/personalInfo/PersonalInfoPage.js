import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

const personalInfo = state => state.personalInfo;  //what is this

const PersonalInfoPage = ()=>{
	const pInfo = useSelector(personalInfo);//read from redux
	const dispatch = useDispatch();//why is this necessary, write to redux

	const handleNameChange = (e)=>{
		dispatch({ type: 'nameChanged', payload: e.target.value });
	}

	const handleStreetChange = (e)=>{
		dispatch({ type: 'streetChanged', payload: e.target.value });
	}

	return (
		<div>
			<input value={pInfo.name} onChange={ handleNameChange }/>
			<input value={pInfo.street} onChange={ handleStreetChange }/>
		</div>
	)

}

export default PersonalInfoPage;
