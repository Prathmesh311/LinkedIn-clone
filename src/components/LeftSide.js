import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';


function LeftSide(props) {
    return (
        <Container>
            <ArtCard>
                <Userinfo>
                    <CardBackground />
                    <a>
                        <Photo />
                        <Link>Welcome, {props.user ? props.user.displayName : 'there'}!</Link>
                    </a>
                    <a>
                        <AddPhotoText>Add a photo</AddPhotoText>
                    </a>
                </Userinfo>
                <Widget>
                    <a>
                        <div>
                            <span>Connections</span>
                            <span>Grow your network</span>
                        </div>
                        <img src='images/widget-icon.svg'/>
                    </a>
                </Widget>
                <Item>
                    <span>
                        <img src='images/item-icon.svg' />
                        My Items
                    </span>
                </Item>
            </ArtCard>
            <CommunityCard>
                <a>
                    <span>Groups</span>
                </a>
                <a>
                    <span>
                        Events
                        <img src='images/plus-icon.svg' />
                    </span>
                </a>
                <a>
                    <span>follow Hashtags</span>
                </a>
                <a>
                    <span>Discover more</span>
                </a>
            </CommunityCard>
        </Container>
    )
}

const Container = styled.div `
    grid-area: LeftSide;
`;

const ArtCard = styled.div`
  text-align: center;
  overflow: hidden;
  font-weight: 500;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  transition: box-shadow 83ms;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const Userinfo = styled.div ` 
    border-bottom: 1px solid rgba(0,0,0,0.15);
    padding: 12px 12px 16px;
`;

const CardBackground = styled.div `
    background: url('images/card-bg.svg');
    background-size: 462px;
    height: 54px;
    background-position: center;
    margin: -12px -12px 0;
`;

const Photo = styled.div `
    background-image: url('images/photo.svg');
    width: 72px;
    height: 72px;
    background-color: white;
    background-position: center;
    background-size: 60%;
    background-repeat: no-repeat;
    margin: -38px auto 12px;
    border-radius: 50%;
    border: 2px solid white;
    box-sizing: border-box;
    background-clip: content-box;
`;

const Link = styled.div `
    font-size: 16px;
    line-height: 1.5;
    font-weight: 600;
    color: rgba(0,0,0,0.9);
`;

const AddPhotoText = styled.div `
    color: #0a66c2;
    font-weight: 400;
    line-height: 1.33;
    margin-top: 4px;
    font-size: 12px;
`;

const Widget = styled.div ` 
    border-bottom: 1px solid rgba(0,0,0,0.15);
    padding-top: 12px;
    padding-bottom: 12px;

    & > a{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 4px 12px;

        &:hover{
            background-color: rgba(0,0,0,0.08);
        }

        div{
            display: flex;
            flex-direction: column;
            text-align: left;
            span {
                font-size: 12px;
                line-height: 1.33;

                &:first-child{
                    color: rgba(0,0,0,0.6);
                }

                &:nth-child(2){
                    color: rgba(0,0,0,1);
                }
            }
        }
    }
`;

const Item = styled.div ` 
    border-color: rgba(0,0,0,0.8);
    text-align: center;
    padding: 12px;
    font-size: 12px;
    display: block;

    span{
        display: flex;
        align-items: center;
        color: rgba(0,0,0,1);

        svg{
            color: rgba(0,0,0,0.6);
        }
    }

    &:hover{
        background-color: rgba(0,0,0,0.08);
    }
`;

const CommunityCard = styled(ArtCard)`
  padding: 8px 0 0;
  text-align: left;
  display: flex;
  flex-direction: column;
  a {
    color: black;
    padding: 4px 12px 4px 12px;
    font-size: 12px;
    &:hover {
      color: #0a66c2;
    }
    span {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-weight: 600;
    }
    &:last-child {
      color: rgba(0, 0, 0, 0.6);
      text-decoration: none;
      border-top: 1px solid #d6cec2;
      padding: 12px;
      &:hover {
        background-color: rgba(0, 0, 0, 0.08);
      }
    }
  }
`;

const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    };
};

export default connect(mapStateToProps)(LeftSide);