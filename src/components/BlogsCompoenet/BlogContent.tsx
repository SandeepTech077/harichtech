/* eslint-disable @typescript-eslint/no-explicit-any */
// components/Blog/BlogContent.tsx
import React from 'react';

interface BlogContentProps {
  blogs: any[];
}

const BlogContent: React.FC<BlogContentProps> = ({ blogs }) => {
  // Helper function to safely render description arrays
  const renderDescriptions = (descriptions: string[] | string | undefined) => {
    if (!descriptions) return null;
    
    // If it's a string, convert to array
    const descArray = Array.isArray(descriptions) ? descriptions : [descriptions];
    
    return (
      <div className="mb-4 sm:mb-6">
        {descArray.map((desc: string, descIndex: number) => (
          <p key={descIndex} className="text-gray-700 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
            {desc}
          </p>
        ))}
      </div>
    );
  };

  const renderBullets = (bullets: string[] | undefined) => {
    if (!bullets || !Array.isArray(bullets)) return null;
    
    return (
      <ul className="list-disc ml-4 sm:ml-6 mb-4 sm:mb-6">
        {bullets.map((bullet, index) => (
          <li key={index} className="text-[#02060B] text-[16px]">
            {bullet.includes('**') ? (
              <span dangerouslySetInnerHTML={{ __html: bullet.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
            ) : (
              bullet
            )}
          </li>
        ))}
      </ul>
    );
  };

  const renderSection = (section: any, index: number) => (
    <div key={index} className="mb-6 sm:mb-8">
      {section.sectionTitle && (
        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">
          {section.sectionTitle}
        </h3>
      )}
      {section.description && renderDescriptions(section.description)}
      {section.bullets && renderBullets(section.bullets)}
    </div>
  );

  const renderRealWorldApplication = (realWorld: any) => (
    <div className="bg-blue-50 p-4 sm:p-6 rounded-lg mb-6 sm:mb-8">
      <h4 className="text-base sm:text-lg font-semibold text-blue-800 mb-3 sm:mb-4">
        {realWorld.title}
      </h4>
      <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
        {realWorld.description}
      </p>
      {realWorld.bulletPoints && (
        <div>
          <h5 className="font-medium text-gray-800 mb-2 text-sm sm:text-base">
            {realWorld.bulletPoints.title}
          </h5>
          {renderBullets(realWorld.bulletPoints.points)}
        </div>
      )}
    </div>
  );

  const renderBlogSection = (blog: any, index: number) => (
    <section key={index} className="mb-8 sm:mb-12">
      <h2 className="text-[24px] md:text-[26px] lg:text-[30px] font-bold text-transparent bg-gradient-to-l from-[#2058FF] to-[#004BC2] bg-clip-text mb-4 sm:mb-6">
        {blog.title}
      </h2>

      {/* Main Description */}
      {blog.description && renderDescriptions(blog.description)}

      {/* Bullets */}
      {blog.bullets && renderBullets(blog.bullets)}

      {/* Sections */}
      {blog.sections && Array.isArray(blog.sections) && blog.sections.map((section: any, sectionIndex: number) => 
        renderSection(section, sectionIndex)
      )}

      {blog.realWorld && renderRealWorldApplication(blog.realWorld)}

      {blog.additionalInfo && (
        <div className="rounded-lg mb-6 sm:mb-8">
          <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">
            {blog.additionalInfo.title}
          </h4>
          {blog.additionalInfo.description && renderDescriptions(blog.additionalInfo.description)}
          {blog.additionalInfo.bullets && renderBullets(blog.additionalInfo.bullets)}
          {blog.additionalInfo.points && renderBullets(blog.additionalInfo.points)}
        </div>
      )}

      {blog.example && (
        <div className="bg-blue-50 p-4 sm:p-6 rounded-lg mb-6 sm:mb-8">
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            <span className="font-semibold">Example:</span> {blog.example}
          </p>
        </div>
      )}

      {blog.results && Array.isArray(blog.results) && (
        <div className="bg-blue-50 p-4 sm:p-6 rounded-lg mb-6 sm:mb-8">
          <h4 className="font-semibold text-gray-800 mb-2 sm:mb-3 text-sm sm:text-base">Results:</h4>
          <ul className="list-disc ml-4 sm:ml-6 space-y-1 sm:space-y-2">
            {blog.results.map((result: string, resultIndex: number) => (
              <li key={resultIndex} className="text-gray-700 text-sm sm:text-base">
                {result}
              </li>
            ))}
          </ul>
        </div>
      )}

      {blog.departments && Array.isArray(blog.departments) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {blog.departments.map((dept: any, deptIndex: number) => (
            <div key={deptIndex} className="">
              <h4 className="font-semibold text-indigo-800 mb-2 sm:mb-3 text-sm sm:text-base">
                {dept.name}
              </h4>
              <p className="text-gray-700 text-xs sm:text-sm">
                {dept.features}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Examples */}
      {blog.examples && Array.isArray(blog.examples) && (
        <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
          {blog.examples.map((example: any, exampleIndex: number) => (
            <div key={exampleIndex} className="p-4 sm:p-6 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2 sm:mb-3 text-sm sm:text-base">
                {example.name}
              </h4>
              <p className="text-gray-700 text-xs sm:text-sm">
                {example.description}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Steps */}
      {blog.steps && Array.isArray(blog.steps) && (
        <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
          {blog.steps.map((step: any, stepIndex: number) => (
            <div key={stepIndex} className="">
              <h4 className="font-semibold text-teal-800 mb-2 sm:mb-3 text-sm sm:text-base">
                {stepIndex + 1}. {step.title}
              </h4>
              <p className="text-gray-700 text-xs sm:text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Points */}
      {blog.points && (
        <div className="mb-6 sm:mb-8">
          {Array.isArray(blog.points) ? (
            blog.points.map((point: any, pointIndex: number) => (
              <div key={pointIndex} className="mb-4 sm:mb-6">
                {point.title && (
                  <h4 className="font-semibold text-gray-800 mb-2 sm:mb-3 text-sm sm:text-base">
                    {point.title}
                  </h4>
                )}
                {point.bullets && renderBullets(point.bullets)}
              </div>
            ))
          ) : (
            <div>
              {blog.points.title && (
                <h4 className="font-semibold text-gray-800 mb-2 sm:mb-3 text-sm sm:text-base">
                  {blog.points.title}
                </h4>
              )}
              {blog.points.bullets && renderBullets(blog.points.bullets)}
            </div>
          )}
        </div>
      )}

      {/* Bullet Title with Bullets */}
      {blog.bulletTitle && (
        <div className="mb-4 sm:mb-6">
          <h4 className="font-semibold text-gray-800 mb-2 sm:mb-3 text-sm sm:text-base">
            {blog.bulletTitle}
          </h4>
          {blog.bullets && renderBullets(blog.bullets)}
        </div>
      )}

      {/* Result */}
      {blog.result && (
        <div className="p-4">
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            <span className="font-semibold">Result:</span> {blog.result}
          </p>
        </div>
      )}

      {/* Conclusion */}
      {blog.conclusion && (
        <div className="bg-blue-50 p-4 sm:p-6 rounded-lg mb-6 sm:mb-8">
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            {blog.conclusion}
          </p>
        </div>
      )}
    </section>
  );

  return (
    <div className="w-full bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-16 py-8 sm:py-12 lg:py-16">
        <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none">
          {blogs && Array.isArray(blogs) && blogs.map((blog, index) => renderBlogSection(blog, index))}
        </div>
      </div>
    </div>
  );
};

export default BlogContent;