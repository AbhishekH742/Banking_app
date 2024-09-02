import Image from 'next/image'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
      {children}
      <div className="auth-asset">
        <div>
          <Image
            src="/icons/sign-in page.jpg"
            alt="Auth image"
            width={700}
            height={500}
            className='border-4 border-black-2 rounded'
          />
        </div>
      </div>
    </main>
    
  );
}
