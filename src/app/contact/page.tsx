import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/sections/contact/ContactForm";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-sans">
      <Header />
      <main className="flex-1">
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
