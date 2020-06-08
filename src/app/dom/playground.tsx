import React from 'react'
import { useSelector } from 'react-redux'
import {
  DomActionButtons,
  DomCameraWidget,
  DomSelectionBox,
  DomSidebar,
  getCurrentSpecId,
  getPartsEntities,
  GlScene,
  useApp,
} from 'src'
import { Box } from 'theme-ui'

export function DomApp() {
  useApp()

  const parts = useSelector(getPartsEntities)
  const specId = useSelector(getCurrentSpecId)

  if (parts == null || specId == null) return null

  return (
    <Container>
      <GlScene />
      <DomSidebar />
      <DomActionButtons />
      <DomSelectionBox />
      <DomCameraWidget />
    </Container>
  )
}

interface ContainerProps extends React.ComponentProps<typeof Box> {}

const Container = (props: ContainerProps) => (
  <Box
    sx={{
      background: 'white',
      margin: '0',
      padding: '0',
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      userSelect: 'none',
    }}
    {...props}
  />
)
