import React, {useState} from 'react';

function TeamForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    role: ''
  });

  const onChangeHandler = event => {
    console.log(formState);
    setFormState({[event.target.name]: event.target.value});
  };
  const addMe = event => {
    event.preventDefault();
  };

  return (
    <form onSubmit={addMe}>
      <div className='form-group'>
        <label>Add Name</label>
        <input
          type='text'
          className='form-control '
          placeholder='Enter your Name'
          name='name'
          value={formState.name}
          onChange={onChangeHandler}
        />
      </div>
      <div className='form-group'>
        <label>Add Email</label>
        <input
          type='text'
          className='form-control'
          placeholder='Enter your Email'
          name='email'
          value={formState.email}
          onChange={onChangeHandler}
        />
      </div>
      <div className='form-group'>
        <label>Add Role</label>
        <input
          type='text'
          className='form-control'
          placeholder='Add Role'
          name='role'
          value={formState.role}
          onChange={onChangeHandler}
        />
      </div>
      <button className='btn btn-block btn-danger'>Add me</button>
    </form>
  );
}

export default TeamForm;
