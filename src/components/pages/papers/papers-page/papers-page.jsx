import PAPERS_LIST from 'data/papers';
import PapersList from '../papers-list';

const PapersPage = () => (
  <div className="container mx-auto px-4 py-12">
    <div className="mb-12 text-center">
      <h1 className="mb-4 font-title text-4xl font-medium tracking-tight text-white">
        Research Papers & Reports
      </h1>
      <p className="mx-auto max-w-2xl text-lg text-gray-new-70">
        Explore our latest research on AI, cybersecurity, and autonomous systems. Each paper
        includes full abstracts, citations, and downloadable PDFs.
      </p>
    </div>

    <PapersList papers={PAPERS_LIST} />
  </div>
);

export default PapersPage;
