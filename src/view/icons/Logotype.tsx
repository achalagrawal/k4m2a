import Svg, {
  ClipPath,
  Defs,
  G,
  Path,
  type PathProps,
  Rect,
  type SvgProps,
} from 'react-native-svg'

import {usePalette} from '#/lib/hooks/usePalette'

const ratio = 210.357 / 535.428

export function Logotype({
  fill,
  ...rest
}: {fill?: PathProps['fill']} & SvgProps) {
  const pal = usePalette('default')
  // @ts-ignore it's fiiiiine
  const size = parseInt(rest.width || 32)
  const textFill = fill || pal.text.color
  const swooshFill = '#999999'

  return (
    <Svg
      fill="none"
      viewBox="0 0 535.428 210.357"
      {...rest}
      width={size}
      height={Number(size) * ratio}>
      <Defs>
        <ClipPath id="lcp1">
          <Rect width="65.989" height="95.181" />
        </ClipPath>
        <ClipPath id="lcp2">
          <Rect width="86.994" height="95.181" />
        </ClipPath>
        <ClipPath id="lcp3">
          <Rect width="58.785" height="95.181" />
        </ClipPath>
      </Defs>
      <G transform="translate(-853.932 -476.904)">
        {/* K */}
        <G transform="translate(853.932 477)">
          <Path
            fill={swooshFill}
            d="M87.938,70.6,3.156,29.252A3.807,3.807,0,0,1,2.569,21.9l63-21.692a3.807,3.807,0,1,1,2.479,7.2L13.938,26.039l77.339,37.72A3.808,3.808,0,1,1,87.938,70.6Z"
            transform="translate(0, 136.409)"
          />
          <Rect
            fill={textFill}
            width="6"
            height="209"
            rx="3"
            transform="translate(15.147, -0.096)"
          />
        </G>
        {/* A */}
        <G transform="translate(1263.12, 572.181)">
          <Path
            fill={swooshFill}
            d="M87.938,70.6,3.156,29.252A3.807,3.807,0,0,1,2.569,21.9l63-21.692a3.807,3.807,0,1,1,2.479,7.2L13.938,26.039l77.339,37.72A3.808,3.808,0,1,1,87.938,70.6Z"
            transform="matrix(0.438, 0.899, -0.899, 0.438, 63.805, 0)"
          />
          <Rect
            fill={textFill}
            width="5.711"
            height="129.446"
            rx="2.855"
            transform="matrix(0.446, 0.895, -0.895, 0.446, 123.691, 26.106)"
          />
        </G>
        {/* 4 */}
        <G transform="translate(966.384, 591.217)">
          <G clipPath="url(#lcp1)">
            <Path
              fill={textFill}
              d="M54.282,66.556V2.538A2.264,2.264,0,0,0,51.737,0H45.105a3.466,3.466,0,0,0-3.037,1.676L.928,65.129A5.81,5.81,0,0,0,0,68.225v6.752a2.289,2.289,0,0,0,2.538,2.545h40.03V92.644a2.261,2.261,0,0,0,2.538,2.538h6.632a2.264,2.264,0,0,0,2.545-2.538V77.522h9.169a2.264,2.264,0,0,0,2.538-2.545V69.094a2.258,2.258,0,0,0-2.538-2.538ZM42.568,18.777v47.78H12.515Z"
            />
          </G>
        </G>
        {/* M */}
        <G transform="translate(1065.371, 591.217)">
          <G clipPath="url(#lcp2)">
            <Path
              fill={textFill}
              d="M9.255,95.18A2.206,2.206,0,0,0,11.73,92.7V29.473L41.718,70.394a1.951,1.951,0,0,0,3.5,0L75.264,29.473V92.7a2.206,2.206,0,0,0,2.476,2.476h6.772A2.208,2.208,0,0,0,86.994,92.7V4.2c0-4.649-3.33-5.68-6.049-1.87L43.464,53.772,6.049,2.33C3.272-1.48,0-.449,0,4.2V92.7A2.209,2.209,0,0,0,2.484,95.18Z"
            />
          </G>
        </G>
        {/* 2 */}
        <G transform="translate(1185.299, 591.217)">
          <G clipPath="url(#lcp3)">
            <Path
              fill={textFill}
              d="M56.3,95.181a2.215,2.215,0,0,0,2.486-2.486v-5.83A2.2,2.2,0,0,0,56.3,84.438H21.879L40.517,62.1c10.38-12.386,18.09-20.762,18.09-33.873C58.607,11.831,45.734,0,29.4,0,14.835,0,4.758,8.923,1.361,22.64A2.11,2.11,0,0,0,3.24,25.49L9.619,26.7c1.516.244,2.426-.482,2.848-2,2.368-8.687,8.383-13.963,17.181-13.963A17.244,17.244,0,0,1,47.072,28.227c0,8.678-5.948,15.479-12.564,23.424L.695,92.088c-1.338,1.635-.673,3.093,1.392,3.093Z"
            />
          </G>
        </G>
      </G>
    </Svg>
  )
}
