import * as React from "react";
import Table from "@cloudscape-design/components/table";
import Box from "@cloudscape-design/components/box";
import Button from "@cloudscape-design/components/button";
import TextFilter from "@cloudscape-design/components/text-filter";
import Header from "@cloudscape-design/components/header";
import Pagination from "@cloudscape-design/components/pagination";
import CollectionPreferences from "@cloudscape-design/components/collection-preferences";
import {AppLayout, ColumnLayout, Container, ContentLayout, Grid, HelpPanel, Link, SpaceBetween, TopNavigation } from "@cloudscape-design/components";

import Navigation from '../../components/navigation'
import Breadcrumbs from '../../components/breadcrumbs';

// import PreparedDashboardContent from './components/production-overview';
import PreparedDashboardContent from './components/production-overview'
import QuilityReport from './components/quality-report/index'
import Flavors from './components/flavors'
import QualityReport from "./components/quality-report/index";
import ProductionOverview from "./components/production-overview";
import {breakdownItems, notes, productionMetrics, quote, variationData } from "./data";
import Shell from "../../layouts/shell";

export default function Home() {
    return (
            <Shell
                breadcrumbs={<Breadcrumbs />}
                navigation={<Navigation />}
                tools={<HelpPanel header={<h2>Help panel</h2>} />}
            >
                <ContentLayout
                    header={
                        <Header variant="h1" info={<Link variant="info">Info</Link>}>
                            Dashboard
                        </Header>
                    }
                >
                    <Grid gridDefinition={[{ colspan: 12 }, { colspan: 8 }, { colspan: 4 }]} disableGutters={false}>
                        <ProductionOverview metrics={productionMetrics} />
                        <Flavors data={variationData} items={breakdownItems} />
                        <QualityReport quote={quote} notes={notes} />
                    </Grid>
                </ContentLayout>
            </Shell>

    );
};