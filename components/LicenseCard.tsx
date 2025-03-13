import { FC } from 'react';
import Link from 'next/link';

interface LicenseCardProps {
  name: string;
  description: string;
  slug: string;
  osiApproved?: boolean;
  copyleftStrength?: string;
  examples?: string[];
}

const LicenseCard: FC<LicenseCardProps> = ({ 
  name, 
  description, 
  slug,
  osiApproved,
  copyleftStrength,
  examples
}) => {
  return (
    <Link href={`/licenses/${slug}`}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 h-full flex flex-col overflow-hidden">
        <div className="p-6 flex-grow">
          <div className="flex justify-between items-start mb-3">
            <h2 className="text-xl font-semibold text-gray-900">{name}</h2>
            {osiApproved && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                OSI
              </span>
            )}
          </div>
          
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>
          
          {copyleftStrength && (
            <div className="flex items-center mb-3">
              <span className="text-xs font-medium text-gray-500 mr-2">Copyleft:</span>
              <span className={`text-xs font-medium px-2 py-1 rounded ${
                copyleftStrength === 'Strong' || copyleftStrength === 'Strongest' 
                  ? 'bg-amber-100 text-amber-800' 
                  : copyleftStrength === 'Weak' 
                    ? 'bg-blue-100 text-blue-800' 
                    : 'bg-gray-100 text-gray-800'
              }`}>
                {copyleftStrength === 'None' ? 'Permissive' : copyleftStrength}
              </span>
            </div>
          )}
          
          {examples && examples.length > 0 && (
            <div className="mt-auto">
              <span className="text-xs font-medium text-gray-500">Used by:</span>
              <div className="flex flex-wrap gap-1 mt-1">
                {examples.map(example => (
                  <span key={example} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                    {example}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <div className="bg-gray-50 px-6 py-3 border-t border-gray-200">
          <span className="text-primary-600 text-sm font-medium flex items-center">
            View details
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default LicenseCard;