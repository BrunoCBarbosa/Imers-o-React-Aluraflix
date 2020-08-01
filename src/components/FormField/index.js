import React from 'react';
import propTypes from 'prop-types';

import { Label, LabelText, Input, FormFieldWrapper} from './styles' 

function FormField({label, type, name, value, onChange, suggestions }){
  const fieldId = `id_${name}`;
  const isTextArea = type === 'textarea'
  const tag = isTextArea ? 'textarea' : 'input'; 

  const hasValue = value.length;
  const hasSuggestions = Boolean(suggestions.length);

  return(
    <FormFieldWrapper>
      <Label htmlFor={fieldId}>
        <Input 
          as={tag} 
          id={fieldId} 
          type={type} 
          name={name} 
          value={value} 
          onChange={onChange} 
          autoComplete={hasSuggestions ? 'off' : 'on'}
          hasValue={hasValue} 
          list={`suggestionFor_${fieldId}`} 
        />
        <LabelText>{ label }</LabelText>
        {
          hasSuggestions && (
            <datalist id={`suggestionFor_${fieldId}`}>
            {
              suggestions.map((suggestion) => 
              <option value={suggestion} key={`suggestionFor_${fieldId}_option${suggestion}`}></option>
              )
            }
            
          </datalist>
          )
        }
      </Label> 
    </FormFieldWrapper>
  )
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
  suggestions: []
}

FormField.propTypes = {
  label: propTypes.string.isRequired,
  type: propTypes.string,
  name: propTypes.string.isRequired, 
  value: propTypes.string,
  onChange: propTypes.func,
  suggestions: propTypes.arrayOf(propTypes.string)
}

export default FormField