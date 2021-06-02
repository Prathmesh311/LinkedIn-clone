import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import styled from 'styled-components';
import LeftSide from './LeftSide';
import Main from './Main';
import RightSide from './RightSide';

function Home(props) {
    return (
        <Container>
            {!props.user && <Redirect to='/' />}
            <Content>
                <Section>
                    <h5>
                        <a>Hiring in hurry? - </a>
                    </h5>
                    <p>Find talented pros in record time with Upwork and keep business moving.</p>
                </Section>
                <Layout>
                    <LeftSide />
                    <Main />
                    <RightSide />
                </Layout>
            </Content>
        </Container>
    )
}

const Container = styled.div `
    padding-top: 45px;
    max-width: 100%;
`;

const Content = styled.div`
    margin-left: auto;
    margin-right: auto;
    max-width: 1128px;
`;


const Section = styled.section `
    min-height: 50px;
    padding-top: 16px;
    padding-bottom: 8px;
    box-sizing: content-box;
    text-align: center;
    text-decoration: underline;
    display: flex;
    justify-content: center;

    h5{
        color: #0a66c2;
        font-size: 14px;
        a{
            font-weight: 700;
        }
    }
    
    p{
        font-size: 14px;
        color: #434649;
        font-weight: 600;
    }

    @media (max-width: 768px){
        flex-direction: column;
        padding: 0px 5px;
    }
`;

const Layout = styled.div ` 
    display: grid;
    grid-template-areas: "LeftSide Main RightSide";
    grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(0, 7fr);
    column-gap: 25px;
    row-gap: 25px;
    margin-bottom: 25px;

    @media (max-width: 768px){
        display: flex;
        flex-direction: column;
        padding: 0px 5px;
    }
`;

const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    };
};

export default connect(mapStateToProps)(Home);