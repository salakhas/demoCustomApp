import './Navbar.css'
import img from '../../images/molecule.png';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react';

export const Navbar = () => {
    // const [timeStamp,setTimeStamp] = useState();
    // const time = new Date();
    // console.log('time:', time)
    return (
        <div className="nav">
            <img className='iconImg' src={img} alt="" />
            <div className='navBox'>
                <p className='navHeading'>Demo Custom App</p>
                <p className='navSmallHeading'>APP NAME</p>
            </div>
            <ArrowForwardIosIcon style={{marginTop:20,fontSize:18,marginLeft:15,color:"#abb9c1",marginRight:7}}/>
            <div className='navBox'>
                <p className='navHeading'>Assessment</p>
                <p className='navSmallHeading'>STAGE</p>
            </div>
            <ArrowForwardIosIcon style={{marginTop:20,fontSize:18,marginLeft:15,color:"#abb9c1",marginRight:7}}/>
            <div className='navBox'>
                <p className='navHeading'>Create PO</p>
                <p className='navSmallHeading'>BUTTON</p>
            </div>
            <ArrowForwardIosIcon style={{marginTop:20,fontSize:18,marginLeft:15,color:"#abb9c1",marginRight:7}}/>
            <div className=''>
                <p className='buttonRules'>Button Rules</p>
            </div>
            <div className='rightSide'>
                
                    <p className='datePara'>App Saved on 22 June 2022 7:34pm</p>
                    <button  className='doneButton'>DONE</button>
                
            </div>
        </div>
    )
}