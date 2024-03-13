import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Box, Grid, Paper, Step, StepLabel, Stepper, withStyles } from '@material-ui/core'
import { Styles } from '../Common/styles';
import { renderText} from '../Common/displayComponents';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Finished from './Finished';

class FormComponent extends Component {
    state = {
        data: {
            firstName: "",
            lastName: "",
            gender: "",
            phone: "",
            email: "",

            recepientName:"",
            accountNumber: "",
            accountType: "",
            ifscCode: "",
            bankName: "",

            businesstName: "",
            businessType: "",
            country: "",
            state: "",
            websiteUrl:"",
        },
        errors: {},
        currentStep:0,

        
    };
    render() {
        const { classes } = this.props;

        const handleOnChange = ({ target }) => {
            const { data, errors } = this.state

            target.value.length <= 3
                ? (errors[target.name] = '${target.name} have at least 3 letter')
                : (errors[target.name] = "");
            data[target.name] = target.value;
            this.setState({ data, errors });
         
           

        };

        const handleNext=() => {
            let {currentStep}= this.state;
            currentStep= currentStep +1;
            this.setState({ currentStep});

        } ;
        const handlePrev=() => {
            let {currentStep}= this.state;
            currentStep= currentStep -1;
            this.setState({ currentStep});
        };
        const StepperStep =[
            {label: "Personal Data"},
            {label: "Bank Account"},
            {label: "More Info"},

        ];

        const getStepsItems=(steps) => {
            switch (steps) {
                case 0:
                    return (
                    <Step1
                           state={this.state} 
                           handleOnChange={handleOnChange} 
                           handleNext={handleNext}
                           />
                               ) ;
                case 1:
                    return ( <Step2
                        state={this.state} 
                        handleOnChange={handleOnChange} 
                        handleNext={handleNext}
                        handlePrev={handlePrev}
                    /> 
                    );
                
                case 2:
                    return (
                    <Step3
                     state={this.state} 
                    handleOnChange={handleOnChange} 
                    handleNext={handleNext}
                    handlePrev={handlePrev}/>
                    );
                case 3:
                    return <Finished state={this.state.data}/>;
                    
            
                default:
                    return (
                        <Step1
                               state={this.state} 
                               handleOnChange={handleOnChange} 
                               handleNext={handleNext}
                               />
                                   );
            }
        }

        return (
            <Grid container className={classes.formContainer}>
                <Grid item xs={12} sm={6}>
                  <Paper Component={Box} p={2}>
                       <Box mb={1}pt={2}>

                            {renderText({ label: "Adsense Form" })}

                       </Box>
                       <Stepper activeStep={this.state.currentStep} alternativeLabel>
                           {StepperStep.map((item,i) => (
                              <Step key={i}>
                                 <StepLabel>{item.label}</StepLabel>
                                     </Step>
                                       ))}
                        </Stepper>
                    </Paper>
                    
                    <br/>
                        <form className={classes.form}>
                 
                           {getStepsItems(this.state.currentStep)}
                            </form>
    
               
            </Grid>
            </Grid>
    )
    }
}

FormComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(Styles)(FormComponent);