import React, { Component } from 'react'
import { Grid, Row, Col, Thumbnail, Button, Image } from 'react-bootstrap'

// Hardcoded users for All Profiles page
const users = [
  {
    id: 1,
    firstName: 'Jane',
    lastName: 'Doe',
  },
  {
    id: 2,
    firstName: 'Joe',
    lastName: 'Somebody',
  },
  {
    id: 3,
    firstName: 'Jack',
    lastName: 'Doe',
  },
  {
    id: 4,
    firstName: 'Sally',
    lastName: 'Doe',
  }
]

class AllProfilesContainer extends Component {
  render() {

    // ADD MAPPING FOR ALL USERS TO DYNAMICALLY CREATE CARDS HERE

    return (
      <Grid>
        <Row>

          {/* ADD ALL PROFILES CREATED ABOVE HERE */}
          <Col xs={6} md={4} lg={3}>
          
          <Image src="assets/images/dog-placeholder.jpg" Thumbnail />
          <h3>FirstName LastName</h3>
          <p>
            <Button bsStyle="primary" onClick={() => this.props.histry('/?users=' +1)}>
            </Button>
          </p>
          
          </Col>
          
        </Row>
      </Grid>
    )
  }
}

export default AllProfilesContainer