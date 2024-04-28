import React, { Fragment } from 'react'
import { CiCalendar } from "react-icons/ci";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import img1 from '../images/blog_small_img1.jpg'
import img2 from '../images/blog_small_img2.jpg'
import img3 from '../images/blog_small_img3.jpg'
import img4 from '../images/blog_small_img4.jpg'
import img5 from '../images/blog_small_img5.jpg'
import img6 from '../images/blog_small_img6.jpg'
import './section1blog.css'
import { Link, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartslice } from '../../Cart/Cartslice';
const Session2Blog = () => {
    const users=[{ 
        image:img1,
        headtitle: 'But I must explain to you how all this mistaken idea',
        date: 'April 14, 2018',
        chat:'10',
        title:"If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text"
    },{
        image:img2,
        headtitle: 'On the other hand we provide denounce with righteous',
        date: 'jan 1, 2024',
        chat:'13',
        title:"If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text"},
    {   image:img3,
        headtitle: 'Why is a ticket to Lagos so expensive?',
        date: 'feb 23, 2024',
        chat:'3',
        title:"If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text"} ,
        {   image:img4,
            headtitle: 'The Problem With Typefaces on the Web',
            date: 'Dec 14, 2023',
            chat:'30',
            title:"If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text"

        },{
            image:img5,
            headtitle: 'But I must explain to you how all this mistaken idea',
            date: 'jan 11, 2023',
            chat:'20',
            title:"If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text"
        } ,{   image:img6,
            headtitle: 'But I must explain to you how all this mistaken idea',
            date: 'Mar 14, 2023',
            chat:'15',
            title:"If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text"}]
           const dispatch=useDispatch()
            return (
   <Fragment>
    <section className='contaniercon'>
    {
        users.map((ol,idx)=>(
            <div className='userblog'>
        <img src={ol.image} alt=''/>
       <NavLink onClick={()=>{dispatch( cartslice.actions.addtosingleblog({image1:ol.image,headtitle1:ol.headtitle,date1:ol.date,chat1:ol.chat, title1:ol.title}))} }> <Link to={'/singleBlog'}> <h1> {ol.headtitle}</h1> </Link> </NavLink> 
        <div className='date'>
        <h4><CiCalendar /> {ol.date} </h4>
        <h4> <HiOutlineChatAlt2 /> {ol.chat}</h4>
        </div>
        <p>{ol.title}</p>
    </div>

        ))
    }
    </section>
   </Fragment>
  )
}

export default Session2Blog