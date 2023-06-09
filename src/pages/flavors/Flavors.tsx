// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React from 'react';
import HelpPanel from '@cloudscape-design/components/help-panel';

import Breadcrumbs from '../../components/breadcrumbs';
import Navigation from '../../components/navigation';
import ShellLayout from '../../layouts/shell';
import VariationsTable from './components/flavors-table';

import { variationsData } from './data';

const Flavors: React.FC = () => {
  return (
    <ShellLayout
      contentType="table"
      navigation={<Navigation />}
      breadcrumbs={<Breadcrumbs />}
      tools={<HelpPanel header={<h2>Help panel</h2>}></HelpPanel>}
    >
      <VariationsTable flavors={variationsData} />
    </ShellLayout>
  );
}
export default Flavors;