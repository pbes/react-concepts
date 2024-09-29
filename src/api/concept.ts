import React from "react";
import { CompoundComponents } from "../concepts/compound-components/page/CompoundComponents";
import { ModernDataFetching } from "../concepts/modern-data-fetching/ModernDataFetching";
import App from "../App";

export type Concept = {
    name: string;
    route: string;
    component: React.FC;
}

export const components: Concept[] = [
    {
      name: 'Compound components',
      route: 'compound-components',
      component: CompoundComponents
    },
    {
      name: 'Modern data fetching',
      route: 'modern-data-fetching',
      component: ModernDataFetching
    },
    {
      name: 'Home',
      route: '',
      component: App
    }
  ]