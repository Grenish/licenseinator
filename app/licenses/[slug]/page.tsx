import { notFound } from "next/navigation";
import Link from "next/link";
import { generateSlug } from "@/util/helpers";
import licenseData from "@/util/license-data.json";

interface LicenseDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Convert to async function
const LicenseDetailPage = async ({ params }: LicenseDetailPageProps) => {
  // Await the params
  const { slug } = await params;

  // Find the license that matches the slug
  const license = licenseData.licenses.find(
    (license) => generateSlug(license.name) === slug
  );

  // If no license is found, return 404
  if (!license) {
    notFound();
  }

  // Helper function to get color based on copyleft strength
  const getCopyleftColor = (strength: string | undefined) => {
    switch (strength) {
      case "Strongest":
        return "bg-red-50 text-red-700 border-red-200";
      case "Strong":
        return "bg-amber-50 text-amber-700 border-amber-200";
      case "Weak":
        return "bg-blue-50 text-blue-700 border-blue-200";
      default:
        return "bg-green-50 text-green-700 border-green-200";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with license name and back button */}
      <header className="bg-white border-b border-gray-200 sticky md:top-14 top-10  z-10 shadow-sm">
        <div className="container mx-auto px-4 py-4 max-w-6xl">
          <div className="flex justify-between items-center">
            <Link
              href="/licenses"
              className="flex items-center text-primary-600 hover:text-primary-700 transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Back to all licenses</span>
            </Link>
            <div className="flex items-center">
              {license.osi_approved && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 ml-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  OSI Approved
                </span>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* License title and badges section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{license.name}</h1>
          <div className="flex justify-center items-center space-x-3">
            <span className={`px-4 py-1.5 rounded-full text-sm font-medium border ${getCopyleftColor(license.copyleft_strength)}`}>
              {license.copyleft_strength || "Permissive"}
            </span>
            {license.examples && license.examples.length > 0 && (
              <span className="text-gray-500 text-sm">
                Used by: {license.examples.slice(0, 3).join(", ")}
                {license.examples.length > 3 && " and more"}
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content - left 2/3 */}
          <div className="lg:col-span-2 space-y-10">
            {/* Description section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                Description
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {license.description}
              </p>
            </section>

            {/* Key Features section */}
            {license.key_features && (
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                  Key Features
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {license.key_features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* History & Context section */}
            {license.history_and_context && (
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                  History & Context
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {license.history_and_context}
                </p>
              </section>
            )}

            {/* Compatibility section */}
            {license.compatibility && (
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200 flex items-center">
                  Compatibility
                  <div className="relative ml-2 group">
                    <button 
                      className="h-5 w-5 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center hover:bg-gray-300 focus:outline-none"
                      aria-label="Learn more about license compatibility"
                    >
                      <span className="text-xs font-bold">i</span>
                    </button>
                    <div className="absolute left-0 bottom-full mb-2 w-64 bg-white shadow-lg rounded-md p-3 text-sm text-gray-700 hidden group-hover:block z-10 border border-gray-200">
                      <div className="font-medium mb-1 text-gray-900">What is license compatibility?</div>
                      <p>License compatibility indicates whether code under this license can be combined with code under other licenses in the same project without legal conflicts.</p>
                    </div>
                  </div>
                </h2>
                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          License
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Compatibility
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {Object.entries(license.compatibility).map(([key, value]) => (
                        <tr key={key} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {key.replace("_", " ").replace(/^\w/, (c) => c.toUpperCase())}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {value as string}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}
          </div>

          {/* Sidebar - right 1/3 */}
          <div className="space-y-8">
            {/* Quick Info Card */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800">License Details</h3>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Copyleft Strength</h4>
                  <p className="text-gray-800 font-medium">{license.copyleft_strength || "None"}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Legal Enforceability</h4>
                  <p className="text-gray-800">{license.legal_enforceability}</p>
                </div>
                {license.examples && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Notable Projects</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {license.examples.map((example, index) => (
                        <span key={index} className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Provisions Card */}
            {license.provisions && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-800">License Provisions</h3>
                </div>
                <div className="divide-y divide-gray-200">
                  {Object.entries(license.provisions).map(([key, value]) => (
                    <div key={key} className="px-6 py-4 flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">
                        {key.replace("_", " ").replace(/^\w/, (c) => c.toUpperCase())}
                      </span>
                      <span className={`text-sm ${typeof value === "boolean" ? (value ? "text-green-600 font-medium" : "text-red-600") : "text-gray-600"}`}>
                        {typeof value === "boolean" ? (value ? "Required" : "Not Required") : value as string}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Button */}
            <div className="mt-6">
              <Link
                href="/licenses"
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition duration-150 ease-in-out shadow-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Explore Other Licenses
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LicenseDetailPage;
