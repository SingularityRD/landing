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

const CATEGORY_COLORS = {
  blue: 'bg-blue-500/20 text-blue-400',
  green: 'bg-green-45/20 text-green-45',
  red: 'bg-red-500/20 text-red-400',
  purple: 'bg-purple-500/20 text-purple-400',
  orange: 'bg-orange-500/20 text-orange-400',
  gray: 'bg-gray-new-15 text-gray-new-70',
};

const PaperCard = ({ paper }) => {
  const [showCitation, setShowCitation] = useState(false);
  const [copiedFormat, setCopiedFormat] = useState(null);

  const formattedDate = new Date(paper.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const handleCopyCitation = (format) => {
    const citation = paper.citations[format];
    navigator.clipboard.writeText(citation);
    setCopiedFormat(format);
    setTimeout(() => setCopiedFormat(null), 2000);
  };

  const linkUrl =
    paper.type === 'external' ? paper.externalUrl : `/postgresql/postgresql-papers/${paper.slug}`;
  const isExternal = paper.type === 'external';

  return (
    <article className="group relative flex flex-col rounded-xl border border-gray-new-15 bg-gray-new-8 p-6 transition-all duration-300 hover:border-gray-new-30 hover:bg-gray-new-10 hover:shadow-lg hover:shadow-black/20">
      <div className="mb-4 flex items-center justify-between">
        <span
          className={clsx(
            'rounded-full px-3 py-1 text-xs font-medium',
            CATEGORY_COLORS[paper.categoryColor] || CATEGORY_COLORS.gray
          )}
        >
          {paper.category}
        </span>
        <span className="text-xs text-gray-new-50">{formattedDate}</span>
      </div>

      <h3 className="mb-3 font-title text-xl font-medium leading-tight tracking-tight text-white transition-colors group-hover:text-green-45">
        <Link to={linkUrl} isExternal={isExternal} className="hover:text-green-45">
          {paper.title}
          {isExternal && <ExternalIcon className="ml-2 inline-block h-4 w-4 text-gray-new-50" />}
        </Link>
      </h3>

      <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-gray-new-70">{paper.abstract}</p>

      <div className="mb-4 text-xs text-gray-new-50">
        <span className="font-medium text-gray-new-60">{paper.authors.join(', ')}</span>
        <span className="mx-2">•</span>
        <span>{paper.institution}</span>
      </div>

      <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-gray-new-15 pt-4">
        {paper.type === 'pdf' && paper.pdfUrl && (
          <Link
            to={paper.pdfUrl}
            className="inline-flex items-center gap-2 rounded-lg bg-gray-new-15 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-green-45 hover:text-black"
          >
            <DownloadIcon className="h-4 w-4 rotate-90" />
            PDF
          </Link>
        )}

        {paper.type === 'external' && paper.externalUrl && (
          <Link
            to={paper.externalUrl}
            isExternal
            className="bg-blue-500/20 text-blue-400 hover:bg-blue-500 inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all hover:text-white"
          >
            <ExternalIcon className="h-4 w-4" />
            View on SSRN
          </Link>
        )}

        <button
          onClick={() => setShowCitation(!showCitation)}
          className="inline-flex items-center gap-2 rounded-lg border border-gray-new-30 px-4 py-2 text-sm font-medium text-gray-new-60 transition-all hover:border-green-45 hover:text-green-45"
        >
          <DocumentIcon className="h-4 w-4" />
          Citation
        </button>
      </div>

      {showCitation && (
        <div className="mt-4 rounded-lg border border-gray-new-15 bg-gray-new-10 p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs font-medium text-gray-new-50">Cite this paper</span>
            <button
              onClick={() => setShowCitation(false)}
              className="text-xs text-gray-new-50 hover:text-white"
            >
              Close
            </button>
          </div>

          <div className="mb-3">
            <div className="mb-1 flex items-center justify-between">
              <span className="text-xs font-medium text-green-45">APA</span>
              <button
                onClick={() => handleCopyCitation('apa')}
                className="flex items-center gap-1 text-xs text-gray-new-50 transition-colors hover:text-white"
              >
                {copiedFormat === 'apa' ? (
                  <>
                    <CheckIcon className="h-3 w-3 text-green-45" />
                    Copied!
                  </>
                ) : (
                  <>
                    <CopyIcon className="h-3 w-3" />
                    Copy
                  </>
                )}
              </button>
            </div>
            <code className="block whitespace-pre-wrap break-all rounded bg-gray-new-8 p-2 text-xs text-gray-new-70">
              {paper.citations.apa}
            </code>
          </div>

          <div>
            <div className="mb-1 flex items-center justify-between">
              <span className="text-xs font-medium text-green-45">BibTeX</span>
              <button
                onClick={() => handleCopyCitation('bibtex')}
                className="flex items-center gap-1 text-xs text-gray-new-50 transition-colors hover:text-white"
              >
                {copiedFormat === 'bibtex' ? (
                  <>
                    <CheckIcon className="h-3 w-3 text-green-45" />
                    Copied!
                  </>
                ) : (
                  <>
                    <CopyIcon className="h-3 w-3" />
                    Copy
                  </>
                )}
              </button>
            </div>
            <code className="block overflow-x-auto whitespace-pre-wrap rounded bg-gray-new-8 p-2 text-xs text-gray-new-70">
              {paper.citations.bibtex}
            </code>
          </div>
        </div>
      )}
    </article>
  );
};

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

export default PaperCard;
