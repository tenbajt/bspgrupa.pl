import React from "react";
import Helmet from "react-helmet";
import Styled from "styled-components";
import Section from "../tenbajt/components/Section";
import Background from "../tenbajt/components/Background";
import GlobalStyles from "../tenbajt/GlobalStyles";
import { color } from "../tenbajt/Utils";


const data = {
    links: [
        {
            url: "https://www.mlekoodkrowy.pl",
            color: color.green(600),
            logoSrc: "/images/logo/mlekoodkrowy.svg",
            logoAlt: "Mleko od Krowy",
            backgroundUrl: "/images/background/mlekoodkrowy.jpg",
        },
        {
            url: "https://www.sercewielkopolski.pl",
            color: color.amber(500),
            logoSrc: "/images/logo/sercewielkopolski.svg",
            logoAlt: "Ser[ce] Wielkopolski",
            backgroundUrl: "/images/background/sercewielkopolski.jpg",
        },
        {
            url: "https://www.jajkaodkury.pl",
            color: color.yellow(300),
            logoSrc: "/images/logo/jajkaodkury.svg",
            logoAlt: "Jajka od Kury",
            backgroundUrl: "/images/background/jajkaodkury.jpg",
        },
        {
            url: "#",
            color: color.blue(500),
            logoSrc: "/images/logo/mlekoodkozy.svg",
            logoAlt: "Mleko od Kozy",
            backgroundUrl: "/images/background/mlekoodkozy.jpg",
        },
    ],
    copyrights: "© 2021 BSP Grupa | Wszystkie prawa zastrzeżone.",
};

const Grid = Styled.div`
    gap: 0.125rem;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;

const ItemLink = Styled.a`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    justify-content: center;
    transition: background-color 200ms;

    &:hover {
        background-color: ${color.black(0.5)};
    }
`;

const ItemLogoContainer = Styled.div`
    width: 7rem;
    height: 7rem;
    position: relative;
    transform: scale(0.9);
    transition: transform 200ms;

    ${ItemLink}:hover & {
        transform: scale(1);
    }
`;

const ItemLogo = Styled.img`
    width: 100%;
    height: 100%;
    border-radius: 3.5rem;
    background-color: ${color.white()};
`;

const ItemLogoRing = Styled.div`
    inset: -7px;
    border: 0.25rem solid ${props => props.color};
    position: absolute;
    border-radius: 4rem;
`;

const Footer = Styled(Section)`
    margin-top: 0.125rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
`;

const Copyrights = Styled.p`
    color: ${color.coolGray(500)};
    font-size: 0.75rem;
    line-height: 1rem;
`;

const HomePage = () => (
    <React.Fragment>
        <Helmet>
            <title>BSP Grupa</title>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"/>
        </Helmet>
        <GlobalStyles/>
        <main>
            <Grid>
                {data.links.map((link) => (
                    <div style={{background: `url(${link.backgroundUrl}) center/cover no-repeat`}}>
                        <ItemLink href={link.url}>
                            <ItemLogoContainer>
                                <ItemLogoRing color={link.color}/>
                                <ItemLogo src={link.logoSrc} alt={link.logoAlt}/>
                            </ItemLogoContainer>
                        </ItemLink>
                    </div>
                ))}
            </Grid>
            <Footer>
                <Background style={{backgroundColor: color.black()}}/>
                <Copyrights>
                    {data.copyrights}
                </Copyrights>
            </Footer>
        </main>
    </React.Fragment>
);

export default HomePage;
