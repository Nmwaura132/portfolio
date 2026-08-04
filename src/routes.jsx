import { Layout } from './components/Layout.jsx';
import { About } from './pages/About.jsx';
import { Home } from './pages/Home.jsx';
import { Work } from './pages/Work.jsx';
import { DocumentIntelligence } from './pages/work/DocumentIntelligence.jsx';
import { Mara } from './pages/work/Mara.jsx';
import { OptivenCrm } from './pages/work/OptivenCrm.jsx';

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'work', element: <Work /> },
      { path: 'about', element: <About /> },
      { path: 'work/mara', element: <Mara /> },
      { path: 'work/document-intelligence', element: <DocumentIntelligence /> },
      { path: 'work/optiven-crm', element: <OptivenCrm /> },
    ],
  },
];
