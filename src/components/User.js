import React from "react";

class User extends React.Component {
    render() {
        const {user} = this.props;
        return (
            <div>
                <img src={user.avatar_url}/>
                <a href={user.html_url}>{user.name}</a>
                <p>Total Repos: {user.public_repos}</p>
                <p>Followers: {user.followers}</p>

            </div>
        )
    }
}


export default User;