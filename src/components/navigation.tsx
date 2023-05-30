import React from 'react';
import SideNavigation, { SideNavigationProps } from '@cloudscape-design/components/side-navigation';

const items: SideNavigationProps['items'] = [
    // More pages got added as part of the workshop.
    { type: 'link', text: 'Table', href: '/index.html' },
];

export default function Navigation() {
    return (
        <>
            <SideNavigation
                activeHref={location.pathname}
                header={{ href: 'index.html', text: 'Service' }}
                items={items}
            />
        </>
    );
}
