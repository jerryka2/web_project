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
        image: ev1, // Replace with the actual image file
        charging_type: 'Fast Charging',
        brand: 'Tesla',
        power_capacity: '150 kW',
        availability: '24/7',
        about: 'GreenCharge EV Station provides high-speed charging solutions with state-of-the-art technology. Our station ensures a seamless experience with multiple charging ports, real-time availability tracking, and affordable pricing.',
        pricing_per_kWh: 0.25, // Cost per kWh in $
        address: {
            line1: '123 Green Energy Road',
            line2: 'Downtown, New York City, NY'
        }
    },

    {
        _id: 'ev2',
        name: 'VoltCharge EV Hub',
        image: ev2, // Replace with actual image file
        charging_type: 'Ultra-Fast Charging',
        brand: 'Tesla',
        power_capacity: '250 kW',
        availability: '24/7',
        about: 'VoltCharge EV Hub offers one of the fastest EV charging solutions, ensuring minimal wait time and maximum efficiency. With advanced technology and seamless digital payment options, we provide a hassle-free charging experience.',
        pricing_per_kWh: 0.30, // Cost per kWh in $
        address: {
            line1: '27th Cross, Volt Drive',
            line2: 'Energy District, London'
        }
    },

    {
        _id: 'ev3',
        name: 'Himalayan Charge Station',
        image: ev3, // Replace with actual image file
        charging_type: 'Standard & Fast Charging',
        brand: 'BYD',
        power_capacity: '120 kW',
        availability: '6 AM - 10 PM',
        about: 'Himalayan Charge Station provides a reliable EV charging network in Nepal, offering both standard and fast charging options. With a commitment to sustainability and efficiency, we ensure a seamless experience for all EV users.',
        pricing_per_kWh: 0.20, // Cost per kWh in $
        address: {
            line1: '37th Cross, Thamel',
            line2: 'Kathmandu, Nepal'
        }
    },

    {
        _id: 'ev4',
        name: 'Bhaktapur FastCharge Hub',
        image: ev4, // Replace with actual image file
        charging_type: 'Fast & Standard Charging',
        brand: 'Tesla',
        power_capacity: '180 kW',
        availability: '5 AM - 11 PM',
        about: 'Bhaktapur FastCharge Hub provides an efficient and reliable EV charging service for commuters and travelers. Located near historical landmarks, we offer both fast and standard charging options to suit every need.',
        pricing_per_kWh: 0.28, // Cost per kWh in $
        address: {
            line1: 'Kamalbinayak Road, Bhaktapur',
            line2: 'Bagmati Province, Nepal'
        }
    },

    {
        _id: 'ev5',
        name: 'Lalitpur EV QuickCharge',
        image: ev5, // Replace with actual image file
        charging_type: 'Ultra-Fast & Standard Charging',
        brand: 'MG',
        power_capacity: '220 kW',
        availability: '24/7',
        about: 'Lalitpur EV QuickCharge is one of Nepal’s most advanced charging hubs, providing ultra-fast and standard charging options. Our cutting-edge facility ensures reduced wait times and a seamless EV charging experience.',
        pricing_per_kWh: 0.32, // Cost per kWh in $
        address: {
            line1: 'Pulchowk Road, Lalitpur',
            line2: 'Bagmati Province, Nepal'
        }
    },

    {
        _id: 'ev6',
        name: 'Dharan SmartCharge Station',
        image: ev6, // Replace with actual image file
        charging_type: 'Fast & Standard Charging',
        brand: 'Tesla',
        power_capacity: '180 kW',
        availability: '6 AM - 11 PM',
        about: 'Dharan SmartCharge Station is a modern EV charging hub offering efficient charging solutions for travelers and residents. Equipped with smart payment options and real-time status updates, it ensures a smooth charging experience.',
        pricing_per_kWh: 0.28, // Cost per kWh in $
        address: {
            line1: 'Bishal Chowk, Dharan',
            line2: 'Province 1, Nepal'
        }
    },

    {
        _id: 'ev7',
        name: 'Janakpur RapidCharge Station',
        image: ev7, // Replace with actual image file
        charging_type: 'Ultra-Fast & Standard Charging',
        brand: 'MG',
        power_capacity: '200 kW',
        availability: '24/7',
        about: 'Janakpur RapidCharge Station offers high-speed EV charging with cutting-edge technology. Strategically located for long-distance travelers, our station provides seamless payment options and a comfortable waiting area.',
        pricing_per_kWh: 0.30, // Cost per kWh in $
        address: {
            line1: 'Mills Area, Janakpur',
            line2: 'Madhesh Province, Nepal'
        }
    },

    {
        _id: 'ev8',
        name: 'Biratnagar EV Power Hub',
        image: ev8, // Replace with actual image file
        charging_type: 'Superfast & Standard Charging',
        brand: 'MG',
        power_capacity: '220 kW',
        availability: '5 AM - 11 PM',
        about: 'Biratnagar EV Power Hub is a state-of-the-art EV charging station offering both superfast and standard charging options. Designed for efficiency and convenience, our station ensures smooth, quick, and reliable charging services.',
        pricing_per_kWh: 0.34, // Cost per kWh in $
        address: {
            line1: 'Main Road, Biratnagar',
            line2: 'Province 1, Nepal'
        }
    },

    {
        _id: 'ev9',
        name: 'Itahari EV Smart Station',
        image: ev9, // Replace with actual image file
        charging_type: 'Fast & Standard Charging',
        brand: 'BYD',
        power_capacity: '150 kW',
        availability: '6 AM - 10 PM',
        about: 'Itahari EV Smart Station is a reliable charging hub for EV owners, providing high-speed charging with real-time status updates. Conveniently located, we ensure a smooth and efficient charging experience for all electric vehicle users.',
        pricing_per_kWh: 0.26, // Cost per kWh in $
        address: {
            line1: 'Mahendra Chowk, Itahari',
            line2: 'Province 1, Nepal'
        }
    },

    {
        _id: 'ev10',
        name: 'Damak EV Charging Hub',
        image: ev10, // Replace with actual image file
        charging_type: 'Ultra-Fast & Standard Charging',
        brand: 'BYD',
        power_capacity: '180 kW',
        availability: '5 AM - 11 PM',
        about: 'Damak EV Charging Hub is a modern charging station designed to serve daily commuters and long-distance travelers. Offering ultra-fast and standard charging, we ensure quick and efficient charging with advanced technology and user-friendly payment options.',
        pricing_per_kWh: 0.29, // Cost per kWh in $
        address: {
            line1: 'Birtamode Road, Damak',
            line2: 'Province 1, Nepal'
        }
    },

    {
        _id: 'ev11',
        name: 'Nepalgunj EV Power Station',
        image: ev11, // Replace with actual image file
        charging_type: 'Superfast & Standard Charging',
        brand: 'Porsche',
        power_capacity: '200 kW',
        availability: '6 AM - 10 PM',
        about: 'Nepalgunj EV Power Station is a cutting-edge charging hub designed to meet the needs of electric vehicle owners. With fast and standard charging options, we ensure a seamless and efficient charging experience for all users.',
        pricing_per_kWh: 0.31, // Cost per kWh in $
        address: {
            line1: 'Gharbaritol Road, Nepalgunj',
            line2: 'Lumbini Province, Nepal'
        }
    },
    {
        _id: 'ev12',
        name: 'Hetauda EV Charging Hub',
        image: ev12, // Replace with actual image file
        charging_type: 'Ultra-Fast & Standard Charging',
        brand: 'Porsche',
        power_capacity: '220 kW',
        availability: '24/7',
        about: 'Hetauda EV Charging Hub provides top-notch EV charging solutions with ultra-fast and standard charging options. Strategically located on a major route, it ensures easy access and a seamless experience for all electric vehicle users.',
        pricing_per_kWh: 0.33, // Cost per kWh in $
        address: {
            line1: 'Hetauda Industrial Area, Hetauda',
            line2: 'Bagmati Province, Nepal'
        }
    },

    {
        _id: 'ev13',
        name: 'Dhangadhi EV Smart Hub',
        image: ev13, // Replace with actual image file
        charging_type: 'Fast & Standard Charging',
        brand: 'Audi',
        power_capacity: '150 kW',
        availability: '6 AM - 10 PM',
        about: 'Dhangadhi EV Smart Hub is a leading EV charging station in Sudurpashchim, offering fast and standard charging options with digital payment facilities. Conveniently located, we ensure a smooth and hassle-free charging experience.',
        pricing_per_kWh: 0.27, // Cost per kWh in $
        address: {
            line1: 'Attariya Chowk, Dhangadhi',
            line2: 'Sudurpashchim Province, Nepal'
        }
    },
    {
        _id: 'ev14',
        name: 'Birgunj EV Charging Plaza',
        image: ev14, // Replace with actual image file
        charging_type: 'Ultra-Fast & Standard Charging',
        brand: 'Kia',
        power_capacity: '200 kW',
        availability: '24/7',
        about: 'Birgunj EV Charging Plaza is strategically positioned near the India-Nepal border, ensuring reliable charging services for cross-border and local travelers. Equipped with the latest technology, it offers ultra-fast and standard charging solutions.',
        pricing_per_kWh: 0.30, // Cost per kWh in $
        address: {
            line1: 'Powerhouse Road, Birgunj',
            line2: 'Madhesh Province, Nepal'
        }
    },
    {
        _id: 'ev15',
        name: 'Tulsipur GreenCharge Station',
        image: ev15, // Replace with actual image file
        charging_type: 'Fast & Standard Charging',
        brand: 'Kia',
        power_capacity: '140 kW',
        availability: '5 AM - 11 PM',
        about: 'Tulsipur GreenCharge Station is a well-equipped charging facility, serving travelers and commuters with its fast and standard charging points. With convenient access and eco-friendly solutions, we make EV charging effortless.',
        pricing_per_kWh: 0.25, // Cost per kWh in $
        address: {
            line1: 'Bus Park Road, Tulsipur',
            line2: 'Lumbini Province, Nepal'
        }
    }

]