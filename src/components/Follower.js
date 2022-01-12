import React from 'react';
import PropTypes from 'prop-types';




class Follower extends React.Component {

    render() {
        const {follower} = this.props
        return(
            <div>
                <img src={follower.avatar_url}/>
                <a href={follower.html_url}>{follower.login}</a>
            </div>

        )
    }
}
Follower.propTypes = {avatar_url: PropTypes.string, html_ur: PropTypes.string, login: PropTypes.string }
export default Follower;