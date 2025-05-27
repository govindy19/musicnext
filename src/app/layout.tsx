
import Navbar from '@/components/Navbar';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body className="bg-gray-900 text-white">
          <div className='relative w-full flex items-center justify-center'>
            <Navbar /></div>
        
        {children}
        </body>
      </html> 
      
    
  );
}
