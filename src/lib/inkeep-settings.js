import closeIcon from 'icons/close.svg';

const baseSettings = {
  apiKey: process.env.INKEEP_INTEGRATION_API_KEY,
  integrationId: process.env.INKEEP_INTEGRATION_ID,
  organizationId: process.env.INKEEP_ORGANIZATION_ID,
  primaryBrandColor: '#00E599',
  organizationDisplayName: 'Singularity',
  customIcons: {
    close: { custom: closeIcon },
  },
  customCardSettings: [
    {
      filters: {
        AND: [
          {
            UrlMatch: {
              ruleType: 'PartialUrl',
              partialUrl: 'https://singularityrd.com/docs',
            },
          },
          {
            NOT: {
              UrlMatch: {
                ruleType: 'PartialUrl',
                partialUrl: 'https://singularityrd.com/docs/changelog',
              },
            },
          },
        ],
      },
      searchTabLabel: 'Singularity Docs',
    },
    {
      filters: {
        UrlMatch: {
          ruleType: 'PartialUrl',
          partialUrl: 'https://singularityrd.com/blog',
        },
      },
      searchTabLabel: 'Blog',
    },
    {
      filters: {
        UrlMatch: {
          ruleType: 'PartialUrl',
          partialUrl: 'https://singularityrd.com/docs/changelog',
        },
      },
      searchTabLabel: 'Changelog',
    },
  ],
};

const aiChatSettings = {
  botName: 'Singularity AI',
  placeholder: 'How can I secure my organization?',
  introMessage:
    "<p>Hi!<br>I'm an AI assistant trained on Singularity documentation and security best practices.</p><p>Ask me anything about autonomous security.</p>",
  quickQuestions: [
    'What is AutoSecOps?',
    'How does SOC 2 in 14 days work?',
    'What is vCISO?',
    'How to get started with Singularity?',
  ],
  botAvatarSrcUrl: '/inkeep/images/bot.svg',
  botAvatarDarkSrcUrl: '/inkeep/images/bot-dark.svg',
  userAvatarSrcUrl: '/inkeep/images/user.svg',
  userAvatarDarkSrcUrl: '/inkeep/images/user-dark.svg',
  isChatSharingEnabled: true,
  shareChatUrlBasePath: 'https://singularityrd.com/docs/introduction',
  getHelpCallToActions: [
    {
      type: 'OPEN_LINK',
      icon: { builtIn: 'FaDiscord' },
      name: 'Discord',
      url: 'https://discord.gg/singularityrd',
    },
    {
      type: 'OPEN_LINK',
      icon: { builtIn: 'IoChatbubblesOutline' },
      name: 'Singularity Support',
      url: 'mailto:support@singularityrd.com',
    },
  ],
};

export { baseSettings, aiChatSettings };
