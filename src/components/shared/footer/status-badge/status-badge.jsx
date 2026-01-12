'use client';

import clsx from 'clsx';
import PropTypes from 'prop-types';

const StatusBadge = ({ hasThemesSupport = false, isDarkTheme = true }) => {
  return (
    <div
      className={clsx(
        'flex items-center justify-center gap-x-1.5',
        hasThemesSupport ? 'mt-12 lg:mt-8' : 'mt-auto lg:mt-8 md:mt-8'
      )}
    >
      <span
        className="h-1.5 w-1.5 rounded-full bg-green-45"
      />
      <span
        className={clsx(
          'whitespace-nowrap text-sm leading-none tracking-extra-tight dark:text-white',
          isDarkTheme ? 'text-white' : 'text-black-new'
        )}
      >
        All systems operational
      </span>
    </div>
  );
};

StatusBadge.propTypes = { hasThemesSupport: PropTypes.bool, isDarkTheme: PropTypes.bool };

export default StatusBadge;
