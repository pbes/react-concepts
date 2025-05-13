import React from "react";
import { CompoundComponents } from "../concepts/compound-components/page/CompoundComponents";
import { ModernDataFetching } from "../concepts/modern-data-fetching/ModernDataFetching";
import App from "../App";
import { PathParam } from "../concepts/path-param/page/PathParamPage";
import { UserList } from "../concepts/combine-query-with-zustand/page/UserList";
import WhyUseUseCallback from "../concepts/why-use-use-callback/WhyUseUseCallback";
import ChildrenFirstApproach from "../concepts/children-first/ChildrenFirstApproach";
import ZustandWithContext from "../concepts/zustand-with-context/ZustandWithContext";
import FeatureFlags from "../concepts/feature-flags/FeatureFlags";
import ContextRerender from "../concepts/context-rerender/ContextRerender";

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
  }, {
    name: 'Path parameter',
    route: '/path-param/:id',
    component: PathParam,
  }, {
    name: 'Combine React Query with Zustand',
    route: '/combine-query-with-zustand',
    component: UserList
  }, {
    name: 'Why use useCallback in custom hooks',
    route: '/why-use-callback-in-custom-hooks',
    component: WhyUseUseCallback
  }, {
    name: 'Children first approach',
    route: '/children-first',
    component: ChildrenFirstApproach
  }, {
    name: 'Zustand with Context API',
    route: '/zustand-with-context',
    component: ZustandWithContext
  }, {
    name: 'Feature flags',
    route: '/feature-flags',
    component: FeatureFlags
  }, {
    name: 'Context API: where to use it',
    route: '/context-api-where-to-use-it',
    component: ContextRerender
  }
]