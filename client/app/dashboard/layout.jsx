

import '@/app/resources/css/global.css';
import { AuthProvider } from '../context/AuthContext';
import BaseLayout from '../layouts/BaseLayout';


export default function RootLayout({ children }) {
  return (

        <AuthProvider>

          <BaseLayout>

            {children}

          </BaseLayout>

        </AuthProvider>


  );
}
