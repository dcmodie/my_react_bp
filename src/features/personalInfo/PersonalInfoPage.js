import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

const PersonalInfoPage = ()=>{
	const pInfo = useSelector((state) => state.personalInfo );// pass into hook the function to get this data from the store
	const dispatch = useDispatch();//write to reducer

	const handleNameChange = (e)=>{
		dispatch({ type: 'nameChanged', payload: e.target.value });
	}

	const handleStreetChange = (e)=>{
		dispatch({ type: 'streetChanged', payload: e.target.value });
	}

	return (
		<div>
			<input value={pInfo.name} placeholder="name" onChange={ handleNameChange }/>
			<input value={pInfo.street} placeholder="street" onChange={ handleStreetChange }/>
		</div>
	)

}

export default PersonalInfoPage;
