import React, { Component } from 'react';

import Input from '../components/UI/Input/Input'
import Button from '../components/UI/Button/Button'
import Users from './Users';

import classes from './Main.css';

class Main extends Component {
  state = {
    contactForm: {
        name: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Your Name'
            },
            value: ''
        },
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Your Email'
            },
            value: '',
        },
        contact: {
          elementType: 'input',
          elementConfig: {
              type: 'text',
              placeholder: 'Your Contact'
          },
          value: '',
        }
    },
    update: {
      updated: false,
      value: 'Add'
    }
  }

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedContactForm ={
        ...this.state.contactForm
    };
    const updatedFormElement = {
        ...updatedContactForm[inputIdentifier]
    };
    updatedFormElement.value = event.target.value;
    updatedContactForm[inputIdentifier] = updatedFormElement;
    this.setState({contactForm: updatedContactForm});
  }

  buttonClickedHandler = () => {

    const updatedContactForm ={
        ...this.state.update
    };

    if(updatedContactForm.updated){
        updatedContactForm.updated = false;
        updatedContactForm.value = 'Add'
    }
    else {
        updatedContactForm.updated = true;
        updatedContactForm.value = 'Update'
    }
    

    this.setState({update: updatedContactForm});
  }

  render () {
    const formElementsArray = [];
        for (let key in this.state.contactForm) {
            formElementsArray.push({
                id: key,
                config: this.state.contactForm[key]
            });
        }
        let form = (
            <div className={classes.Main}>
                {formElementsArray.map(formElement => (
                    <Input 
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value} 
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}/>
                ))}
                <Button display="Hidden"></Button>

                <Button 
                    hidden="false"
                    btnType="Success"
                    clicked={this.buttonClickedHandler}>
                        {this.state.update.value}
                </Button>
            </div>
        );
  
        return(
            <div className={classes.App}>
                <h2>Enter your Personal Data</h2> 
                {form}
                <Users/>
            </div>
        );
  }
}

export default Main;