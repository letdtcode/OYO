import './DateRangeSelector.scss';
import { t } from 'i18next';
import { useSelector } from 'react-redux';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { addDays } from 'date-fns';

import { useEffect, useState } from 'react';
import { enGB } from 'date-fns/locale';
import { DateRangePicker } from 'react-nice-dates';
import moment from 'moment';
import 'react-nice-dates/build/style.css';

export default function DateRangeSelector(props) {
    const { dateBook, setDataDay } = props;
    const dataBooking = useSelector((state) => state.booking.info);
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    useEffect(() => {
        setStartDate(moment(dateBook[0], 'DD/MM/yyyy').toDate());
        setEndDate(moment(dateBook[1], 'DD/MM/yyyy').toDate());
    }, [dataBooking.checkIn, dataBooking.checkOut]);

    useEffect(() => {
        if (startDate && endDate) {
            setDataDay(startDate, endDate);
        }
    }, [startDate, endDate]);
    return (
        <div className="date-range-selector">
            <DateRangePicker
                startDate={startDate || new Date()}
                endDate={endDate || addDays(new Date(), 1)}
                onStartDateChange={(e) => {
                    setStartDate(e);
                }}
                onEndDateChange={setEndDate}
                minimumDate={new Date()}
                format="dd/MM/yyyy"
                locale={enGB}
                
            >
                {({ startDateInputProps, endDateInputProps, focus }) => (
                    <div className="info_date">
                        <div className="checkin">
                            <div className="title__checkin">{t('contentMain.fromDay')}</div>
                            <input
                                className="date__checkin"
                                {...startDateInputProps}
                                placeholder={dataBooking.checkIn}
                            />
                            <ExpandMoreIcon className="icon__expand" />
                        </div>
                        <div className="checkout">
                            <div className="title__checkout">{t('contentMain.toDay')}</div>
                            <input
                                className="date__checkout"
                                {...endDateInputProps}
                                placeholder={dataBooking.checkOut}
                            />
                            <ExpandMoreIcon className="icon__expand" />
                        </div>
                    </div>
                )}
            </DateRangePicker>
        </div>
    );
}
