import { DataGrid } from '@mui/x-data-grid';

// import './TableHistoryOwner.scss';
import { useEffect, useState } from 'react';

import partnerManageBookingAPI from '~/services/apis/partnerAPI/partnerManageBookingAPI';
import formatPrice from '~/utils/formatPrice';

const TableHistoryOwner = () => {
    const [dataListHistory, setDataListHistory] = useState([]);

    useEffect(() => {
        partnerManageBookingAPI.getHistoryBooking().then((dataResponse) => {
            setDataListHistory(dataResponse.data.content);
        });
    }, []);

    const rows = [];
    for (var i = 0; i < dataListHistory.length; i++) {
        rows.push({
            id: i + 1,
            bookingCode: dataListHistory[i].bookingCode,
            nameCustomer: dataListHistory[i]?.nameCustomer ? dataListHistory[i].nameCustomer : '',
            totalBill: dataListHistory[i]?.totalBill ? formatPrice(dataListHistory[i].totalBill) : '',
            checkIn: dataListHistory[i]?.checkIn ? dataListHistory[i].checkIn : '',
            checkOut: dataListHistory[i]?.checkIn ? dataListHistory[i].checkIn : '',
            guests: dataListHistory[i]?.numAdult ? dataListHistory[i].numAdult : '0',
            nameAccom: dataListHistory[i].nameAccom ? dataListHistory[i].nameAccom : '',
            status: dataListHistory[i].status ? dataListHistory[i].status : ''
        });
    }

    return (
        <div className="listdata_history">
            <DataTable rows={rows} />
        </div>
    );
};

const columns = [
    { field: 'id', headerName: 'STT', width: 50 },
    { field: 'bookingCode', headerName: 'Mã giao dịch', width: 400, hide: true },
    { field: 'nameCustomer', headerName: 'Tên khách hàng', width: 200 },
    { field: 'totalBill', headerName: 'Tổng thanh toán', width: 160 },
    {
        field: 'checkIn',
        headerName: 'Ngày đặt phòng',
        width: 160
    },
    {
        field: 'checkOut',
        headerName: 'Ngày trả phòng',
        width: 160
    },
    {
        field: 'guests',
        headerName: 'Khách',
        width: 80
    },
    { field: 'nameAccom', headerName: 'Tên nhà thuê', width: 300 },
    { field: 'status', headerName: 'Tình trạng', width: 120 }
];

function DataTable(props) {
    return (
        <div style={{ height: 500, width: '100%', marginBottom: '50px' }}>
            <DataGrid
                rows={props.rows}
                columns={columns}
                pageSize={6}
                rowsPerPageOptions={[6]}
                sx={{ fontSize: '17px', overflowX: 'hidden' }}
            />
        </div>
    );
}

export default TableHistoryOwner;
