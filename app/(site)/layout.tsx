import { Navigation } from "@/components/navigation";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="mt-16 sm:mt-24 flex-1 ">{children}</main>
    </div>
  );
}
