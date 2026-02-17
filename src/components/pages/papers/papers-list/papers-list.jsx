'use client';

import PaperCard from '../paper-card';

const PapersList = ({ papers }) => (
  <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2">
    {papers.map((paper) => (
      <PaperCard key={paper.id} paper={paper} />
    ))}
  </div>
);

export default PapersList;
