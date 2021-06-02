import React, { useState } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import { connect } from "react-redux";
import firebase from "firebase";
import { postArticleAPI } from "../actions/index";

function PostModal(props) {
  const [editorText, setEditorText] = useState("");
  const [sharedImage, setSharedImage] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [assetArea, setAssetArea] = useState("");

  const handleChange = (event) => {
    const image = event.target.files[0];

    if (image === "" || image === undefined) {
      alert(`not an image, file type is a ${typeof image}`);
      return;
    }

    setSharedImage(image);
  };

  const switchAssetArea = (area) => {
    setSharedImage("");
    setVideoLink("");
    setAssetArea(area);
  };

  const postArticle = (event) => {
    event.preventDefault();

    if (event.target != event.currentTarget) {
      return;
    }

    const payload = {
      video: videoLink,
      image: sharedImage,
      user: props.user,
      description: editorText,
      timeStamp: firebase.firestore.Timestamp.now(),
    };

    props.postArticle(payload);
    reset(event);
  };

  const reset = (event) => {
    setEditorText("");
    setSharedImage("");
    setVideoLink("");
    setAssetArea("");

    props.handleModal(event);
  };

  return (
    <Container>
      <Content>
        <Header>
          <h2>Create a post</h2>
          <img
            src="images/close-icon.svg"
            onClick={(event) => reset(event)}
          />{" "}
          {/*changed*/}
        </Header>
        <SharedContent>
          <UserInfo>
            {props.user.photoURL ? (
              <img src={props.user.photoURL} />
            ) : (
              <img src="/images/user.svg" alt="" />
            )}
            <span>{props.user.displayName}</span>
          </UserInfo>
          <Editor>
            <textarea
              value={editorText}
              onChange={(e) => setEditorText(e.target.value)}
              placeholder="What do you want to talk about?"
              autoFocus={true}
            />
            {assetArea === "image" ? (
              <UploadImage>
                <input
                  type="file"
                  accept="image/jpeg image/png image/gif image/jpg"
                  name="image"
                  id="file"
                  style={{ display: "none" }}
                  onChange={handleChange}
                />
                <p>
                  <label htmlFor="file">Select an image to share</label>
                </p>
                {sharedImage && <img src={URL.createObjectURL(sharedImage)} />}
              </UploadImage>
            ) : (
              assetArea === "media" && (
                <>
                  <input
                    type="text"
                    placeholder="Please input a video link"
                    value={videoLink}
                    onChange={(event) => setVideoLink(event.target.value)}
                  />
                  {videoLink && <ReactPlayer width={"100%"} url={videoLink} />}
                </>
              )
            )}
          </Editor>
        </SharedContent>
        <SharedCreation>
          <AttachAssets>
            <AssetButton onClick={(e) => switchAssetArea("image")}>
              <img src="images/share-photo.svg" />
            </AssetButton>
            <AssetButton onClick={(e) => switchAssetArea("media")}>
              <img src="images/share-video.svg" />
            </AssetButton>
          </AttachAssets>

          <ShareComment>
            <AssetButton>
              <img src="images/share-comment.svg" />
              Anyone
            </AssetButton>
          </ShareComment>
          <PostButton
            disabled={!editorText ? true : false}
            onClick={(event) => postArticle(event)}
          >
            Post
          </PostButton>
        </SharedCreation>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.8);
`;

const Content = styled.div`
  width: 100%;
  max-width: 552px;
  background-color: #fff;
  max-height: 90%;
  overflow: initial;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  top: 32px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: block;
  padding: 16px 28px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    height: 48px;
    width: 40px;
    min-width: auto;
    color: rgba(0, 0, 0, 0.6);
    img,
    svg {
      pointer-events: none;
    }
  }
`;

const SharedContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  vertical-align: baseline;
  background: transparent;
  padding: 8px 12px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 24px;
  svg,
  img {
    width: 48px;
    height: 48px;
    background-clip: content-box;
    border: 2px solid transparent;
    border-radius: 50%;
    margin-right: 5px;
  }
  span {
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
  }
`;

const SharedCreation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px 12px 16px;
`;

const AssetButton = styled.button`
  display: flex;
  align-items: center;
  height: 40px;
  min-width: auto;
  color: rgba(0, 0, 0, 0.5);
  border: none;
  background-color: white;
`;

const AttachAssets = styled.div`
  align-items: center;
  display: flex;
  padding-right: 8px;
  ${AssetButton} {
    width: 40px;
  }
`;

const ShareComment = styled.div`
  padding-left: 8px;
  margin-right: auto;
  border-left: 1px solid rgba(0, 0, 0, 0.15);
  ${AssetButton} {
    img {
      margin-right: 5px;
    }
  }
`;

const PostButton = styled.button`
  min-width: 60px;
  border-radius: 20px;
  padding-left: 16px;
  padding-right: 16px;
  border: none;
  background: ${(props) => (props.disabled ? "rgba(0,0,0,0.15)" : "#0a66c2")};
  color: ${(props) => (props.disabled ? "rgba(0,0,0,0.6)" : "#fff")};
  &:hover {
    cursor: ${(props) => (props.disabled ? "" : "pointer")};
    outline: none !important;
  }
`;

const Editor = styled.div`
  padding: 12px 24px;
  textarea {
    width: 100%;
    min-height: 100px;
    resize: none;
    border: none;
    outline: none;
  }
  input {
    width: 100%;
    height: 35px;
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

const UploadImage = styled.div`
  text-align: center;
  img {
    width: 100%;
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  postArticle: (payload) => dispatch(postArticleAPI(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostModal);
