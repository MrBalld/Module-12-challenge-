import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './app';
import ContactPage from './pages/contactPage';
import PortfolioPage from './pages/portfolioPage';
import AboutPage from './pages/aboutMePage';
import ResumePage from './pages/resumePage'

const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          index: true,
          element: <AboutPage />,
        },
        {
          path: '/contact',
          element: <ContactPage />,
        },
        {
          path: '/portfolio',
          element: <PortfolioPage />,
        },
        {
            path: '/resume',
            element: <ResumePage />,
        },
      ],
    },
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);
