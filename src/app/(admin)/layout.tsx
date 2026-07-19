import AppSidebar from '@/components/layout/app-sidebar';
import AdminHeader from '@/components/layout/AdminHeader';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { getSession } from '@/lib/auth';
import { redirect } from 'next/navigation';
import SessionProvider from '@/components/providers/SessionProvider';

export default async function AdminLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  if (!session) {
    redirect('/login');
  }

  return (
    <SessionProvider user={session}>
      <div className="dark flex min-h-screen w-full flex-col bg-background text-foreground">
        <SidebarProvider defaultOpen={true}>
          <AppSidebar />
          <SidebarInset className="bg-background">
            <AdminHeader />
            {children}
          </SidebarInset>
        </SidebarProvider>
      </div>
    </SessionProvider>
  );
}
