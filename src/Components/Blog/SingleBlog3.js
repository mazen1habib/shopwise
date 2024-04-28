import React, { Fragment } from 'react'
import imguser1 from '../images/user1.jpg'
import imguser2 from '../images/user2.jpg'
import imguser3 from '../images/user3.jpg'
import imguser4 from '../images/user4.jpg'
import { useSelector } from 'react-redux'
import img1 from '../images/user.png'
const SingleBlog3 = () => {
    const userblog=[{
        image:imguser1,
        name:'Maria Redwood',
        date:'MARCH 5, 2018, 6:05 PM',
        titlep:'We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire that the cannot foresee the pain and trouble that.'
      },{
        image:imguser2,
        name:'Alden Smith',
        date:'MARCH 20, 2023, 7:05 PM',
        titlep:'We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire that the cannot foresee the pain and trouble that.'
      },{
        image:imguser3,
        name:'Daisy Lana',
        date:'jan 5, 2024, 9:05 PM',
        titlep:'We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire that the cannot foresee the pain and trouble that.'
      },{
        image:imguser4,
        name:'John Becker',
        date:'APRIL 15, 2018, 10:30 PM',
        titlep:'We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire that the cannot foresee the pain and trouble that.'
      }]
      const us=useSelector((state)=>state.cart.comment)
      console.log(us)
  return (
   <Fragment>
 { 
        userblog.map(ol=>(
          <div className='commentblog'>
          <img src={ol.image} alt=''/>
          <div className='datacomment'>
          <h3>{ol.name}</h3>
          <h4>{ol.date}</h4>
          <p>{ol.titlep}</p>
          </div>
           </div>
        ))
       }
        {
    us.map(el=>(
        <div className='commentblog'>
          <img src={img1} alt=''/>
          <div className='datacomment'>
          <h3>{el.name}</h3>
          <h4>feb 14 6:00pm</h4>
          <p>{el.comment}</p>
          </div>
           </div>
        ))
        }
   </Fragment>
  )
}

export default SingleBlog3