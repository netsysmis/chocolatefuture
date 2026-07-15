import { getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About',
      href: '/#problem',
    },
    {
      text: 'Impact',
      href: '/#impact',
    },
    {
      text: 'Join Us',
      href: '/#join',
    },
  ],
  actions: [{ text: 'Invest with The Chocolate Future', href: '#contact' }],
};

export const footerData = {
  links: [
    {
      title: 'About The Chocolate Future',
      links: [
        { text: 'Our Mission', href: '/#mission' },
        { text: 'Our Values', href: '/#values' },
      ],
    },
    {
      title: 'Impact Areas',
      links: [
        { text: 'Processing Infrastructure', href: '/#impact' },
        { text: 'Local Employment', href: '/#impact' },
        { text: 'Market Development', href: '/#impact' },
      ],
    },
    {
      title: 'Get Involved',
      links: [
        { text: 'Join the 17th Region', href: '#join' },
        { text: 'Invest in Ghana\'s Cocoa', href: '#contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Privacy Policy', href: getAsset('/privacy/') },
        { text: 'Terms of Service', href: getAsset('/terms/') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'RSS Feed', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
    { ariaLabel: 'Twitter/X', icon: 'tabler:brand-twitter-x', href: '#' },
    { ariaLabel: 'Website Top', icon: 'tabler:arrow-up', href: '#top' },
  ],
  footNote: `
    The Chocolate Future · Ghana's Cocoa Value Chain Initiative · Registered in Delaware, USA & Ghana
  `,
};
