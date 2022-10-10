/** @type {import('tailwindcss').Config} */

const customColors = {
  white: '#FFFFFF',
  'table-header': '#DFDFE2',
  'table-row-hover': '#5C98E5',
  'red': '#ff0000',
  'sub-text-color': '#5A5D72',
  'normal-text-color': '#161528',
  'slightly-normal-text-color': '#2C304E',
  'faded-icon': '#A9ACBC',
  'icon-background': '#EFF5FC',
  'partner-hover': '#FF668C',
  'section-hover': '#F5F5F5',
  'hyper-link': '#0062FF',
  'sign-out': '#DA1E28',
  'card-hover': '#FAFCFF'
};

module.exports = {
  prefix: 'tw-',
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    textColor: {
      ...customColors
    },
    backgroundColor: {
      ...customColors
    },
    fontSize: {
      '12-px': '12px',
      '14-px': '14px',
      '16-px': '16px',
      '18-px': '18px',
      '20-px': '20px',
      '24-px': '24px',
      '36-px': '36px',
      '40-px': '40px'
    },
    fontWeight: {
      '100': '100',
      '200': '200',
      '300': '300',
      '400': '400',
      '500': '500',
      '600': '600',
      '700': '700'
    },
    letterSpacing: {
      '.4-px': '.4px',
      '1.5-px': '1.5px',
      '1.6-px': '1.6px',
    },
    lineHeight: {
      'normal': 'normal',
      '1.14': '1.14',
      '1.2': '1.2',
      '1.4': '1.4',
      '1.5': '1.5',
      '1.6': '1.6',
      '1.7': '1.7',
      '1.8': '1.8'
    },
    extend: {
      animation: {
        'progress-spinner': 'p-progress-spinner-dash 1.5s ease-in-out infinite, p-progress-spinner-color 6s ease-in-out infinite'
      },
      keyframes: {
        'p-progress-spinner-color': {
          '0%': { 'stroke': '#ff3863'},
          '100%': { 'stroke': '#ff3863'}
        }
      },
      padding: {
        '2-px': '2px',
        '4-px': '4px',
        '5-px': '5px',
        '6-px': '6px',
        '8-px': '8px',
        '10-px': '10px',
        '12-px': '12px',
        '14-px': '14px',
        '16-px': '16px',
        '18-px': '18px',
        '20-px': '20px',
        '22-px': '22px',
        '24-px': '24px',
        '26-px': '26px',
        '28-px': '28px',
        '30-px': '30px',
        '32-px': '32px',
        '34-px': '34px',
        '36-px': '36px',
        '38-px': '38px',
        '40-px': '40px',
        '42-px': '42px',
        '44-px': '44px',
        '48-px': '48px',
        '56-px': '56px',
        '80-px': '80px',
      },
      margin: {
        '0-px': '0px',
        '2-px': '2px',
        '4-px': '4px',
        '6-px': '6px',
        '8-px': '8px',
        '10-px': '10px',
        '12-px': '12px',
        '14-px': '14px',
        '16-px': '16px',
        '20-px': '20px',
        '22-px': '22px',
        '24-px': '24px',
        '26-px': '26px',
        '28-px': '28px',
        '30-px': '30px',
        '32-px': '32px',
        '34-px': '34px',
        '36-px': '36px',
        '38-px': '38px',
        '40-px': '40px',
        '48-px': '48px',
        '56-px': '56px',
        '80-px': '80px',
        '282-px': '282px'
      },
      height: {
        '1-px': '1px',
        '8-px': '8px',
        '10-px': '10px',
        '12-px': '12px',
        '14-px': '14px',
        '16-px': '16px',
        '18-px': '18px',
        '20-px': '20px',
        '24-px': '24px',
        '30-px': '30px',
        '36-px': '36px',
        '40-px': '40px',
        '42-px': '42px',
        '44-px': '44px',
        '48-px': '48px',
        '50-px': '50px',
        '56-px': '56px',
        '60-px': '60px',
        '64-px': '64px',
        '68-px': '68px',
        '74-px': '74px',
        '92-px': '92px',
        '100-px': '100px',
        '192-px': '192px',
        '282-px': '282px',
        '756-px': '756px',
        '66-vh': '66vh',
        '72-vh': '72vh'
      },
      width: {
        '1-px': '1px',
        '8-px': '8px',
        '10-px': '10px',
        '12-px': '12px',
        '14-px': '14px',
        '16-px': '16px',
        '18-px': '18px',
        '20-px': '20px',
        '24-px': '24px',
        '30-px': '30px',
        '36-px': '36px',
        '40-px': '40px',
        '42-px': '42px',
        '48-px': '48px',
        '50-px': '50px',
        '56-px': '56px',
        '60-px': '60px',
        '64-px': '64px',
        '70-px': '70px',
        '92-px': '92px',
        '100-px': '100px',
        '160-px': '160px',
        '246-px': '246px',
        '302-px': '302px',
        '354-px': '354px',
        '420-px': '420px',
        '466-px': '466px',
        '100-vh': '100vh'
      },
      borderRadius: {
        '4-px': '4px',
        '6-px': '6px',
        '8-px': '8px',
        '10-px': '10px',
        '12-px': '12px',
        '16-px': '16px',
        '20-px': '20px',
        '48-px': '48px'
      },
      borderWidth: {
        '0.5-px': '0.5px',
        '1-px': '1px',
        '2-px': '2px',
        '4-px': '4px',
        '6-px': '6px',
        '8-px': '8px',
        '12-px': '12px',
      },
      borderColor: {
        'table-header': customColors['table-header'],
      },
      backgroundImage: {
        'auth-traingle-left': 'linear-gradient(-83.33deg, #e1eeffba 26.8%, #ffe4fbde 97.18%)',
        'auth-traingle-right': 'linear-gradient(270.33deg, #E1EEFF 26.8%, #FFE4FB 97.18%)',
        'btn-cta': 'linear-gradient(162.38deg, #FF3366 3.01%, #FE5196 111.5%)',
        'partner-bg-1': 'linear-gradient(97.33deg, #E1EEFF 26.8%, #FFE4FB 97.18%)',
        'partner-bg-2': 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%)'
      },
      fontFamily: {
        'aktiv-grotesk': '"aktiv-grotesk", sans-serif'
      },
      boxShadow: {
        'btn-cta-shadow': '0px 4px 4px rgba(44, 48, 78, 0.1)',
        'partner-card': '0px 2px 10px rgba(44, 48, 78, 0.1)',
        'expense-stat-card': '0px 4px 4px rgba(0, 0, 0, 0.05);',
        'help-section': '0px 8px 40px rgba(215, 215, 215, 0.73)'
      },
      screens: {
        'max-xl': {'max': '1440px'}
      }
    },
  },
  plugins: [],
}
