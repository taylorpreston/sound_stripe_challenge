import React, { Component } from 'react';
import { http } from "../http";
import { FlexWrapper, ShadowWrapper} from "../Styled";

class Songs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    }
  }

  componentWillMount() {
    http('/artists/40/songs')
      .then(d => {
          this.setState({
            data: d.data
          })
        }
      );
  }

  displayTag(tagArray, tagColumn){
    if(tagArray && tagArray.length){
      return(
        <FlexWrapper padding='4px 2px' margin='8px 0px'>
          <span>{tagColumn}:</span>
          <span>{tagArray.join(" ")}</span>
        </FlexWrapper>
      )
    }
  }

  songInfo({bpm, description, genere_tags, insturment_tags, key, mood_tags, pace_tags, primary_artist_info, title}, i) {
    return (
      <ShadowWrapper
        key={i}
        height='220px'
        width="100%"
        margin='12px 12px'
        flexGrow='1'
        >
        <img src={primary_artist_info.pic.url}/>
        <FlexWrapper alignItems="flex-start" flexDirection='column' height='100%' padding="0px 12px 24px">
          <h2>{title}</h2>
          <p>
            {description}
          </p>
            {this.displayTag(genere_tags, 'Genere')}
            {this.displayTag(insturment_tags, "Instrument")}
            {this.displayTag(mood_tags, "Mood")}
            {this.displayTag(pace_tags, 'Pace')}
        </FlexWrapper>
      </ShadowWrapper>
    )
  }


  render(){
    const { data } = this.state;

    if(!data || Object.keys(data).length === 0){
      return<div> Loading </div>
    }

    console.log('************', data);
    return (
      <FlexWrapper flexDirection='column'>
        {data.map((d, i) => (this.songInfo(d.attributes)))}
      </FlexWrapper>
    );
  }
}

export default Songs;