import './LeftSidebar.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';




import { useState } from 'react';


const button = [
    {
      label: 'Default Rule'
    },
    {
      label: 'Fall back rule',
     
    }
  ];

export const LeftSidebar = () =>{


    const handleEnter = (event) => {
        if (event.key.toLowerCase() === "enter") {
          const form = event.target.form; 
         // console.log('form:', form)
        //  console.log('[...form]:', [...form])
          const index = [...form].indexOf(event.target);
         // console.log('index:', index)
          form.elements[index + 1].focus();
          event.preventDefault();
        }
      };

    return (
        <div className="side">
            <div className='backToStages'>
                <ArrowBackIosNewIcon className='backArrowBts' style={{fontSize:14}}/>
                <p className='btsPara'>Back to Stages</p>
            </div>

            <div className='boxStepper'>
                <p className='rules'>RULES</p><br/>
                <form className='innerBoxStepper'>
                    <div className='inputDiv'>
                        <FiberManualRecordIcon className='dotIcon1' style={{fontSize:14}}/>
                        <input className='inputBoxSideBar1' onKeyDown={handleEnter} type="text" placeholder='Default Rule' />
                    </div>
                    <div className='inputDiv distance'>
                        <FiberManualRecordIcon className='dotIconOther' style={{fontSize:14}}/>
                        <input className='inputBoxSideBarOther' onKeyDown={handleEnter} type="text" placeholder='Fall back rule' />
                    </div>
                    <div className='inputDiv distance'>
                        <FiberManualRecordIcon className='dotIconOther' style={{fontSize:14}}/>
                        <button className='addNewRule'>Add New Rule</button>
                    </div>
                </form>
                
                
            </div>
        </div>
    )
}

/*
 <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
              
              
              
              
              */