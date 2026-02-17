'use client';

import PaperCard from 'components/pages/papers/paper-card';
import PAPERS_LIST from 'data/papers';

const PapersPage = () => (
  <div className="container mx-auto px-4 py-12">
    <div className="mb-12 text-center">
      <h1 className="mb-4 font-title text-4xl font-medium tracking-tight text-white">
        Research Papers & Reports
      </h1>
      <p className="mx-auto max-w-2xl text-lg text-gray-new-70">
        Explore our latest research on AI, cybersecurity, and autonomous systems.
        Each paper includes full abstracts, citations, and downloadable PDFs.
      </p>
    </div>

    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {PAPERS_LIST.map((paper) => (
        <PaperCard key={paper.id} paper={paper} />
      ))}
    </div>
  </div>
);

export default PapersPage;
