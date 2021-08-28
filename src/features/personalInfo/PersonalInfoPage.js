import React from 'react'
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux';

const personalInfo = state => state.personalInfo;  //what is this

const PersonalInfoPage = ()=>{
	const pInfo = useSelector(personalInfo);//read from redux
	const dispatch = useDispatch();//why is this necessary, write to redux

	const handleChange = (e)=>{
		dispatch({ type: 'nameChanged', payload: e.target.value });
	}

	return (
		<div>
			<div>
				{pInfo.name}
			</div>
			<div>
				{pInfo.street}
			</div>


			<input value={pInfo.name} onChange={ handleChange }/>
		</div>
	)

}

export default PersonalInfoPage;
