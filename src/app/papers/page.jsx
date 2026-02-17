'use client';

import { useState, useMemo } from 'react';
import PaperCard from 'components/pages/papers/paper-card';
import PAPERS_LIST from 'data/papers';
import SearchIcon from 'icons/search.inline.svg';
import DocumentIcon from 'icons/docs-icon.inline.svg';

const CATEGORIES = [
  { id: 'all', label: 'All Papers', color: 'gray' },
  { id: 'SSRN', label: 'SSRN', color: 'blue' },
  { id: 'Cybersecurity', label: 'Cybersecurity', color: 'red' },
  { id: 'AI & Machine Learning', label: 'AI & ML', color: 'green' },
];

const PapersPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPapers = useMemo(() => {
    return PAPERS_LIST.filter((paper) => {
      const matchesCategory = selectedCategory === 'all' || paper.category === selectedCategory;
      const matchesSearch =
        searchQuery === '' ||
        paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        paper.abstract.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const stats = {
    total: PAPERS_LIST.length,
    categories: [...new Set(PAPERS_LIST.map((p) => p.category))].length,
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-new-8 to-black pb-20 pt-32">
        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-1/4 -top-1/4 h-[600px] w-[600px] rounded-full bg-green-45/5 blur-3xl" />
          <div className="bg-blue-500/5 absolute -right-1/4 top-1/4 h-[400px] w-[400px] rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-new-15 bg-gray-new-8/50 px-4 py-2 backdrop-blur-sm">
              <DocumentIcon className="h-4 w-4 text-green-45" />
              <span className="text-sm font-medium text-gray-new-60">
                {stats.total} Papers • {stats.categories} Research Areas
              </span>
            </div>

            {/* Title */}
            <h1 className="mb-6 font-title text-5xl font-medium tracking-tight text-white md:text-6xl">
              Research Papers &
              <span className="to-emerald-400 block bg-gradient-to-r from-green-45 bg-clip-text text-transparent">
                Reports
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-new-70">
              Explore our latest research on AI, cybersecurity, and autonomous systems. Each paper
              includes comprehensive abstracts, proper citations, and downloadable resources.
            </p>

            {/* Search Bar */}
            <div className="mx-auto max-w-xl">
              <div className="relative">
                <SearchIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-new-50" />
                <input
                  type="text"
                  placeholder="Search papers by title or topic..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-xl border border-gray-new-15 bg-gray-new-8/80 py-4 pl-12 pr-4 text-white placeholder-gray-new-50 backdrop-blur-sm transition-all focus:border-green-45 focus:outline-none focus:ring-1 focus:ring-green-45"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="sticky top-0 z-30 border-b border-gray-new-15 bg-black/80 py-4 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`
                  rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200
                  ${
                    selectedCategory === category.id
                      ? 'bg-green-45 text-black'
                      : 'border border-gray-new-15 bg-gray-new-8 text-gray-new-60 hover:border-gray-new-30 hover:text-white'
                  }
                `}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Papers Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredPapers.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 xl:grid-cols-3 md:grid-cols-2">
              {filteredPapers.map((paper) => (
                <PaperCard key={paper.id} paper={paper} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gray-new-8">
                <SearchIcon className="h-8 w-8 text-gray-new-50" />
              </div>
              <h3 className="mb-2 text-xl font-medium text-white">No papers found</h3>
              <p className="text-gray-new-60">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-gray-new-15 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl rounded-2xl border border-gray-new-15 bg-gradient-to-br from-gray-new-8 to-gray-new-10 p-10 text-center">
            <h2 className="mb-4 font-title text-3xl font-medium text-white">Want to contribute?</h2>
            <p className="mb-6 text-gray-new-70">
              We&apos;re always looking for new research and insights. If you have a paper
              you&apos;d like to share, get in touch with our research team.
            </p>
            <a
              href="mailto:info@singularityrd.com"
              className="hover:bg-green-400 inline-flex items-center gap-2 rounded-lg bg-green-45 px-6 py-3 font-medium text-black transition-all"
            >
              Contact Research Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PapersPage;
