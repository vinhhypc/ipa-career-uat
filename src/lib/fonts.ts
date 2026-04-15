import localFont from 'next/font/local';

export const plusJakarta = localFont({
  src: [
    { path: '../fonts/PlusJakartaSans-ExtraLight.ttf', weight: '200', style: 'normal' },
    { path: '../fonts/PlusJakartaSans-ExtraLightItalic.ttf', weight: '200', style: 'italic' },
    { path: '../fonts/PlusJakartaSans-Light.ttf', weight: '300', style: 'normal' },
    { path: '../fonts/PlusJakartaSans-LightItalic.ttf', weight: '300', style: 'italic' },
    { path: '../fonts/PlusJakartaSans-Regular.ttf', weight: '400', style: 'normal' },
    { path: '../fonts/PlusJakartaSans-Italic.ttf', weight: '400', style: 'italic' },
    { path: '../fonts/PlusJakartaSans-Medium.ttf', weight: '500', style: 'normal' },
    { path: '../fonts/PlusJakartaSans-MediumItalic.ttf', weight: '500', style: 'italic' },
    { path: '../fonts/PlusJakartaSans-SemiBold.ttf', weight: '600', style: 'normal' },
    { path: '../fonts/PlusJakartaSans-SemiBoldItalic.ttf', weight: '600', style: 'italic' },
    { path: '../fonts/PlusJakartaSans-Bold.ttf', weight: '700', style: 'normal' },
    { path: '../fonts/PlusJakartaSans-BoldItalic.ttf', weight: '700', style: 'italic' },
    { path: '../fonts/PlusJakartaSans-ExtraBold.ttf', weight: '800', style: 'normal' },
    { path: '../fonts/PlusJakartaSans-ExtraBoldItalic.ttf', weight: '800', style: 'italic' },
  ],
  variable: '--font-plus-jakarta',
  display: 'swap',
});
