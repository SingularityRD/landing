import AiAgentsGradientIcon from 'icons/header/ai-agent-gradient.inline.svg';
import AiAgentsIcon from 'icons/header/ai-agent.inline.svg';
import ApiGradientIcon from 'icons/header/api-gradient.inline.svg';
import ApiIcon from 'icons/header/api.inline.svg';
import AuthGradientIcon from 'icons/header/auth-gradient.inline.svg';
import AuthIcon from 'icons/header/auth.inline.svg';
import AutoscalingGradientIcon from 'icons/header/autoscaling-gradient.inline.svg';
import AutoscalingIcon from 'icons/header/autoscaling.inline.svg';
import BlogIcon from 'icons/header/blog.inline.svg';
import BranchingGradientIcon from 'icons/header/branching-gradient.inline.svg';
import BranchingIcon from 'icons/header/branching.inline.svg';
import CareerIcon from 'icons/header/career.inline.svg';
import ChatIcon from 'icons/header/chat.inline.svg';
import CloudGradientIcon from 'icons/header/cloud-gradient.inline.svg';
import CloudIcon from 'icons/header/cloud.inline.svg';
import ConnectionGradientIcon from 'icons/header/connection-gradient.inline.svg';
import ConnectionIcon from 'icons/header/connection.inline.svg';
import DatabaseGradientIcon from 'icons/header/database-gradient.inline.svg';
import DatabaseIcon from 'icons/header/database.inline.svg';
import FolderGradientIcon from 'icons/header/folder-gradient.inline.svg';
import FolderIcon from 'icons/header/folder.inline.svg';
import GearGradientIcon from 'icons/header/gear-gradient.inline.svg';
import GearIcon from 'icons/header/gear.inline.svg';
import MigrationGradientIcon from 'icons/header/migration-gradient.inline.svg';
import MigrationIcon from 'icons/header/migration.inline.svg';
import MultiTbgGradientIcon from 'icons/header/multi-tb-gradient.inline.svg';
import MultiTbgIcon from 'icons/header/multi-tb.inline.svg';
import PatternGradientIcon from 'icons/header/pattern-gradient.inline.svg';
import PatternIcon from 'icons/header/pattern.inline.svg';
import PeopleIcon from 'icons/header/people.inline.svg';
import RestoreGradientIcon from 'icons/header/restore-gradient.inline.svg';
import RestoreIcon from 'icons/header/restore.inline.svg';
import RocketGradientIcon from 'icons/header/rocket-gradient.inline.svg';
import RocketIcon from 'icons/header/rocket.inline.svg';
import SecurityGradientIcon from 'icons/header/security-gradient.inline.svg';
import SecurityIcon from 'icons/header/security.inline.svg';
import ServerlessGradientIcon from 'icons/header/serverless-gradient.inline.svg';
import ServerlessIcon from 'icons/header/serverless.inline.svg';
import SettingsGradientIcon from 'icons/header/settings-gradient.inline.svg';
import SettingsIcon from 'icons/header/settings.inline.svg';

import LINKS from './links';

export default {
  header: [
    {
      text: 'Platform',
      sections: [
        {
          title: 'Core Platform',
          items: [
            {
              icon: SecurityIcon,
              iconGradient: SecurityGradientIcon,
              title: 'AutoSecOps',
              description: 'Device management & security',
              to: '/autosecops',
            },
            {
              icon: AiAgentsIcon,
              iconGradient: AiAgentsGradientIcon,
              title: 'vCISO',
              description: 'AI-powered security leadership',
              to: '/vciso',
            },
            {
              icon: GearIcon,
              iconGradient: GearGradientIcon,
              title: 'Threat Intelligence',
              description: 'Global CTI feeds',
              to: '/threat-intelligence',
            },
            {
              icon: FolderIcon,
              iconGradient: FolderGradientIcon,
              title: 'Compliance',
              description: 'SOC 2 in 14 days',
              to: '/compliance',
            },
          ],
        },
        {
          title: 'Products',
          items: [
            {
              icon: RocketIcon,
              iconGradient: RocketGradientIcon,
              title: 'REPS',
              description: 'Mastery through repetition',
              to: '/reps',
            },
            {
              icon: ServerlessIcon,
              iconGradient: ServerlessGradientIcon,
              title: 'WAF',
              description: 'AI-powered firewall',
              to: '/waf',
            },
            {
              icon: AuthIcon,
              iconGradient: AuthGradientIcon,
              title: 'IAM',
              description: 'Identity & access',
              to: '/iam',
            },
          ],
        },
      ],
    },
    {
      text: 'Pricing',
      to: LINKS.pricing,
    },
    {
      text: 'Company',
      sections: [
        {
          items: [
            {
              icon: BlogIcon,
              title: 'Blog',
              to: LINKS.blog,
            },
            {
              icon: PeopleIcon,
              title: 'About us',
              to: LINKS.aboutUs,
            },
          ],
        },
      ],
    },
  ],
  footer: [
    {
      heading: 'Company',
      items: [
        {
          text: 'About',
          to: LINKS.aboutUs,
        },
        {
          text: 'Blog',
          to: LINKS.blog,
        },
        {
          text: 'Partners',
          to: LINKS.partners,
        },
        {
          text: 'Security',
          to: LINKS.security,
        },
      ],
    },
    {
      heading: 'Social',
      items: [
        {
          text: 'GitHub',
          to: LINKS.github,
          icon: 'github-icon',
        },
        {
          text: 'x.com',
          to: LINKS.twitter,
          icon: 'x-icon',
        },
        {
          text: 'LinkedIn',
          to: LINKS.linkedin,
          icon: 'linkedin-icon',
        },
        {
          text: 'YouTube',
          to: LINKS.youtube,
          icon: 'youtube-icon',
        },
      ],
    },

  ],
};
