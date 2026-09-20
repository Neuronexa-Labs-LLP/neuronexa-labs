export const metadata = {
  title: 'Privacy Policy | Neuronexa Labs',
  description: 'Privacy Policy for Neuronexa Labs.',
};

export default function Privacy() {
  return (
    <main className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200 prose prose-slate max-w-none">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-8">
            Privacy Policy
          </h1>
          
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2>1. Information We Collect</h2>
          <p>
            We collect information that you provide directly to us, such as when you create or modify your account, 
            request services, contact customer support, or otherwise communicate with us. This information may include: 
            name, email, phone number, and other information you choose to provide.
          </p>
          
          <h2>2. How We Use Your Information</h2>
          <p>
            We use the information we collect to provide, maintain, and improve our services, such as to provide and 
            deliver the products and services you request, process transactions, and send you related information, 
            including confirmations and invoices.
          </p>
          
          <h2>3. Information Sharing</h2>
          <p>
            We do not share your personal information with third parties except as described in this privacy policy, 
            such as with vendors, consultants, and other service providers who need access to such information to carry 
            out work on our behalf.
          </p>
          
          <h2>4. Security</h2>
          <p>
            We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized 
            access, disclosure, alteration and destruction.
          </p>
          
          <h2>5. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at info@neuronexalabs.com.
          </p>
        </div>
      </div>
    </main>
  );
}
