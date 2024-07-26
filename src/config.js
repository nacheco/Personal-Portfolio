module.exports = {
  email: 'natepacheco716@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/Zeviks',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/natanaelpachecorobles/',
    },
  ],

  navLinks: [
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'About',
      url: '/#about',
    },
    // {
    //   name: 'Work',
    //   url: '/#jobs',
    // },

    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    orange: '#F76809',
    navy: '#0a192f',
    darkNavy: 'rgba(2, 12, 27, 1)',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
