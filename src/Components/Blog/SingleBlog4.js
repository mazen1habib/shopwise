import React, { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux';
import { cartslice } from '../../Cart/Cartslice';

const SingleBlog4 = () => {
    const dispatch=useDispatch()
    const [user ,setuser]=useState({
        name:'',
        email:'',
        comment:''
    })
  return (
   <Fragment>
       <h2>Write a comment</h2>
       <div className='inputcomment'>
       <div class="coolinput">
    <label for="input" class="text">Name:</label>
    <input type="text" placeholder="Write here..." name="input" className="input" value={user.name} onChange={(e)=>setuser({...user,name:e.target.value})}/>
    </div>
    <div class="coolinput">
    <label for="input" class="text">Email:</label>
    <input type="text" placeholder="Write here..." name="input" className="input"  value={user.email} onChange={(e)=>setuser({...user,email:e.target.value})}/>
</div>
       </div>
       <div class="coolinput1">
    <label for="input" class="text">Comment:</label>
    <input type="text" placeholder="Write here..." name="input" className="input" value={user.comment} onChange={(e)=>setuser({...user,comment:e.target.value})}/>
</div>
<div className='poc'> <button class="btn-53" onClick={()=>{dispatch(cartslice.actions.addtocomment(user)) } }>
  <div class="original">SUBMIT</div>
  <div class="letters " style={{color:'white'}}>
    
    <span style={{color:'white'}}>S</span>
    <span style={{color:'white'}}>U</span>
    <span style={{color:'white'}}>B</span>
    <span style={{color:'white'}}>M</span>
    <span style={{color:'white'}}>I</span>
    <span style={{color:'white'}}>T</span>
  </div>
</button></div>

   </Fragment>
  )
}

export default SingleBlog4