// BASE IMPORTS
import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import Paper from "@material-ui/core/Paper"

// THEME
import ThemeWrapper from "../theme/themewrapper"

// COMPONENTS

const useStyles = makeStyles(theme => ({
  banner: {
    height: "100vh",
    width: "100vw",
    margin: "auto 0",
    position: "absolute",
    // marginBottom: theme.spacing(8),
  },
  bannerDivider: {
    height: "100vh",
    width: "100%",
    margin: "auto 0",
    padding: "0",
    position: "relative",
    backgroundSize: "fit",
  },
  bannerDividerMiddle: {
    height: "100vh",
    width: "100%",
    margin: "auto 0",
    padding: "0",
    marginBottom: theme.spacing(8),
    position: "relative",
    backgroundSize: "cover",
  },
  noMargin: {
    margin: "auto 0",
    width: "100%",
  },
  paper: {
    padding: theme.spacing(3),
    paddingBottom: theme.spacing(5)
  }
}))

const BannerTitle = styled.div`
  font-size: 6rem;
  font-weight: bold;
  color: white;
  opacity: 0.8;
  font-family: "Roboto";
`

const TitleText = styled.h1`
  font-size: 6rem;
  font-weight: bold;
  color: green;
  opacity: 1;
  font-family: "Roboto";
  text-align: center;
  margin-top: 0;
`

const Paragraph = styled.p`
  font-size: 1.1rem;
  font-family: "Roboto";
  text-align: center;
  max-width: 700px;
  min-width: 300px;
  text-align: center;
  margin: 0 auto;
`

const BannerContent = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const FooterContainer = styled.div`
  height: 200px;
  width: 100%;
  background-color: rgba(0, 0, 0, 1);
  bottom: 0;
  position: relative;
`

export default ({ data }) => {
  const classes = useStyles()
  const coilPopImg = data.CoilPop.childImageSharp.fluid
  const coilImg = data.Coils.childImageSharp.fluid
  const tankImg = data.Tank.childImageSharp.fluid
  console.log(data)

  return (
    <ThemeWrapper>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <style>{"body { background-color: white; }"}</style>
      </Helmet>
      <BackgroundImage
        Tag="section"
        className={classes.banner}
        fluid={coilPopImg}
      >
        <BannerContent>
          <BannerTitle>
            <span>Shadetree Vapes</span>
          </BannerTitle>
        </BannerContent>
      </BackgroundImage>
      <Paper className={classes.paper}>
        <TitleText>Your Hometown Vape Shop.</TitleText>
        <div>
          <Grid className={classes.noMargin} container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Paragraph>
                Starting off in a mall kiosque, we have very humble begennings.
                Hard work, careful market research, low prices, and great
                customer service has not only kept us in business, but kept our
                business thriving. Come in and see for yourself the superior
                shopping experience that is Shadetree Vapes!!!
              </Paragraph>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Paragraph>
                We keep the latest and greatest juices and mods in stock. Top
                brands such as Smok, Kanger, Geek Vape, Voopoo, Eleaf, Aspire, &
                many more make up the mod selection. Brands such as Kilo Sour
                Series, Hometown Hero, Forge, Cyclops, & Southern Tradition make
                up our large e-juice selection.
              </Paragraph>
            </Grid>
          </Grid>
        </div>
      </Paper>
      <BackgroundImage
        Tag="section"
        className={classes.bannerDividerMiddle}
        fluid={coilImg}
        style={{
          // Defaults are overwrite-able by setting one or each of the following:
          backgroundSize: "fit",
          backgroundPosition: "right",
        }}
      ></BackgroundImage>
      <BackgroundImage
        Tag="section"
        className={classes.bannerDivider}
        fluid={tankImg}
      ></BackgroundImage>
      <FooterContainer></FooterContainer>
    </ThemeWrapper>
  )
}

export const query = graphql`
  query Image {
    CoilPop: file(relativePath: { eq: "coil-pop.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Coils: file(relativePath: { eq: "coils2.jpg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Tank: file(relativePath: { eq: "tank.jpg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
