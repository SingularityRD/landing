import clsx from 'clsx';
import PropTypes from 'prop-types';

const BentoCard = ({ title, description, className, icon: Icon, isDarkTheme = true }) => (
    <div
        className={clsx(
            'group relative flex flex-col justify-end overflow-hidden rounded-xl border p-8 transition-all duration-300',
            isDarkTheme
                ? 'border-gray-new-15 bg-gray-new-8 hover:border-gray-new-30 hover:bg-gray-new-10'
                : 'border-gray-new-90 bg-white hover:border-gray-new-80 hover:bg-gray-new-98',
            className
        )}
    >
        {/* Gradient Overlay for aesthetic depth */}
        <div
            className={clsx(
                "absolute inset-0 z-0 bg-gradient-to-b from-transparent to-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                isDarkTheme ? "via-transparent" : "via-transparent"
            )}
        />

        {/* Content */}
        <div className="relative z-10">
            {Icon && (
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-green-45/10">
                    <img src={Icon} alt="" className="h-6 w-6" loading="lazy" />
                </div>
            )}

            <h3 className={clsx(
                "font-title text-2xl font-medium tracking-tight",
                isDarkTheme ? "text-white" : "text-black-new"
            )}>
                {title}
            </h3>

            <p className={clsx(
                "mt-3 text-lg leading-snug",
                isDarkTheme ? "text-gray-new-70" : "text-gray-new-40"
            )}>
                {description}
            </p>
        </div>

        {/* Shine effect on hover */}
        <div
            className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine"
            style={{ left: '-100%' }}
        />
    </div>
);

BentoCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    className: PropTypes.string,
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    isDarkTheme: PropTypes.bool,
};

export default BentoCard;
