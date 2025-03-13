import Link from "next/link";
import {
  FileText,
  Globe,
  ArrowRight,
  Shield,
  Scale,
  GitCompare,
  ChevronDown,
} from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-white py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-50 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary-100 rounded-full opacity-40 blur-3xl"></div>

      <div className="container mx-auto px-4 max-w-6xl relative">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0 text-left">
            <div className="inline-block px-4 py-1 bg-primary-100 rounded-full text-primary-800 font-medium text-sm mb-6 animate-pulse">
              Open Source Made Simple
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Find Your{" "}
              <span className="text-primary-600 relative">
                Ideal License
                <span className="absolute bottom-1 left-0 w-full h-2 bg-primary-200 -z-10 opacity-70"></span>
              </span>{" "}
              With Confidence
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-lg">
              Navigate the complex world of open source licensing with our
              expert guidance and simplified explanations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/licenses"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                Explore Licenses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="#features"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-1"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-80 h-80">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100 rounded-lg transform rotate-6 shadow-lg"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-200 rounded-lg transform -rotate-6 shadow-lg"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-white/30 rounded-full blur-xl"></div>
                  <Shield className="h-32 w-32 text-primary-600 relative z-10 drop-shadow-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-white relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-primary-50 rounded-full text-primary-700 font-medium text-sm mb-4">
            Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Licenseinator
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Our platform simplifies the complex world of open source licensing
            to help you make informed decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
            <div className="bg-primary-50 p-4 rounded-full inline-flex mb-6 group-hover:bg-primary-100 transition-colors duration-300">
              <FileText className="h-8 w-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Simple Explanations
            </h3>
            <p className="text-gray-700">
              Clear, jargon-free descriptions of each license and its terms,
              making complex legal concepts accessible.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
            <div className="bg-primary-50 p-4 rounded-full inline-flex mb-6 group-hover:bg-primary-100 transition-colors duration-300">
              <Globe className="h-8 w-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Usage Guidance
            </h3>
            <p className="text-gray-700">
              Learn when and why to use each license for your specific project
              needs with practical, real-world examples.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
            <div className="bg-primary-50 p-4 rounded-full inline-flex mb-6 group-hover:bg-primary-100 transition-colors duration-300">
              <GitCompare className="h-8 w-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Detailed Comparison
            </h3>
            <p className="text-gray-700">
              Compare license features side-by-side to find the best match for
              your project goals and requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-pattern opacity-10"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full opacity-10 blur-3xl"></div>

      <div className="container mx-auto px-4 max-w-6xl text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to choose your license?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Browse our comprehensive collection of open source licenses and find
            the perfect fit for your project.
          </p>
          <Link
            href="/licenses"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-primary-700 bg-white hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            View All Licenses
            <Scale className="ml-2 h-5 w-5" />
          </Link>

          {/* Additional decorative element */}
          <div className="mt-12 flex justify-center">
            <div className="w-24 h-1 bg-white/30 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <CTASection />
    </main>
  );
}
