import React from "react";
import PropTypes from 'prop-types';

export default function LoginForm ({state, onSubmit}) {
    return (
    
        <form className='form' style={{ display: 'flex', margin: '5em' }}>
            <div style={{display:'flex', margin:'1em' }}>
                 <label htmlFor='email' className='form-label' style={{marginLeft:'1em', padding:'1em'}}>Email</label>
                <input type='email' value={state.email} id='email' style={{ borderRadius: '1em', padding:'1em' }}/>
            </div>
            <div style={{display:'flex', margin:'1em' }}>
                 <label htmlFor='password' style={{marginLeft:'1em', padding:'1em'}}>Password</label>
                <input type='password' value={state.password} id='password' style={{ borderRadius: '1em',padding:'1em' }}/>
            </div>
            <button type='submit' style={{ borderRadius:'1em', paddingLeft:'3em', paddingRight:'3em', margin:'1em' }} onSubmit={onSubmit}>Submit</button>
            </form>
    )
}

LoginForm.prototype = {
    state: {
        email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired, 
    },
   
    onSubmit: PropTypes.func,
   
}