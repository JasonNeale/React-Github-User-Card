// Package imports
import React from 'react'
import { Card, Icon, Header } from 'semantic-ui-react'

// File imports

// Component imports


function Followers({ followers }) {

    return (
        <div>
            <hr />
            <Header as="h3">My Followers:</Header>
            <Card.Group centered itemsPerRow={6}>
                {followers.map(item => {
                    return (
                        <Card
                            key={item.id}
                            image={item.avatar_url}
                            header={item.name}
                            meta={item.login}
                            description={(
                                <span>
                                    <hr />
                                    <p>
                                        [<a target="_blank" rel="noopener noreferrer" href={item.html_url}>Profile</a>] -
                                        [<a target="_blank" rel="noopener noreferrer" href={`https://github.com/${item.login}?tab=repositories`}>Repos</a>] -
                                        [<a target="_blank" rel="noopener noreferrer" href={`https://gist.github.com/${item.login}`}>Gists</a>]
                                    </p>
                                </span>
                            )}
                            extra={(
                                <span>
                                    <Icon name="user" /> <a target="_blank" rel="noopener noreferrer" href={`https://github.com/${item.login}?tab=followers`}>
                                        {`Followers`}
                                    </a>
                                </span>
                            )}
                        />
                    )
                })
                }
            </Card.Group>
        </div>
    )
}

export default Followers