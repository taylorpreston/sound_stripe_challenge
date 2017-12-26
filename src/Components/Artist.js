import React, { Component } from 'react';
import { http } from "../http";
import { FlexWrapper } from "../Styled";

class Artist extends Component {
  constructor(props){
    super(props);
    this.state={
      data: {}
    }
  }

  componentWillMount(){
    http('/artists/40')
      .then( d => {
        this.setState({
          data: d.data
        })
      }
    );
  }

  artistBio({bio, name, song_count}) {
    return(
      <div>
        <h1>{name}</h1>
        <div>{song_count}</div>
        <p>
          {bio}
        </p>
      </div>
    )
  };


  render() {
    const { data } = this.state;

    if(!data || Object.keys(data).length === 0){
      return<div> Loading </div>
    }
    return (
      <FlexWrapper padding='0px 80px'>
        {this.artistBio(data.attributes)}
      </FlexWrapper>
    );
  }
}

export default Artist;