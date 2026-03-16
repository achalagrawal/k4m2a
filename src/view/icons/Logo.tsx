import React from 'react'
import {type TextProps} from 'react-native'
import Svg, {
  G,
  Path,
  type PathProps,
  Rect,
  type SvgProps,
} from 'react-native-svg'
import {Image} from 'expo-image'

import {useKawaiiMode} from '#/state/preferences/kawaii'
import {flatten, useTheme} from '#/alf'

const ratio = 115.671 / 77.234

type Props = {
  fill?: PathProps['fill']
  style?: TextProps['style']
} & Omit<SvgProps, 'style'>

export const Logo = React.forwardRef(function LogoImpl(props: Props, ref) {
  const t = useTheme()
  const {fill, ...rest} = props
  const styles = flatten(props.style)
  const _fill = fill || styles?.color || t.atoms.text.color
  // @ts-ignore it's fiiiiine
  const size = parseInt(rest.width || 32, 10)

  const isKawaii = useKawaiiMode()

  if (isKawaii) {
    return (
      <Image
        source={
          size > 100
            ? require('../../../assets/kawaii.png')
            : require('../../../assets/kawaii_smol.png')
        }
        accessibilityLabel="K4M2A"
        accessibilityHint=""
        accessibilityIgnoresInvertColors
        style={[{height: size, aspectRatio: 1.4}]}
      />
    )
  }

  return (
    <Svg
      fill="none"
      // @ts-ignore it's fiiiiine
      ref={ref}
      viewBox="0 0 77.234 115.671"
      {...rest}
      style={[{width: size, height: size * ratio}, styles]}>
      <G>
        <G>
          <Path
            fill={_fill}
            d="M46.688,37.485,1.674,15.53a2.022,2.022,0,0,1-.31-3.9L34.81.111a2.021,2.021,0,1,1,1.316,3.822L7.4,13.824l41.06,20.027a2.022,2.022,0,1,1-1.772,3.634Z"
            transform="translate(0, 72.474)"
          />
          <Rect
            fill={_fill}
            width="3.186"
            height="110.963"
            rx="1.593"
            transform="translate(8.042, 0)"
          />
        </G>
        <G transform="translate(3.793, 48.721)">
          <Path
            fill={_fill}
            d="M51.16,41.074,1.835,17.017a2.216,2.216,0,0,1-.341-4.277L38.144.122A2.215,2.215,0,1,1,39.586,4.31L8.109,15.148,53.1,37.093a2.215,2.215,0,1,1-1.941,3.982Z"
            transform="matrix(0.438, 0.899, -0.899, 0.438, 37.119, 0)"
          />
          <Rect
            fill={_fill}
            width="3.322"
            height="75.307"
            rx="1.661"
            transform="matrix(0.446, 0.895, -0.895, 0.446, 71.959, 15.187)"
          />
        </G>
      </G>
    </Svg>
  )
})
