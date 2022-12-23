import React from 'react'
import { styled } from '@mui/system'

// type Props = {
// 	spacing?: number
// 	gap?: number
// }

// const View = styled('div')<Pick<Props, 'spacing' | 'gap'>>`
// 	height: ${({ spacing }) => (spacing || 1) * 16}px;
// 	width: ${({ gap }) => (gap || 0) * 16}px;
// `

export const Gutter = (props) => {
	return (
        <View><Text>This is a gutter component.</Text></View>
    )
}
