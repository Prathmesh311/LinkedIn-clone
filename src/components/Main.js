import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import { connect } from "react-redux";
import PostModal from "./PostModal";
import { getArticlesAPI } from "../actions/index";

function Main(props) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    props.getArticles();
    //console.log(props.user);
    console.log(props.articles);
  }, []);

  const handleModal = (event) => {
    //changed
    event.preventDefault();

    setShowModal(!showModal);
  };

  console.log(props.articles);
  return (
    <>
      {props.articles.length === 0 ? (
        <p>There are no posts</p>
      ) : (
        <Container>
          <ShareBox>
            <div>
              {props.user && props.user.photoURL ? (
                <img src={props.user.photoURL} />
              ) : (
                <img src="/images/user.svg" alt="" />
              )}
              <button
                onClick={handleModal}
                disabled={props.loading ? true : false}
              >
                Start a post
              </button>{" "}
              {/*changed*/}
            </div>
            <div>
              <button>
                <img src="images/photo-icon.svg" />
                <span>Photo</span>
              </button>
              <button>
                <img src="images/video-icon.svg" />
                <span>Video</span>
              </button>
              <button>
                <img src="images/event-icon.svg" />
                <span>Event</span>
              </button>
              <button>
                <img src="images/article-icon.svg" />
                <span>Write article</span>
              </button>
            </div>
          </ShareBox>
          <Content>
            {props.loading && <img src="./images/loading-buffering.gif" />}

            {props.articles.length != 0 &&
              props.articles.map((article, key) => (
                <Article key={key}>
                  <SharedActor>
                    <a>
                      <img src={article.actor.image} alt="" />
                      <div>
                        <span>{article.actor.title}</span>
                        <span>{article.actor.description}</span>
                        <span>
                          {article.actor.date.toDate().toLocaleDateString()}
                        </span>
                      </div>
                    </a>

                    <button>
                      <img src="images/ellipsis.png" alt="" />
                    </button>
                  </SharedActor>

                  <Description>{article.description}</Description>

                  <SharedImg>
                    <a>
                      {!article.sharedImg && article.video ? (
                        <ReactPlayer width={"100%"} url={article.video} />
                      ) : (
                        article.sharedImg && <img src={article.sharedImg} />
                      )}
                    </a>
                  </SharedImg>
                  <SocialCounts>
                    <li>
                      <button>
                        <img src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb" />
                        <img src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f" />
                        <span>75</span>
                      </button>
                    </li>
                    <li>
                      <a>2 comments</a>
                    </li>
                  </SocialCounts>
                  <SocialActions>
                    <button>
                      <img src="images/like-icon.svg" />
                      <span>Like</span>
                    </button>
                    <button>
                      <img src="images/comments-icon.svg" />
                      <span>Comments</span>
                    </button>
                    <button>
                      <img src="images/share-icon.svg" />
                      <span>hare</span>
                    </button>
                    <button>
                      <img src="images/send-icon.svg" />
                      <span>Like</span>
                    </button>
                  </SocialActions>
                </Article>
              ))}
          </Content>
          {showModal && <PostModal handleModal={handleModal} />} {/*changed*/}
        </Container>
      )}
    </>
  );
}

const Container = styled.div`
  grid-area: Main;
  margin-bottom: 15px;
`;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;

  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
    }

    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0px 16px;
      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button {
        margin: 4px 0px;
        flex-grow: 1;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-radius: 35px;
        background-color: white;
        text-align: left;
      }
    }

    &:nth-child(2) {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      padding-bottom: 4px;

      button {
        img {
          margin: 0 4px 0 -2px;
        }
        span {
          color: #70b5f9;
        }
      }
    }
  }
`;

const Article = styled(CommonCard)`
  margin: 0 0 8px;
  overflow: visible;
`;

const SharedActor = styled.div`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;
  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;
    img {
      width: 48px;
      height: 48px;
    }
    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;
      span {
        text-align: left;
        &:first-child {
          font-size: 14px;
          font-weight: 700;
          color: rgba(0, 0, 0, 1);
        }
        &:nth-child(n + 1) {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }
  button {
    position: absolute;
    right: 12px;
    outline: none;
    border: none;
    top: 0;
    background: transparent;
  }
`;

const Description = styled.div`
  padding: 0 16px;
  font-size: 14px;
  text-align: left;
  color: rgba(0, 0, 0, 0.9);
  overflow: hidden;
`;

const SharedImg = styled.div`
  margin-top: 8px;
  width: 100%;
  position: relative;
  display: block;
  background-color: #f9fafb;

  img {
    object-fit: contain;
    height: 100%;
    width: 100%;
  }
`;

const SocialCounts = styled.ul`
  line-height: 100%;
  display: flex;
  align-items: flex-start;
  overflow: auto;
  list-style: none;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5df;
  li {
    margin-right: 5px;
    font-size: 12px;
    button {
      display: flex;
      border: none;
      background: #fff;
    }
  }
  img {
    width: 18px;
  }
`;

const SocialActions = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin: 0;
  min-height: 40px;
  padding: 4px 8px;
  button {
    display: inline-flex;
    align-items: center;
    padding: 8px;
    color: #0a66c2;
    border: none;
    background-color: #fff;

    @media (min-width: 768px) {
      span {
        margin-left: 8px;
      }
    }
  }
`;

const Content = styled.div`
  text-align: center;
  & > img {
    width: 30px;
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
    articles: state.articleState.articles,
    loading: state.articleState.loading,
  };
};

const mapDispatchToProps = (dispatch) => ({
  //signOut: () => dispatch(signOutAPI()),
  getArticles: () => dispatch(getArticlesAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
