import './RightBox.css'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { useState } from 'react';

export const RightBox = () =>{
    const [list,setList] = useState(['Urgent']);
    console.log('list:', list)
    return (
        <div className="rightBox">
            <p className='MainDefaultHeading'>Default Rule</p>
            <div className='labelInputCombo'>
                <label className='labelButton'>Button Name</label>
                <input className='rightInputBox1' type="text" placeholder='Create PO' />
            </div>
            
            <div className='ifAllSelect'>
            <select className='selecttag'>
                <option value=''>If All</option>
            </select>
            <p className='ifAllPara'>of the following conditions are met</p>
            </div>

            <div className='flexListInput'>
                <DragIndicatorIcon style={{color:"#8c8b8b",fontSize:21,marginTop:5}} />
                <select className='select1'>
                    <option value=''>Text</option>
                </select>
                <select className='select2'>
                    <option value=''>Contains</option>
                </select>
                <div className='listInput'>
                   { 
                        list.map((el)=>(
                            <div className='listItem'>
                                <p style={{color:"black"}} className='paraList'>{el}</p>
                            </div>
                        ))
                    }
                    <CloseIcon className='closeIcon' style={{fontSize:14}}/>
                </div>
                <DeleteIcon className='deleteIcon' style={{fontSize:14}}/>
            </div>
            <button className='addNewRules'>Add New Condition</button>
            <hr style={{color:"#8c8b8b"}}/>
            <div className='labelInputCombo'>
                <label className='labelButton'>Perform the following Action</label>
                <div style={{display:"flex"}}>
                    
                    <input className='rightInputBoxes' type="text" placeholder='Start New App' />
                    <DeleteIcon className='deleteIcon' style={{fontSize:14,marginTop:20}}/>
                </div>
                <hr style={{color:"#8c8b8b"}}/><br/>
                <button className='addNewRules'>Add Another Action</button>
            </div>
        </div>
    )
}