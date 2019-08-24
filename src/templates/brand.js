import React from "react"
import { graphql, Link } from "gatsby"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"

import BackgroundImage from "gatsby-background-image"

import ThemeWrapper from "../theme/themewrapper"

const useStyles = makeStyles(theme => ({
  card: {
    display: "flex",
    flex: "1 0 auto",
    maxWidth: 580,
    minHeight: 210,
    transition: "transform 1s",
    "&:hover": {
      transition: "transform 1s",
      transform: "translateY(-10px)",
    },
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
    backgroundColor: "lightgrey",
    maxWidth: 140,
  },
  content: {
    justifyContent: "center",
    flex: "1 0 auto",
    textAlign: "center",
    fontSize: "1.3rem",
  },
  link: {
    fontWeight: "bold",
    color: "black",
    textDecoration: "none",
    fontSize: "1.4rem",
  },
  titleBG: {
    backgroundColor: "white",
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
  const brand = data.contentfulVapeJuiceBrand
  const brandImg = data.contentfulVapeJuiceBrand.brandImage.fluid
  const juices = data.contentfulVapeJuiceBrand.vapejuice
  const classes = useStyles()

  return (
    <ThemeWrapper>
      <BackgroundImage
        style={{ backgroundPosition: "right", backgroundSize: "contain" }}
        fluid={brandImg}
        className={classes.titleBG}
      >
        <Typography
          className={classes.titleText}
          variant="h3"
          component="div"
          gutterBottom
        >
          {brand.brandName}
        </Typography>
      </BackgroundImage>
      <Container className={classes.juiceContainer} maxWidth="xl">
        <Grid container justify="center" spacing={3}>
          {/* map out the data from the juices */}
          {juices.map(juice => (
            <Grid key={juice.fields.slug} item xs={12} sm={12} md={6} lg={4}>
              {console.log("inside juices,map, juice is: ", juice)}
              <Card className={classes.card}>
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <h3 key={juice.id}>
                      <Link className={classes.link} to={juice.fields.slug}>
                        {juice.juiceName}
                      </Link>
                    </h3>
                  </CardContent>
                </div>
                <Link className={classes.cover} to={juice.fields.slug}>
                  <CardMedia
                    className={classes.cover}
                    image={juice.juiceImage.fixed.src}
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

export const query = graphql`
  query($id: String!) {
    contentfulVapeJuiceBrand(fields: { id: { eq: $id } }) {
      brandName
      fields {
        slug
        id
      }
      brandImage {
        fluid(quality: 90) {
          ...GatsbyContentfulFluid
        }
      }
      slug
      vapejuice {
        juiceName
        juicePrice
        juiceRatio
        slug
        fields {
          slug
          id
        }
        juiceImage {
          fixed(height: 500, width: 500) {
            src
          }
        }
      }
    }
  }
`
