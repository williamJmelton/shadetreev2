import React from "react"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Typography from "@material-ui/core/Typography"
import styled from "styled-components"
import { makeStyles } from '@material-ui/core/styles'

import ThemeWrapper from "../theme/themewrapper"

const useStyles = makeStyles(theme => ({
  card: {
    display: "flex",
    flex: "1 0 auto",
    flexDirection: 'column',
    maxWidth: 580,
    minHeight: 210,
    transition: 'transform 1s',
    '&:hover': {
      transition: 'transform 1s',
      transform: 'translateY(-10px)'
    }
  },
  cover: {
    height: 200,
    width: 200,
    margin: "0 auto",
  },
  centeredContainer: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    justifyItems: "center",
    alignContent: "center",
    // backgroundColor: green[400],
    textAlign: 'center',
    // maxWidth: 140,
  },
  content: {
    justifyContent: "center",
    flex: "1 0 auto",
    textAlign: "center",
    fontSize: "1.3rem",
  },
  link: {
    fontWeight: "bold",
    color: "white",
    textDecoration: "none",
    fontSize: "1.8rem",
    textAlign: 'center',
    margin: '0 auto'
  },
  titleBG: {
    backgroundColor: "green",
    padding: theme.spacing(2),
    height: theme.spacing(40),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    [theme.breakpoints.up("md")]: {
      right: "23%",
      position: "relative",
      fontSize: "6rem",
      color: "white"
    },
  },
  cardImg: {
    margin: "0 auto",
  },
  juiceContainer: {
    marginTop: theme.spacing(4),
    display: "flex",
    alignContent: "center",
  },
}))

export default ({ data }) => {
  const juice = data.contentfulVapeJuice
  const juiceImg = data.contentfulVapeJuice.juiceImage.fluid
  const classes = useStyles

  return (
    <ThemeWrapper>
      <BackgroundImage className={classes.titleBG} fluid={juiceImg}>
        <Typography
          className={classes.titleText}
          variant="h3"
          component="div"
          gutterBottom
        >
          Juice Brands
        </Typography>
      </BackgroundImage>
    </ThemeWrapper>
  )
}

export const query = graphql`
  query($id: String!) {
    contentfulVapeJuice(fields: { id: { eq: $id } }) {
      juiceName
      juiceImage {
        fluid(quality: 90) {
          ...GatsbyContentfulFluid
        }
      }
      description
      juiceRatio
      juicePrice
    }
  }
`
