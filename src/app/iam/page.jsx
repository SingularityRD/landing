import CTA from 'components/shared/cta';
import Container from 'components/shared/container';
import Layout from 'components/shared/layout';
import BentoCard from 'components/shared/bento-card';

// Icons
import LockIcon from 'icons/security/lock.svg';
import KeyIcon from 'icons/security/key.svg';
import TableIcon from 'icons/security/table.svg';
import CloudIcon from 'icons/security/cloud.svg';
import UserPrivacyIcon from 'icons/security/user-privacy.svg';
import RestoreIcon from 'icons/security/restore.svg';

export const metadata = {
    title: 'IAM - Zero-Trust Identity & Access Management | Singularity',
    description: 'Every login logged. Every permission earned. Zero-trust identity with granular RBAC and immutable audit trails.',
};

const FEATURES = [
    {
        title: 'Zero-Trust Architecture',
        description: 'Never trust, always verify. Every request authenticated. Every action authorized.',
        icon: LockIcon,
        className: 'col-span-2 md:col-span-1',
    },
    {
        title: 'Granular RBAC',
        description: 'Role-based access control down to individual resources. Least privilege by default.',
        icon: KeyIcon,
    },
    {
        title: 'Immutable Audit Trails',
        description: 'Every login logged. Every permission change tracked. Complete forensic history.',
        icon: TableIcon,
    },
    {
        title: 'SSO Integration',
        description: 'SAML, OIDC, OAuth 2.0. Connect with Okta, Azure AD, Google Workspace, and more.',
        icon: CloudIcon,
    },
    {
        title: 'MFA Enforcement',
        description: 'Hardware keys, TOTP, biometrics. Multiple factors. Zero compromises.',
        icon: UserPrivacyIcon,
    },
    {
        title: 'Just-in-Time Access',
        description: 'Time-limited permissions. Automatic revocation. No standing privileges.',
        icon: RestoreIcon,
    },
];

const IAMPage = () => (
    <Layout>
        <section className="hero safe-paddings relative pt-40 xl:pt-[150px] lg:pt-12 md:pt-10">
            <Container className="relative z-10 flex flex-col items-center text-center" size="960">
                <h1 className="mx-auto font-title text-6xl font-medium leading-[0.9] tracking-extra-tight xl:text-[56px] lg:text-5xl md:text-4xl">
                    Zero-Trust Identity.
                </h1>
                <p className="mx-auto mt-4 max-w-[714px] text-lg leading-snug tracking-extra-tight text-gray-new-80 xl:max-w-[772px] lg:mt-3.5 lg:max-w-[580px] lg:text-base sm:mt-3">
                    Every login logged. Every permission earned. No exceptions. Granular RBAC with immutable audit trails for complete compliance.
                </p>
            </Container>
        </section>
        <section className="features safe-paddings relative overflow-hidden pt-[100px] xl:pt-[80px] lg:pt-[60px]">
            <Container className="relative z-10" size="1100">
                <h2 className="text-center font-title text-[44px] font-medium leading-[0.9] tracking-extra-tight xl:text-4xl lg:text-[36px] md:text-[28px]">
                    Complete Access Control
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
            title="Secure Every Identity.<br />Control Every Access."
            titleClassName="max-w-[745px] lg:max-w-[600px] md:max-w-[400px] md:leading-none"
            buttonText="Deploy IAM"
            buttonUrl="/contact-sales"
        />
    </Layout>
);

export default IAMPage;
