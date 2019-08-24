import React from 'react'

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  layout: {
    marginTop: 80,
  },
}))

export default function layout({children}) {
  const classes = useStyles()

  return (
    <div className={classes.layout}>
      {children}
    </div>
  )
}
