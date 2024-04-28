import React, { Fragment, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import Nav from './Nav';
import Session8home from '../Components/Home/Session8home';
import Footer from '../Components/Footer/Footer';
import './css/faq.css'
import Scrollh from './Scrollh';
import '../Components/Looding/looding.css'
import Slide1up from '../Components/Singleproduct/Slide1up';
const FAQ = () => {
    const [x,setx]=useState(false)
    const [y,sety]=useState(false)
    const [z,setz]=useState(false)
    const [u,setu]=useState(false)
    const [o,seto]=useState(false)
    const [t,sett]=useState(false)
    const [p,setp]=useState(false)
    const [i,seti]=useState(false)
    const [k,setk]=useState(false)
    const [e,sete]=useState(false)
    const [looding1 ,setlooding] =useState(false)
    useEffect(()=>{
      setlooding(true)
      setTimeout(()=>{
        setlooding(false)
      },5000)
    } ,[])
  return (
    <Fragment>
    {
  looding1 ? <div className='loader1'> <div aria-label="Orange and tan hamster running in a metal wheel" role="img" class="wheel-and-hamster">
	<div class="wheel"></div>
	<div class="hamster">
		<div class="hamster__body">
			<div class="hamster__head">
				<div class="hamster__ear"></div>
				<div class="hamster__eye"></div>
				<div class="hamster__nose"></div>
			</div>
			<div class="hamster__limb hamster__limb--fr"></div>
			<div class="hamster__limb hamster__limb--fl"></div>
			<div class="hamster__limb hamster__limb--br"></div>
			<div class="hamster__limb hamster__limb--bl"></div>
			<div class="hamster__tail"></div>
		</div>
	</div>
	<div class="spoke"></div>
</div></div> : <Fragment>
<Slide1up/>
    <Nav/>
    <div className='sec1tem'>
        <h1> Frequently Asked Question</h1>
      <h3>
        <NavLink to={'/'} > Home</NavLink>  <MdOutlineKeyboardArrowRight size={35} />  <h3 className='mp'> faq</h3>  
        </h3>
        </div>
        <section className='bigcon'>
    <div className='confaq'>
        <div className='con1faq'>
        <h1>General Questions</h1>
        <div className='data'>
         <div className='data1' onClick={()=>setx(!x)}> <h4>Do you have any built-in caching?</h4> 
         <FaPlus size={15} />
       </div>
       <div className='linfaq'></div>
        {
          x&&  (<div className='d'> <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p></div>)
        } 
        </div>
        <div className='data'>
         <div className='data1' onClick={()=>sety(!y)}> <h4>How do I upload files from my phone or tablet?</h4> 
         <FaPlus size={15} />
       </div>
       <div className='linfaq'></div>
        {
          y&&   (<div className='d'><p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.

All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p></div>)
        } 
        </div>
        <div className='data'>
         <div className='data1' onClick={()=>setz(!z)}> <h4>How can I start my design?</h4> 
         <FaPlus size={15} />
       </div>
       <div className='linfaq'></div>
        {
          z&&  (<div className='d'><p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.

This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p></div>)
        } 
        
        </div>
        <div className='data'>
         <div className='data1' onClick={()=>seto(!o)}> <h4>What are popular free webpage builders?</h4> 
         <FaPlus size={15} />
       </div>
       <div className='linfaq'></div>
        {
          o&&   (<div className='d'><p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.

Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p></div>)
        }   
        </div>
        <div className='data'>
         <div className='data1' onClick={()=>setu(!u)}> <h4>How do you make your own website for free?</h4> 
         <FaPlus size={15} />
       </div>
       <div className='linfaq'></div>
        {
          u&&   (<div className='d'> <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.

Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.

Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p></div>)
        } 
        </div>
        </div>  
        <div className='con2faq'>
        <h1>Other Questions</h1>
        <div className='data'>
         <div className='data1' onClick={()=>sett(!t)}> <h4>What is the weirdest website on the internet?</h4> 
         <FaPlus size={15} />
       </div>
       <div className='linfaq'></div>
        {
          t&&  (<div className='d'> <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p></div>)
        } 
        </div>
        <div className='data'>
         <div className='data1' onClick={()=>setp(!p)}> <h4>Can I add/upgrade my plan at any time?</h4> 
         <FaPlus size={15} />
       </div>
       <div className='linfaq'></div>
        {
          p&&   (<div className='d'><p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.

All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p></div>)
        } 
        </div>
        <div className='data'>
         <div className='data1' onClick={()=>seti(!i)}> <h4>What access comes with my hosting plan?</h4> 
         <FaPlus size={15} />
       </div>
       <div className='linfaq'></div>
        {
          i&&  (<div className='d'><p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.

This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p></div>)
        } 
        
        </div>
        <div className='data'>
         <div className='data1' onClick={()=>setk(!k)}> <h4>What are some lesser known but useful websites?</h4> 
         <FaPlus size={15} />
       </div>
       <div className='linfaq'></div>
        {
          k&&   (<div className='d'><p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.

Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p></div>)
        }   
        </div>
        <div className='data'>
         <div className='data1' onClick={()=>sete(!e)}> <h4>How can web developers benefit from Adage?</h4> 
         <FaPlus size={15} />
       </div>
       <div className='linfaq'></div>
        {
          e&&   (<div className='d'><p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.

Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.

Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p></div>)
        } 
        </div>
        </div>
    </div>
    </section>
    <Session8home/>
    <Footer/>
    <Scrollh/>
    </Fragment>
    }
    </Fragment>
  )
}

export default FAQ