import CTA from 'components/shared/cta';
import Container from 'components/shared/container';
import Layout from 'components/shared/layout';
import BentoCard from 'components/shared/bento-card';

// Icons
import DataIcon from 'icons/security/data.svg';
import CrosshairIcon from 'icons/security/crosshair.svg';
import CircuitIcon from 'icons/security/circuit.svg';
import GraduationIcon from 'icons/security/graduation.svg';
import ChartsIcon from 'icons/security/charts.svg';
import TodoIcon from 'icons/security/todo.svg';

export const metadata = {
    title: 'REPS - Mastery Through Repetition | Singularity',
    description: '50,000+ challenges in algorithms, security, and ML. Build real skills. Get verified. The ultimate training platform for engineers.',
};

const FEATURES = [
    {
        title: 'Algorithms & Data Structures',
        description: 'LeetCode-style challenges. From arrays to dynamic programming. Master the fundamentals.',
        icon: DataIcon,
        className: 'col-span-2 md:col-span-1',
    },
    {
        title: 'Security & Penetration Testing',
        description: 'HackTheBox-style labs. Real attack scenarios. Safe sandbox environments.',
        icon: CrosshairIcon,
    },
    {
        title: 'Machine Learning & AI',
        description: 'Kaggle-style competitions. Build models. Train on real datasets.',
        icon: CircuitIcon,
    },
    {
        title: 'Skill Verification',
        description: 'Proof of competency for SOC 2 audits. Verified certifications for your team.',
        icon: GraduationIcon,
    },
    {
        title: 'Team Analytics',
        description: 'Track progress. Identify gaps. Build stronger engineering teams.',
        icon: ChartsIcon,
    },
    {
        title: 'Custom Challenges',
        description: 'Create company-specific scenarios. Onboard faster. Train smarter.',
        icon: TodoIcon,
    },
];

const REPSPage = () => (
    <Layout>
        <section className="hero safe-paddings relative pt-40 xl:pt-[150px] lg:pt-12 md:pt-10">
            <Container className="relative z-10 flex flex-col items-center text-center" size="960">
                <h1 className="mx-auto font-title text-6xl font-medium leading-[0.9] tracking-extra-tight xl:text-[56px] lg:text-5xl md:text-4xl">
                    REPS. Mastery Through Repetition.
                </h1>
                <p className="mx-auto mt-4 max-w-[714px] text-lg leading-snug tracking-extra-tight text-gray-new-80 xl:max-w-[772px] lg:mt-3.5 lg:max-w-[580px] lg:text-base sm:mt-3">
                    50,000+ challenges in algorithms, security, and machine learning. Build real skills. Get verified. Practice until perfect.
                </p>
            </Container>
        </section>

        <section className="features safe-paddings relative overflow-hidden pt-[100px] xl:pt-[80px] lg:pt-[60px]">
            <Container className="relative z-10" size="1100">
                <h2 className="text-center font-title text-[44px] font-medium leading-[0.9] tracking-extra-tight xl:text-4xl lg:text-[36px] md:text-[28px]">
                    Everything You Need to Level Up
                </h2>
                <div className="mt-12 grid grid-cols-3 gap-6 lg:grid-cols-2 md:grid-cols-1">
                    {FEATURES.map((item, index) => (
                        <BentoCard
                            key={index}
                            {...item}
                        />
                    ))}
                </div>
            </Container>
        </section>

        <CTA
            className="pb-[290px] pt-[348px] xl:pb-[242px] xl:pt-[278px] lg:pb-[200px] lg:pt-[260px] sm:pb-[100px] sm:pt-40"
            title="Start Your Training.<br />Master Any Skill."
            titleClassName="max-w-[745px] lg:max-w-[600px] md:max-w-[400px] md:leading-none"
            buttonText="Try REPS Free"
            buttonUrl="/signup"
        />
    </Layout>
);

export default REPSPage;
