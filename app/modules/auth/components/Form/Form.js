import React from 'react';
import PropTypes from 'prop-types'

import { View, Text } from 'react-native';
import { Button } from 'react-native-elements'

import { validate, isEmpty } from '../../utils/validate'

import styles from "./styles"

import AuthTextInput from "../AuthTextInput"

class Form extends React.Component {
    constructor(props) {
        super(props);

        const fields = props.fields;
        const error = props.error;
        const state = {};

        for (let i = 0; i < fields.length; i++) {
            let field = fields[i];
            let {key, type, value} = field;
            state[key] = {type: type, value: value};
        }

        state["error"] = error;

        this.state = state;

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit() {
        const data = this.state;
        const result = validate(data);

        if (!result.success) this.setState({error: result.error});
        else this.props.onSubmit(this.extractData(data));
    }

    extractData(data){
        const retData = {};

        Object.keys(data).forEach(function(key) {
            if (key !== "error"){
                let { value } = data[key];
                retData[key] = value;
            }
        });

        return retData;
    }

    onChange(key, text) {
        const state = this.state;
        state[key]['value'] = text;
        this.setState(state);
    }

    render() {
        const { fields, showLabel, buttonTitle } = this.props;

        return (
            <View style={styles.wrapper}>
                {
                    (!isEmpty(this.state.error['general'])) &&
                    <Text style={styles.errorText}>{this.state.error['general']}</Text>
                }

                {
                    fields.map((data, idx) => {
                        let {key, label, placeholder, autoFocus, secureTextEntry} = data;
                        return (
                            <AuthTextInput key={key}
                                           label={label}
                                           showLabel={showLabel}
                                           placeholder={placeholder}
                                           autoFocus={autoFocus}
                                           onChangeText={(text) => this.onChange(key, text)}
                                           secureTextEntry={secureTextEntry}
                                           value={this.state[key]['value']}
                                           error={this.state.error[key]}/>
                        )
                    })
                }


                <Button
                    raised
                    title={buttonTitle}
                    borderRadius={4}
                    containerViewStyle={styles.buttonContainer}
                    buttonStyle={styles.button}
                    textStyle={styles.buttonText}
                    onPress={this.onSubmit}/>
            </View>
        );
    }
}

Form.propTypes = {
    // fields: PropTypes.object,
    showLabel: PropTypes.bool,
    buttonTitle: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
    error: PropTypes.object
}

export default Form;
