import { FC } from 'react';
import LicenseCard from '@/components/LicenseCard';
import { generateSlug } from '@/util/helpers';
import licenseData from '@/util/license-data.json';

// Convert to async component for Next.js compatibility
const LicensesPage = async () => {
  // Group licenses by copyleft strength
  const groupedLicenses = licenseData.licenses.reduce((acc, license) => {
    const strength = license.copyleft_strength || 'None';
    if (!acc[strength]) {
      acc[strength] = [];
    }
    acc[strength].push(license);
    return acc;
  }, {} as Record<string, typeof licenseData.licenses>);

  // Order of strength categories
  const strengthOrder = ['Strongest', 'Strong', 'Weak', 'None'];

  return (
    <main className="container mx-auto px-4 py-12 max-w-6xl">
      <section className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
          Open Source License Explorer
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 text-center">
          Browse our collection of open source licenses to find the perfect match for your project.
          Compare features, compatibility, and legal requirements.
        </p>
        
        <div className="bg-gradient-to-r from-primary-50 to-primary-100 p-6 rounded-lg shadow-sm border border-primary-200 max-w-3xl mx-auto">
          <h2 className="text-xl font-semibold text-primary-800 mb-3">Understanding License Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <div className="bg-primary-200 text-primary-800 rounded-full p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Permissive</h3>
                <p className="text-sm text-gray-600">Few restrictions, allows commercial use and modification</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-primary-200 text-primary-800 rounded-full p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Copyleft</h3>
                <p className="text-sm text-gray-600">Requires derivative works to maintain the same license</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {strengthOrder.map(strength => 
        groupedLicenses[strength] && (
          <section key={strength} className="mb-12">
            <div className="flex items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">{strength === 'None' ? 'Permissive' : `${strength} Copyleft`} Licenses</h2>
              <div className="ml-4 h-px bg-gray-200 flex-grow"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {groupedLicenses[strength].map((license) => (
                <LicenseCard
                  key={license.name}
                  name={license.name}
                  description={license.description}
                  slug={generateSlug(license.name)}
                  osiApproved={license.osi_approved}
                  copyleftStrength={license.copyleft_strength}
                  examples={license.examples?.slice(0, 2)}
                />
              ))}
            </div>
          </section>
        )
      )}
      
      <section className="mt-16 bg-gray-50 p-8 rounded-lg border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Need Help Choosing?</h2>
        <p className="text-gray-600 mb-6">
          Selecting the right license is crucial for your project's success. Consider factors like:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-100 hover:bg-gray-200 hover:cursor-pointer p-4 rounded shadow-sm border border-gray-300 hover:text-blue-500">
            <h3 className="font-semibold text-gray-800 mb-2">Project Goals</h3>
            <p className="text-sm text-gray-600">Consider how you want others to use and contribute to your work. <span className="text-blue-500">Click here</span></p>
          </div>
          <div className="bg-gray-100 hover:bg-gray-200 hover:cursor-pointer p-4 rounded shadow-sm border border-gray-300 hover:text-blue-500">
            <h3 className="font-semibold text-gray-800 mb-2">Community Impact</h3>
            <p className="text-sm text-gray-600">Different licenses attract different types of contributors. <span className="text-blue-500">Click here</span></p>
          </div>
          <div className="bg-gray-100 hover:bg-gray-200 hover:cursor-pointer p-4 rounded shadow-sm border border-gray-300 hover:text-blue-500">
            <h3 className="font-semibold text-gray-800 mb-2">Legal Requirements</h3>
            <p className="text-sm text-gray-600">Ensure compatibility with dependencies and your business model. <span className="text-blue-500">Click here</span></p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LicensesPage;
