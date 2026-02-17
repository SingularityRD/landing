'use client';

import { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Link from 'components/shared/link';
import DocumentIcon from 'icons/docs-icon.inline.svg';
import ExternalIcon from 'icons/external.inline.svg';
import CopyIcon from 'icons/copy.inline.svg';
import CheckIcon from 'icons/check.inline.svg';
import DownloadIcon from 'icons/arrow-right.inline.svg';
import CloseIcon from 'icons/close.inline.svg';

const CATEGORY_COLORS = {
  blue: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  green: 'bg-green-45/20 text-green-45 border-green-45/30',
  red: 'bg-red-500/20 text-red-400 border-red-500/30',
  purple: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  orange: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  gray: 'bg-gray-new-15 text-gray-new-60 border-gray-new-20',
};

export default function PaperCard({ paper }) {
  const [showCitation, setShowCitation] = useState(false);
  const [copiedFormat, setCopiedFormat] = useState(null);

  const formattedDate = new Date(paper.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const handleCopyCitation = (format) => {
    navigator.clipboard.writeText(paper.citations[format]);
    setCopiedFormat(format);
    setTimeout(() => setCopiedFormat(null), 2000);
  };

  return (
    <>
      <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-new-15 bg-gradient-to-br from-gray-new-8 to-gray-new-10 transition-all duration-300 hover:border-gray-new-30 hover:shadow-2xl hover:shadow-green-45/5">
        <div className="flex items-start justify-between p-6 pb-0">
          <span className={clsx('rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-wider', CATEGORY_COLORS[paper.categoryColor] || CATEGORY_COLORS.gray)}>
            {paper.category}
          </span>
          <span className="text-xs text-gray-new-50">{formattedDate}</span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="mb-3 font-title text-xl font-semibold leading-tight tracking-tight text-white transition-colors duration-200 group-hover:text-green-45">
            {paper.title}
          </h3>

          <p className="mb-4 line-clamp-3 flex-1 text-sm leading-relaxed text-gray-new-60">
            {paper.abstract}
          </p>

          <div className="mb-6 flex items-center gap-2 text-xs">
            <span className="font-medium text-gray-new-40">{paper.authors.join(', ')}</span>
            <span className="text-gray-new-60">•</span>
            <span className="text-gray-new-60">{paper.institution}</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 border-t border-gray-new-15 pt-5">
            {paper.type === 'pdf' && paper.pdfUrl && (
              <Link to={paper.pdfUrl} className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-black transition-all hover:bg-green-45 hover:shadow-lg hover:shadow-green-45/25">
                <DownloadIcon className="h-4 w-4 rotate-90" />
                Download PDF
              </Link>
            )}

            {paper.type === 'external' && paper.externalUrl && (
              <Link to={paper.externalUrl} isExternal className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-500/25">
                <ExternalIcon className="h-4 w-4" />
                View on SSRN
              </Link>
            )}

            <button onClick={() => setShowCitation(true)} className="inline-flex items-center gap-2 rounded-lg border border-gray-new-20 bg-gray-new-8 px-4 py-2.5 text-sm font-medium text-gray-new-40 transition-all hover:border-gray-new-40 hover:text-white">
              <DocumentIcon className="h-4 w-4" />
              Cite
            </button>
          </div>
        </div>
      </article>

      {showCitation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm" onClick={() => setShowCitation(false)}>
          <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-gray-new-15 bg-gray-new-8 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between border-b border-gray-new-15 bg-gray-new-10 px-6 py-4">
              <div>
                <h3 className="font-title text-lg font-semibold text-white">Cite This Paper</h3>
                <p className="text-sm text-gray-new-60">{paper.title}</p>
              </div>
              <button onClick={() => setShowCitation(false)} className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-new-15 text-gray-new-50 transition-colors hover:bg-gray-new-20 hover:text-white">
                <CloseIcon className="h-4 w-4" />
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto p-6">
              <div className="mb-6">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm font-semibold text-green-45">APA Format</span>
                  <button onClick={() => handleCopyCitation('apa')} className="flex items-center gap-2 rounded-lg bg-gray-new-15 px-3 py-1.5 text-xs font-medium text-white transition-all hover:bg-green-45 hover:text-black">
                    {copiedFormat === 'apa' ? <><CheckIcon className="h-3.5 w-3.5" />Copied!</> : <><CopyIcon className="h-3.5 w-3.5" />Copy</>}
                  </button>
                </div>
                <div className="rounded-lg border border-gray-new-15 bg-black p-4">
                  <code className="block whitespace-pre-wrap break-all text-sm leading-relaxed text-gray-new-50">{paper.citations.apa}</code>
                </div>
              </div>

              <div>
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm font-semibold text-green-45">BibTeX Format</span>
                  <button onClick={() => handleCopyCitation('bibtex')} className="flex items-center gap-2 rounded-lg bg-gray-new-15 px-3 py-1.5 text-xs font-medium text-white transition-all hover:bg-green-45 hover:text-black">
                    {copiedFormat === 'bibtex' ? <><CheckIcon className="h-3.5 w-3.5" />Copied!</> : <><CopyIcon className="h-3.5 w-3.5" />Copy</>}
                  </button>
                </div>
                <div className="rounded-lg border border-gray-new-15 bg-black p-4">
                  <code className="block overflow-x-auto whitespace-pre text-sm leading-relaxed text-gray-new-50">{paper.citations.bibtex}</code>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-new-15 bg-gray-new-10 px-6 py-4">
              <p className="text-center text-xs text-gray-new-60">Make sure to verify citations before using in academic work</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

PaperCard.propTypes = {
  paper: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    abstract: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string).isRequired,
    date: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    categoryColor: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['pdf', 'external']).isRequired,
    externalUrl: PropTypes.string,
    pdfUrl: PropTypes.string,
    institution: PropTypes.string.isRequired,
    citations: PropTypes.shape({
      apa: PropTypes.string.isRequired,
      bibtex: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
