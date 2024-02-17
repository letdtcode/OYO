import React from 'react';
import { styled } from '@mui/material/styles';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { useDispatch } from 'react-redux';

import bookingSlice from '~/redux/bookingSlice';

import './CheckBoxPayment.scss';
import { t } from 'i18next';

const StyledFormControlLabel = styled((props) => <FormControlLabel {...props} />)(({ theme, checked }) => ({
    '.MuiFormControlLabel-label': checked && {
        color: theme.palette.primary.main
    }
}));

function MyFormControlLabel(props) {
    const radioGroup = useRadioGroup();

    let checked = false;

    if (radioGroup) {
        checked = radioGroup.value === props.value;
    }

    return <StyledFormControlLabel checked={checked} {...props} />;
}

export default function CheckBoxPaymentMethod(props) {
    const dispatch = useDispatch();

    const handleChangeRadio = (event) => {
        dispatch(bookingSlice.actions.addPaymentMethod(event.target.value));
    };

    return (
        <div className="payment-radio-box">
            <RadioGroup name="use-radio-group" defaultValue="PAYPAL">
                <MyFormControlLabel
                    value="PAYPAL"
                    label={t('title.bookingOfYou.paypal')}
                    control={<Radio sx={{ fontSize: '14px' }} onChange={handleChangeRadio} />}
                />
                  <MyFormControlLabel
                    value="VNPAY"
                    label={`VNPay`}
                    control={<Radio onChange={handleChangeRadio} />}
                />
                <MyFormControlLabel
                    value="DIRECT"
                    label={t('title.bookingOfYou.direct')}
                    control={<Radio onChange={handleChangeRadio} />}
                />
               
            </RadioGroup>
        </div>
    );
}
