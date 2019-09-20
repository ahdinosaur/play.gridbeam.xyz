import React, { useMemo } from 'react'
import csgToSimplicialComplex from 'csg-to-mesh'

import SimplicialComplexGeometry from './complex'

export default CsgGeometry

function CsgGeometry (props) {
  const { csg, ...forwardProps } = props

  const simplicialComplex = useMemo(() => {
    return csgToSimplicialComplex(csg)
  }, [csg])

  return (
    <SimplicialComplexGeometry
      simplicialComplex={simplicialComplex}
      {...forwardProps}
    />
  )
}
