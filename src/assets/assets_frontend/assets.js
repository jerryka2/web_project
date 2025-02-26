import about_image from './about_image.png'
import appointment_img from './appointment_img.png'
import arrow_icon from './arrow_icon.svg'
import chats_icon from './chats_icon.svg'
import contact_image from './contact_image.png'
import cross_icon from './cross_icon.png'
import dropdown_icon from './dropdown_icon.svg'
import ev1 from './ev1.jpg'
import ev10 from './ev10.jpg'
import ev11 from './ev11.jpg'
import ev12 from './ev12.png'
import ev13 from './ev13.jpg'
import ev14 from './ev14.jpg'
import ev15 from './ev15.jpg'
import ev2 from './ev2.png'
import ev3 from './ev3.jpg'
import ev4 from './ev4.jpg'
import ev5 from './ev5.jpg'
import ev6 from './ev6.jpg'
import ev7 from './ev7.jpg'
import ev8 from './ev8.jpg'
import ev9 from './ev9.jpg'
import group_profiles from './group_profiles.png'
import header_img from './header_img.png'
import info_icon from './info_icon.svg'
import logo from './logo.svg'
import logo_audi from './logo_audi.png'
import logo_byd from './logo_byd.png'
import logo_kia from './logo_kia.png'
import logo_mg from './logo_mg.png'
import logo_porsche from './logo_porsche.jpg'
import logo_tesla from './logo_tesla.png'
import menu_icon from './menu_icon.svg'
import profile_pic from './profile_pic.png'
import razorpay_logo from './razorpay_logo.png'
import stripe_logo from './stripe_logo.png'
import upload_icon from './upload_icon.png'
import verified_icon from './verified_icon.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        brand: 'Tesla',
        image: logo_tesla
    },
    {
        brand: 'MG',
        image: logo_mg
    },
    {
        brand: 'BYD',
        image: logo_byd
    },
    {
        brand: 'Audi',
        image: logo_audi
    },
    {
        brand: 'Porsche', // ✅ Fixed Typo
        image: logo_porsche
    },
    {
        brand: 'Kia',
        image: logo_kia
    },
];


export const evStations = [
    {
        _id: 'ev1',
        name: 'GreenCharge EV Station',
        email: 'greencharge@evstations.com',
        password: 'GreenCharge@123',
        image: ev1,
        charging_type: 'Fast Charging',
        brand: 'Tesla',
        power_capacity: '150 kW',
        availability: '24/7',
        about: 'High-speed charging solutions with multiple charging ports, real-time tracking, and affordable pricing.',
        pricing_per_kWh: 33,
        address: {
            line1: '123 Green Energy Road',
            line2: 'Downtown, New York City, NY'
        }
    },

    {
        _id: 'ev2',
        name: 'VoltCharge EV Hub',
        email: 'voltcharge@evstations.com',
        password: 'VoltCharge@123',
        image: ev2,
        charging_type: 'Ultra-Fast Charging',
        brand: 'Tesla',
        power_capacity: '250 kW',
        availability: '24/7',
        about: 'One of the fastest EV charging solutions, ensuring minimal wait time and maximum efficiency.',
        pricing_per_kWh: 40,
        address: {
            line1: '27th Cross, Volt Drive',
            line2: 'Energy District, London'
        }
    },

    {
        _id: 'ev3',
        name: 'Himalayan Charge Station',
        email: 'himalayancharge@evstations.com',
        password: 'HimalayanCharge@123',
        image: ev3,
        charging_type: 'Standard & Fast Charging',
        brand: 'BYD',
        power_capacity: '120 kW',
        availability: '6 AM - 10 PM',
        about: 'Reliable EV charging in Nepal with standard and fast charging options.',
        pricing_per_kWh: 26,
        address: {
            line1: '37th Cross, Thamel',
            line2: 'Kathmandu, Nepal'
        }
    },

    {
        _id: 'ev4',
        name: 'Bhaktapur FastCharge Hub',
        email: 'bhaktapurcharge@evstations.com',
        password: 'BhaktapurCharge@123',
        image: ev4,
        charging_type: 'Fast & Standard Charging',
        brand: 'Tesla',
        power_capacity: '180 kW',
        availability: '5 AM - 11 PM',
        about: 'Reliable EV charging service for commuters and travelers near historical landmarks.',
        pricing_per_kWh: 37,
        address: {
            line1: 'Kamalbinayak Road, Bhaktapur',
            line2: 'Bagmati Province, Nepal'
        }
    },

    {
        _id: 'ev5',
        name: 'Lalitpur EV QuickCharge',
        email: 'lalitpurev@evstations.com',
        password: 'LalitpurEV@123',
        image: ev5,
        charging_type: 'Ultra-Fast & Standard Charging',
        brand: 'MG',
        power_capacity: '220 kW',
        availability: '24/7',
        about: 'One of Nepal’s most advanced charging hubs with ultra-fast charging.',
        pricing_per_kWh: 42,
        address: {
            line1: 'Pulchowk Road, Lalitpur',
            line2: 'Bagmati Province, Nepal'
        }
    },

    {
        _id: 'ev6',
        name: 'Dharan SmartCharge Station',
        email: 'dharanev@evstations.com',
        password: 'DharanEV@123',
        image: ev6,
        charging_type: 'Fast & Standard Charging',
        brand: 'Tesla',
        power_capacity: '180 kW',
        availability: '6 AM - 11 PM',
        about: 'Smart EV charging hub with efficient payment options and real-time status updates.',
        pricing_per_kWh: 37,
        address: {
            line1: 'Bishal Chowk, Dharan',
            line2: 'Province 1, Nepal'
        }
    },

    {
        _id: 'ev7',
        name: 'Janakpur RapidCharge Station',
        email: 'janakpurev@evstations.com',
        password: 'JanakpurEV@123',
        image: ev7,
        charging_type: 'Ultra-Fast & Standard Charging',
        brand: 'MG',
        power_capacity: '200 kW',
        availability: '24/7',
        about: 'Strategically located high-speed EV charging for long-distance travelers.',
        pricing_per_kWh: 40,
        address: {
            line1: 'Mills Area, Janakpur',
            line2: 'Madhesh Province, Nepal'
        }
    },

    {
        _id: 'ev8',
        name: 'Biratnagar EV Power Hub',
        email: 'biratnagarev@evstations.com',
        password: 'BiratnagarEV@123',
        image: ev8,
        charging_type: 'Superfast & Standard Charging',
        brand: 'MG',
        power_capacity: '220 kW',
        availability: '5 AM - 11 PM',
        about: 'State-of-the-art EV charging station with superfast and standard charging.',
        pricing_per_kWh: 45,
        address: {
            line1: 'Main Road, Biratnagar',
            line2: 'Province 1, Nepal'
        }
    },

    {
        _id: 'ev9',
        name: 'Itahari EV Smart Station',
        email: 'itahariev@evstations.com',
        password: 'ItahariEV@123',
        image: ev9,
        charging_type: 'Fast & Standard Charging',
        brand: 'BYD',
        power_capacity: '150 kW',
        availability: '6 AM - 10 PM',
        about: 'Conveniently located EV charging hub with high-speed charging options.',
        pricing_per_kWh: 34,
        address: {
            line1: 'Mahendra Chowk, Itahari',
            line2: 'Province 1, Nepal'
        }
    },

    {
        _id: 'ev10',
        name: 'Damak EV Charging Hub',
        email: 'damakev@evstations.com',
        password: 'DamakEV@123',
        image: ev10,
        charging_type: 'Ultra-Fast & Standard Charging',
        brand: 'BYD',
        power_capacity: '180 kW',
        availability: '5 AM - 11 PM',
        about: 'Modern EV charging hub for commuters and long-distance travelers.',
        pricing_per_kWh: 38,
        address: {
            line1: 'Birtamode Road, Damak',
            line2: 'Province 1, Nepal'
        }
    },
    {
        _id: 'ev11',
        name: 'Nepalgunj EV Power Station',
        email: 'nepalgunjev@evstations.com',
        password: 'NepalgunjEV@123',
        image: ev11,
        charging_type: 'Superfast & Standard Charging',
        brand: 'Porsche',
        power_capacity: '200 kW',
        availability: '6 AM - 10 PM',
        about: 'Nepalgunj EV Power Station is a cutting-edge charging hub designed to meet the needs of electric vehicle owners. With fast and standard charging options, we ensure a seamless and efficient charging experience for all users.',
        pricing_per_kWh: 41, // Converted to NPR
        address: {
            line1: 'Gharbaritol Road, Nepalgunj',
            line2: 'Lumbini Province, Nepal'
        }
    },

    {
        _id: 'ev12',
        name: 'Hetauda EV Charging Hub',
        email: 'hetaudaev@evstations.com',
        password: 'HetaudaEV@123',
        image: ev12,
        charging_type: 'Ultra-Fast & Standard Charging',
        brand: 'Porsche',
        power_capacity: '220 kW',
        availability: '24/7',
        about: 'Hetauda EV Charging Hub provides top-notch EV charging solutions with ultra-fast and standard charging options. Strategically located on a major route, it ensures easy access and a seamless experience for all electric vehicle users.',
        pricing_per_kWh: 44, // Converted to NPR
        address: {
            line1: 'Hetauda Industrial Area, Hetauda',
            line2: 'Bagmati Province, Nepal'
        }
    },

    {
        _id: 'ev13',
        name: 'Dhangadhi EV Smart Hub',
        email: 'dhangadhi@evstations.com',
        password: 'DhangadhiEV@123',
        image: ev13,
        charging_type: 'Fast & Standard Charging',
        brand: 'Audi',
        power_capacity: '150 kW',
        availability: '6 AM - 10 PM',
        about: 'Dhangadhi EV Smart Hub is a leading EV charging station in Sudurpashchim, offering fast and standard charging options with digital payment facilities. Conveniently located, we ensure a smooth and hassle-free charging experience.',
        pricing_per_kWh: 36, // Converted to NPR
        address: {
            line1: 'Attariya Chowk, Dhangadhi',
            line2: 'Sudurpashchim Province, Nepal'
        }
    },

    {
        _id: 'ev14',
        name: 'Birgunj EV Charging Plaza',
        email: 'birgunjev@evstations.com',
        password: 'BirgunjEV@123',
        image: ev14,
        charging_type: 'Ultra-Fast & Standard Charging',
        brand: 'Kia',
        power_capacity: '200 kW',
        availability: '24/7',
        about: 'Birgunj EV Charging Plaza is strategically positioned near the India-Nepal border, ensuring reliable charging services for cross-border and local travelers. Equipped with the latest technology, it offers ultra-fast and standard charging solutions.',
        pricing_per_kWh: 40, // Converted to NPR
        address: {
            line1: 'Powerhouse Road, Birgunj',
            line2: 'Madhesh Province, Nepal'
        }
    },

    {
        _id: 'ev15',
        name: 'Tulsipur GreenCharge Station',
        email: 'tulsipur@evstations.com',
        password: 'TulsipurEV@123',
        image: ev15,
        charging_type: 'Fast & Standard Charging',
        brand: 'Kia',
        power_capacity: '140 kW',
        availability: '5 AM - 11 PM',
        about: 'Tulsipur GreenCharge Station is a well-equipped charging facility, serving travelers and commuters with its fast and standard charging points. With convenient access and eco-friendly solutions, we make EV charging effortless.',
        pricing_per_kWh: 33, // Converted to NPR
        address: {
            line1: 'Bus Park Road, Tulsipur',
            line2: 'Lumbini Province, Nepal'
        }
    }

];
