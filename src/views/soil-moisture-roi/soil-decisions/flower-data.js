import image1 from './flowering-wheat-high-moisture.jpg';
import image2 from './flowering-wheat-moderate-moisture.jpg';
import image3 from './flowering-wheat-low-moisture.jpg';

const floweringData = [
    {
        label: 'High Soil Moisture',
        description:
            'High confidence. Consider marketing/forward selling options if favourable price. Head counts to determine potential yield.',
        link: 'https://extensionaus.com.au/soilmoisturemonitoring/crop-yield-calculator/',
        linkLabel: 'Agriculture Victoria Yield Calculator',
        image: image1,
        alt: 'Flowering wheat with high soil moisture',
        imageDescription:
            'Individual soil moisture sensor traces had capacitance values that reached their maximum value of 100 per cent in early August and again were reset to full in early September. The wheat crop has been consuming moderate amounts of shallow moisture in the past month supported by frequent rainfall events.'
    },
    {
        label: 'Moderate Soil Moisture',
        description:
            'Head counts to determine potential yield. Moderate soil moisture at flowering can still produce avg to above avg yields with cool finish and supporting rain.',
        link: 'https://extensionaus.com.au/soilmoisturemonitoring/crop-yield-calculator/',
        linkLabel: 'Agriculture Victoria Yield Calculator',
        image: image2,
        alt: 'Flowering canola with moderate soil moisture',
        imageDescription:
            'The crop being monitored is canola and moisture requirements with stem elongation and flowering increased during September.  All the moisture reserves built up over the winter were consumed during September and the crop was using residual moisture from the paddock history of vetch hay last year.  During October, rain has provided the water for the crop and up to the reporting date, 14 days of delayed deep moisture usage was observed. There is enough residual water for this crop to fill seed.'
    },
    {
        label: 'Low Soil Moisture',
        description:
            'Lower confidence. Head counts to determine potential yield.  Consider final result of crop based on yield potential and short term weather forecast',
        link: 'https://extensionaus.com.au/soilmoisturemonitoring/crop-yield-calculator/',
        linkLabel: 'Agriculture Victoria Yield Calculator',
        image: image3,
        alt: 'Flowering wheat with low Soil Moisture',
        imageDescription:
            'This Site has used large amounts of sub-soil moisture in the past month and the 40 - 60 centimetre zone is close to wilting point.  The wheat is now using the deep soil water from the 70 - 90 centimetre area circled in red in the picture below.'
    }
];
export default floweringData;
