import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { CiCalendar } from "react-icons/ci";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import img4 from '../images/woman-1274056_1280.jpg'
import img5 from '../images/woman-2564660_1280.jpg'
import SingleBlog3 from './SingleBlog3';
import SingleBlog4 from './SingleBlog4';
const SingleBlogmain = () => {
    const singleblog = useSelector((state)=>state.cart.singleblog.chat1)
  return (
    <Fragment>
<div className='singleblog2'>
<h1>{singleblog.headtitle1}</h1>
<div className='date'>
        <h4><CiCalendar /> {singleblog.date1} </h4>
        <h4> <HiOutlineChatAlt2 /> {singleblog.chat1}</h4>
        </div>
        <img src={singleblog.image1} alt=''/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada malesuada metus ut placerat. Cras a porttitor quam, eget ornare sapien. In sit amet vulputate metus. Nullam eget rutrum nisl. Sed tincidunt lorem sed maximus interdum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean scelerisque efficitur mauris nec tincidunt. Ut cursus leo mi, eu ultricies magna faucibus id.</p>
        <div className='p1'>
        <div className='lineblog'></div>
          <p>{singleblog.title1}</p>
        </div>
        <div className='imgesblog'>
        <img src={img4} alt=''/>
        <img src={img5} alt=''/>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id dolor dui, dapibus gravida elit. Donec consequat laoreet sagittis. Suspendisse ultricies ultrices viverra. Morbi rhoncus laoreet tincidunt. Mauris interdum convallis metus. Suspendisse vel lacus est, sit amet tincidunt erat. Etiam purus sem, euismod eu vulputate eget, porta quis sapien. Donec tellus est, rhoncus vel scelerisque id, iaculis eu nibh.</p>
        <p>Duis vestibulum quis quam vel accumsan. Nunc a vulputate lectus. Vestibulum eleifend nisl sed massa sagittis vestibulum. Vestibulum pretium blandit tellus, sodales volutpat sapien varius vel. Phasellus tristique cursus erat, a placerat tellus laoreet eget. Fusce vitae dui sit amet lacus rutrum convallis. Vivamus sit amet lectus venenatis est rhoncus interdum a vitae velit.</p>
     <SingleBlog3/>
     <SingleBlog4/>
  </div>
    </Fragment>
  )
}

export default SingleBlogmain