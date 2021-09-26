// assets
import { IconDashboard, IconDeviceAnalytics } from '@tabler/icons';

// constant
const icons = {
    IconDashboard,
    IconDeviceAnalytics
};

// ===========================|| Chart MENU ITEMS ||=========================== //

const chart = {
    id: 'chart',
    title: 'Plotly Chart',
    type: 'group',
    children: [
        {
            id: 'plotlychart',
            title: 'Plotly Chart',
            type: 'item',
            url: '/chart-plotly',
            icon: icons.IconDeviceAnalytics,
            breadcrumbs: false
        }
    ]
};

export default chart;
