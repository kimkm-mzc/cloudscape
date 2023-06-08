import React from 'react';
import BreadcrumbGroup, { BreadcrumbGroupProps } from '@cloudscape-design/components/breadcrumb-group';

const items: BreadcrumbGroupProps.Item[] = [
    { text: 'White Base Porject', href: '/home/index.html' },
    { text: 'Dashboard', href: '/home/index.html' },
    // { text: 'Flavors', href: '/flavors/index.html' },
];

export interface BreadcrumbsProps {
    active: BreadcrumbGroupProps.Item;
}

export default function Breadcrumbs() {
    return <BreadcrumbGroup items={items} />;
}
