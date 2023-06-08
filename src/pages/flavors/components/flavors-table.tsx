import React, { useState } from 'react';
import Header from '@cloudscape-design/components/header';
import Table, { TableProps } from '@cloudscape-design/components/table';
import { useCollection } from '@cloudscape-design/collection-hooks';
import { Flavor } from '../data';
import { CollectionPreferencesProps } from '@cloudscape-design/components';
import Pagination from '@cloudscape-design/components/pagination';

const columnDefinitions: TableProps<Flavor>['columnDefinitions'] = [
    {
        header: 'Name',
        cell: ({ name }) => name,
        minWidth: 175,
    },
    {
        header: 'Sold (last month)',
        cell: ({ sold }) => sold,
        minWidth: 160,
    },
    {
        header: 'Produced (last month)',
        cell: ({ produced }) => produced,
        minWidth: 160,
    },
    {
        header: 'Estimated (next month)',
        cell: ({ estimated }) => estimated,
        minWidth: 150,
    },
    {
        header: 'Retail price (USD)',
        cell: ({ retailPrice }) => retailPrice,
        minWidth: 160,
    },
    {
        header: 'Total revenue (USD)',
        cell: ({ totalRevenue }) => totalRevenue,
        minWidth: 180,
    },
    {
        header: 'Total cost (USD)',
        cell: ({ totalCost }) => totalCost,
        minWidth: 180,
    },
];

export interface VariationTableProps {
    flavors: Flavor[];
}

export default function VariationTable({ flavors }: VariationTableProps) {
    const [preferences, setPreferences] = useState<CollectionPreferencesProps['preferences']>({ pageSize: 20 });
    const { items, filterProps, filteredItemsCount, paginationProps, collectionProps } = useCollection<Flavor>(flavors, {
        filtering: {},
        pagination: { pageSize: preferences?.pageSize },
        sorting: { defaultState: { sortingColumn: columnDefinitions[0] } },
        selection: {},
    });

    return (
        <Table<Flavor>
            items={items}
            columnDefinitions={columnDefinitions}
            stickyHeader={true}
            variant="full-page"
            ariaLabels={{
                selectionGroupLabel: 'Items selection',
                itemSelectionLabel: ({ selectedItems }, item) => {
                    const isItemSelected = selectedItems.filter(i => i.name === item.name).length;
                    return `${item.name} is ${isItemSelected ? '' : 'not '}selected`;
                },
                tableLabel: 'Flavors table',
            }}
            resizableColumns={true}
            header={
                <Header variant="awsui-h1-sticky" counter={`(${flavors.length})`}>
                    Flavors
                </Header>
            }
            pagination={<Pagination {...paginationProps} />}
        />
    );
}
