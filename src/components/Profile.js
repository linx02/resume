import React, { useEffect } from 'react';

export default function Profile() {

    const [profile, setProfile] = React.useState('normal');
    useEffect(() => {
        const contactBtn = document.querySelector('.summary--contact');
        const contactBtnNav = document.querySelector('.contact-nav');

        const handleMouseEnter = () => setProfile('smile');
        const handleMouseLeave = () => setProfile('normal');

        if (contactBtn) {
            contactBtn.addEventListener('mouseenter', handleMouseEnter);
            contactBtn.addEventListener('mouseleave', handleMouseLeave);
            contactBtnNav.addEventListener('mouseenter', handleMouseEnter);
            contactBtnNav.addEventListener('mouseleave', handleMouseLeave);
        }

        // Cleanup function: remove event listeners when component is unmounted
        return () => {
            if (contactBtn) {
                contactBtn.removeEventListener('mouseenter', handleMouseEnter);
                contactBtn.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, []);

    return (
        <div className={`profile ${profile}`}></div>
    )
}