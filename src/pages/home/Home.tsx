import * as React from "react";
import Table from "@cloudscape-design/components/table";
import Box from "@cloudscape-design/components/box";
import Button from "@cloudscape-design/components/button";
import TextFilter from "@cloudscape-design/components/text-filter";
import Header from "@cloudscape-design/components/header";
import Pagination from "@cloudscape-design/components/pagination";
import CollectionPreferences from "@cloudscape-design/components/collection-preferences";
import {AppLayout, ContentLayout, TopNavigation } from "@cloudscape-design/components";

import Navigation from '../../components/navigation'
import Breadcrumbs from '../../components/breadcrumbs';

// import PreparedDashboardContent from './components/production-overview';
import PreparedDashboardContent from './components/prepared-dashboard-content'

interface Item {
    name: string;
    alt: string;
    description: string;
    type: string;
    size: string;
}

const Home: React.FC = () => {
    return (
        <>
            <AppLayout
                headerSelector="#top-nav"
                ariaLabels={{
                    navigation: 'Navigation drawer',
                    navigationClose: 'Close navigation drawer',
                    navigationToggle: 'Open navigation drawer',
                    notifications: 'Notifications',
                    tools: 'Help panel',
                    toolsClose: 'Close help panel',
                    toolsToggle: 'Open help panel',
                }}
                navigation={<Navigation />}
                breadcrumbs={<Breadcrumbs />}
                content={
                    <ContentLayout header={<Header variant="h1">Table</Header>}>
                        <PreparedDashboardContent />
                    </ContentLayout>
                }
            />
        </>

    );
};

export default Home;