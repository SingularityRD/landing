import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Suspense } from 'react';

import Button from 'components/shared/button';
import GitHubStarCounter from 'components/shared/github-star-counter';
import Link from 'components/shared/link';
import LINKS from 'constants/links';
import GitHubIcon from 'icons/github.inline.svg';
import { getGitHubStars } from 'utils/get-github-data';

const themePropTypes = {
  isDarkTheme: PropTypes.bool,
};

const GitHubStars = async ({ isDarkTheme }) => {
  const starsCount = await getGitHubStars();
  return (
    <Suspense>
      <GitHubStarCounter isDarkTheme={isDarkTheme} starsCount={starsCount} tagName="Header" />
    </Suspense>
  );
};

GitHubStars.propTypes = themePropTypes;

const Sidebar = ({ isDarkTheme, isClient, simpleMode, className }) => (
  <div
    className={clsx('flex items-center lg:hidden', simpleMode ? 'gap-x-2.5' : 'gap-x-6', className)}
  >
    {simpleMode ? (
      <>
        <Link
          className={clsx(
            'flex size-8 items-center justify-center rounded-full border border-gray-new-70',
            'transition-colors duration-200 hover:border-black-new hover:text-black-new',
            'dark:border-gray-new-30 dark:text-gray-new-60 dark:hover:border-gray-new-40 dark:hover:text-white'
          )}
          to={LINKS.github}
          target="_blank"
          rel="noopener noreferrer"
          tagName="Header"
          tagText="GitHub"
        >
          <GitHubIcon width={18} height={18} />
        </Link>
      </>
    ) : (
      <>
        {!isClient && <GitHubStars isDarkTheme={isDarkTheme} />}
      </>
    )}
    <div className="flex gap-2.5 lg:hidden">
      <Button
        className="px-4.5 whitespace-nowrap font-semibold"
        to="/contact-sales"
        theme="primary"
        size="xxs"
        tagName="Header"
      >
        Contact Sales
      </Button>
    </div>
  </div>
);

Sidebar.propTypes = {
  ...themePropTypes,
  isClient: PropTypes.bool,
  simpleMode: PropTypes.bool,
  className: PropTypes.string,
};

export default Sidebar;
