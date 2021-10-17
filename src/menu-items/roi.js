// assets
import { IconDashboard, IconDeviceAnalytics } from '@tabler/icons';

// constant
const icons = {
    IconDashboard,
    IconDeviceAnalytics
};

// ===========================|| Chart MENU ITEMS ||=========================== //

const roi = {
    id: 'roi',
    title: 'Return On Investment',
    type: 'group',
    children: [
        {
            id: 'soilMoistureRoi',
            title: 'Soil Moisture',
            type: 'item',
            url: '/soil-moisture-roi',
            icon: icons.IconDeviceAnalytics,
            breadcrumbs: false
        }
    ]
};

export default roi;
