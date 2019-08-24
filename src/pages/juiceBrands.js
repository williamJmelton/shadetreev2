import React from "react"
import { graphql, Link } from "gatsby"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import BackgroundImage from "gatsby-background-image"

import green from '@material-ui/core/colors/green'


import ThemeWrapper from '../theme/themewrapper'


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
    backgroundColor: green[400],
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

const juiceBrands = ({ data }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles()
  const VapeChecker = data.VapeChecker.childImageSharp.fluid

  return (
    <ThemeWrapper>
      <BackgroundImage fluid={VapeChecker} className={classes.titleBG}>
        <Typography
          className={classes.titleText}
          variant="h3"
          component="div"
          gutterBottom
        >
          Juice Brands
        </Typography>
      </BackgroundImage>
      <Container className={classes.juiceContainer} maxWidth="xl">
        <Grid container justify="center" spacing={3}>
          {data.allContentfulVapeJuiceBrand.edges.map(brand => (
            <Grid key={brand.slug} item xs={12} sm={12} md={6} lg={3}>
              <Card className={classes.card}>
              <div className={classes.details}>
                <CardContent className={classes.details}>
                  <h3 key={brand.id}>
                    <Link className={classes.link} to={brand.node.fields.slug}>
                      {brand.node.brandName}
                    </Link>
                  </h3>
                </CardContent>
              </div>
              <Link className={classes.cover} to={brand.node.fields.slug}>
                <CardMedia
                  className={classes.cover}
                  image={brand.node.brandImage.fixed.src}
                  title="Live from space album cover"
                />
              </Link>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeWrapper>
  )
}

export default juiceBrands

export const query = graphql`
  query JuiceBrands {
    allContentfulVapeJuiceBrand {
      edges {
        node {
          id
          brandName
          fields {
            slug
          }
          brandImage {
            fixed(width: 200, height: 200) {
              src
            }
          }
        }
      }
    }
    VapeChecker: file(relativePath: { eq: "vape-checker.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
