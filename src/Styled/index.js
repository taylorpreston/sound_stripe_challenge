import React from 'react'
import styled from 'styled-components'

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: ${props => props.flexDirection};
  justify-content: ${props => props.justifyContent};
  align-content: ${props => props.alignContent};
  align-items: ${props => props.alignItems};
  flex-grow: ${props => props.flexGrow};
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  height: ${props => props.height}; 
`;

export const ShadowWrapper = FlexWrapper.extend`
  background: #f7fdff;
  -webkit-box-shadow: 5px 18px 98px -14px rgba(0,0,0,0.82);
  -moz-box-shadow: 5px 18px 98px -14px rgba(0,0,0,0.82);
  box-shadow: 5px 18px 98px -14px rgba(0,0,0,0.82);
  img{
    height: 100%;
    width: auto;
    margin-right: 12px;
  }
  p{
    text-align: left;
  }
`;
