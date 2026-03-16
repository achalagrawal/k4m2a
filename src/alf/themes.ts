import {
  createTheme,
  DEFAULT_PALETTE,
  DEFAULT_SUBDUED_PALETTE,
  invertPalette,
} from '@bsky.app/alf'

const GRAYSCALE_PALETTE = {
  ...DEFAULT_PALETTE,
  primary_25: '#F7F7F7',
  primary_50: '#EFEFEF',
  primary_100: '#E0E0E0',
  primary_200: '#BDBDBD',
  primary_300: '#9E9E9E',
  primary_400: '#757575',
  primary_500: '#1A1A1A',
  primary_600: '#111111',
  primary_700: '#0A0A0A',
  primary_800: '#060606',
  primary_900: '#030303',
  primary_950: '#020202',
  primary_975: '#010101',
}

const GRAYSCALE_DARK_PALETTE = {
  ...invertPalette(GRAYSCALE_PALETTE),
  primary_500: '#484848', // visible against dark bg, white text readable
  primary_600: '#383838', // hover state
}

const GRAYSCALE_SUBDUED_PALETTE = {
  ...DEFAULT_SUBDUED_PALETTE,
  primary_25: '#F7F7F7',
  primary_50: '#EFEFEF',
  primary_100: '#E0E0E0',
  primary_200: '#BDBDBD',
  primary_300: '#9E9E9E',
  primary_400: '#757575',
  primary_500: '#1A1A1A',
  primary_600: '#111111',
  primary_700: '#0A0A0A',
  primary_800: '#060606',
  primary_900: '#030303',
  primary_950: '#020202',
  primary_975: '#010101',
}

const light = createTheme({
  scheme: 'light',
  name: 'light',
  palette: GRAYSCALE_PALETTE,
})
const dark = createTheme({
  scheme: 'dark',
  name: 'dark',
  palette: GRAYSCALE_DARK_PALETTE,
  options: {shadowOpacity: 0.4},
})
const dim = createTheme({
  scheme: 'dark',
  name: 'dim',
  palette: {
    ...invertPalette(GRAYSCALE_SUBDUED_PALETTE),
    primary_500: '#484848',
    primary_600: '#383838',
  },
  options: {shadowOpacity: 0.4},
})

export const themes = {
  lightPalette: light.palette,
  darkPalette: dark.palette,
  dimPalette: dim.palette,
  light,
  dark,
  dim,
}

/**
 * @deprecated use ALF and access palette from `useTheme()`
 */
export const lightPalette = light.palette
/**
 * @deprecated use ALF and access palette from `useTheme()`
 */
export const darkPalette = dark.palette
/**
 * @deprecated use ALF and access palette from `useTheme()`
 */
export const dimPalette = dim.palette
/**
 * @deprecated use ALF and access theme from `useTheme()`
 */
export {light}
/**
 * @deprecated use ALF and access theme from `useTheme()`
 */
export {dark}
/**
 * @deprecated use ALF and access theme from `useTheme()`
 */
export {dim}
