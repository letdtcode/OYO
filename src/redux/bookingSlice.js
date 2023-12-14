import { createSlice  } from '@reduxjs/toolkit';
import moment from 'moment';

const bookingSlice = createSlice({
    name: 'booking',
    initialState: {
        nameCustomer: '',
        phoneNumberCustomer: 0,
        checkIn: moment().format('DD/MM/yyyy'),
        checkOut: moment().format('DD/MM/yyyy'),
        numAdult: 1,
        numChild: 0,
        numBornChild: 0,
        totalCostAccom:0,
        originPay: 0,
        surcharge: 0,
        totalTransfer: 0,
        paymentPolicy: 'PAYMENT_FULL',
        paymentMethod: 'DIRECT',
        accomId: 0,
    },
    reducers: {
        addInfoBooking(state, action) {
            state.checkIn = action.payload.checkIn;
            state.checkOut = action.payload.checkOut;
            state.accomId = action.payload.accomId;
            state.numAdult = action.payload.guests.numAdult;
            state.numChild = action.payload.guests.numChild;
            state.numBornChild = action.payload.guests.numBornChild;
            state.surcharge = action.payload.surcharge
            state.originPay = action.payload.originPay;
            state.nameCustomer = action.payload.nameCustomer
            state.phoneNumberCustomer = action.payload.phoneNumberCustomer;

        },
        addDay(state, action) {
            state.checkIn = action.payload.checkIn;
            state.checkOut = action.payload.checkOut;
        },

        addPaymentMethod(state, action) {
            state.paymentMethod = action.payload;
        },
        addPaymentPolicy(state, action) {
            state.paymentPolicy = action.payload;
        },
        addTotalTransfer(state, action) {
            state.totalTransfer = action.payload;
        },
        updateInfoBooking(state, action) {
           state.surcharge = action.payload.costSurcharge
           state.originPay = action.payload.totalBill;
           state.totalCostAccom = action.payload.totalCostAccom;
        },
        clearInfoBooking(state, action ){
            state.nameCustomer = '';
            state.phoneNumberCustomer = 0;
            state.checkIn = moment().format('DD/MM/yyyy');
            state.checkOut = moment().format('DD/MM/yyyy');
            state.numAdult = 1;
            state.numChild = 0;
            state.numBornChild = 0;
            state.totalCostAccom = 0;
            state.originPay = 0;
            state.surcharge = 0;
            state.totalTransfer = 0;
            state.paymentPolicy = 'PAYMENT_FULL';
            state.paymentMethod = 'DIRECT';
            state.accomId = 0;
        }
    },
});



export default bookingSlice;