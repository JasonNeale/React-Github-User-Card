// Package imports
import React from 'react'
import axios from 'axios'
import { Card, Icon } from 'semantic-ui-react'
import { Route, Link } from 'react-router-dom'

// File imports

// Component imports
import FollowersComp from './Comp-Followers'


class Home extends React.Component {

    constructor() {
        super()
        this.state = {
            ghUserData: [],
            ghUserDataFollowers: []
        }
    }

    componentDidMount() {
        axios
            .get('https://api.github.com/users/JasonNeale')
            .then(res => {
                this.setState({ ghUserData: res.data })
                
                axios
                    .get('https://api.github.com/users/JasonNeale/followers')
                    .then(res => {
                        this.setState({ ghUserDataFollowers: res.data})
                    })
                    .catch(err => console.error(err))
            })
            .catch(err => console.error(err))
    }

    checkRoute(e) {

    }

    render() {
        
        return (
            <div>
                <Card.Group centered itemsPerRow={4}>
                    <Card
                        key={this.state.ghUserData.id}
                        image={this.state.ghUserData.avatar_url}
                        header={this.state.ghUserData.name}
                        meta={this.state.ghUserData.login}
                        description={(
                            <span>
                                <hr />
                                <p>
                                    [<a target="_blank" rel="noopener noreferrer" href={this.state.ghUserData.html_url}>Profile</a>] - 
                                    [<a target="_blank" rel="noopener noreferrer" href={`https://github.com/${this.state.ghUserData.login}?tab=repositories`}>Repos</a>] -  
                                    [<a target="_blank" rel="noopener noreferrer" href={`https://gist.github.com/${this.state.ghUserData.login}`}>Gists</a>]
                                </p>
                            </span>
                        )}
                        extra={(
                            <span>
                                <Icon name="user" /> <Link to="/followers">
                                    {`View Followers (${this.state.ghUserDataFollowers.length})`}
                                </Link>
                            </span>
                        )}
                    />
                </Card.Group>
                <br />
                <Route path="/followers" render={renderProps => {
                        return <FollowersComp {...renderProps} followers={this.state.ghUserDataFollowers} />
                    }}
                />
            </div>
        )
    }
}

export default Home