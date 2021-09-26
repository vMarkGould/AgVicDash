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
    title: 'Return On Investment',
    type: 'group',
    children: [
        {
            id: 'plotlychart',
            title: 'Soil Moisture',
            type: 'item',
            url: '/chart-plotly',
            icon: icons.IconDeviceAnalytics,
            breadcrumbs: false
        }
    ]
};

export default chart;
