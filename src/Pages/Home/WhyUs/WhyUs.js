import React from 'react';
import { FaBan, FaCheck, FaDollarSign, FaHandRock, FaHandshake, FaHandsHelping } from 'react-icons/fa';
import WhyItem from './WhyItem';

const WhyUs = () => {
    const items = [
        {
            id: 1,
            title: 'No Junk',
            text: 'Laptop Mart does not allow broken items. Every product has listing requirements and an approval process.',
            icon: <FaBan></FaBan>
        },
        {
            id: 2,
            title: 'Verified Listings',
            text: 'Every listing on Laptop Mart is verified by our expert staff to ensure our strict listings requirements are followed. Buy with confidence.',
            icon: <FaCheck></FaCheck>
        },
        {
            id: 3,
            title: 'Ban Fraud',
            text: 'Our moderation staff uses the latest, greatest AI and machine-learning tools to fight fraud before it affects our users.',
            icon: <FaHandRock></FaHandRock>
        },
        {
            id: 4,
            title: 'Fair Fees',
            text: 'Laptop Mart has fair fees, just 3% per party. That means buyers save more and sellers keep more compared to other marketplaces.',
            icon: <FaDollarSign></FaDollarSign>
        },
        {
            id: 5,
            title: 'Great Support',
            text: 'Our support is provided by real humans who actually care. Laptop Marts typical response time for help requests is around 20 minutes!',
            icon: <FaHandsHelping></FaHandsHelping>
        }
        ,
        {
            id: 6,
            title: 'People Powered',
            text: 'On Laptop Mart, you buy and sell directly with other users. No middleman means you get the best price and most value.',
            icon: <FaHandshake></FaHandshake>
        }
        
    ]
    return (
        <div className='my-28'>
            <h1 className='text-3xl font-bold text-center'>Why Laptop Mart?</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
            {
                items.map(item => <WhyItem key={item.id} item={item}></WhyItem>)
            }
            </div>
        </div>
    );
};

export default WhyUs;