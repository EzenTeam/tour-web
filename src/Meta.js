// 기본 참조 객체
import React from "react";
// SEO 처리 기능 패키지
import { Helmet, HelmetProvider } from "react-helmet-async";

/**
 * SEO 처리 컴포넌트
 * @param props
 * @returns {JSX.Element}
 */
const Meta = (props) => {
    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8" />
                {/* SEO 태그 */}
                <title>{props.title}</title>
                <meta name="description" content={props.description} />
                <meta name="keywords" content={props.keywords} />
                <meta name="author" content={props.author} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={props.title} />
                <meta property="og:description" content={props.description} />
                <meta property="og:url" content={props.url} />
                {/* <meta property='og:image' content={props.image} /> */}

                {/* 웹폰트 적용을 위한 외부 리소스 참조 */}
                <link href="https://cdn.jsdelivr.net/gh/sunn-us/SUIT/fonts/static/woff2/SUIT.css" rel="stylesheet" />

                {/* Helmet 안에서 CSS 적용하기 */}
                <style type="text/css">{`
                    html,
                    body {
                        font-family: Verdana, sans-serif;
                        font-size: 16px;
                        line-height: 1.5;
                        margin: 0;
                    }

                    h1, h2, h3, h4, h5, h6 {
                        font-family: "Segoe UI",Arial,sans-serif;
                        font-weight: 400;
                        margin: 10px 0;
                    }
                    
                    h3 {
                        font-size: 24px;
                    }

                    p {
                        display: block;
                        margin-block-start: 1em;
                        margin-block-end: 1em;
                        margin-inline-start: 0px;
                        margin-inline-end: 0px;
                      }

                    hr {
                        width: 1500px;
                        border-color: #ffffff;
                    }

                    ul, li {
                        list-style: none;
                    }

                    html {
                        box-sizing: border-box
                      }

                    *,
                    *:before,
                    *:after {
                      box-sizing: inherit;
                    }

                    p {
                        display: block;
                        margin-block-start: 1em;
                        margin-block-end: 1em;
                        margin-inline-start: 0px;
                        margin-inline-end: 0px;
                      }
                `}</style>
            </Helmet>
        </HelmetProvider>
    );
};

/**
 * props에 대한 기본값 설정
 * @type {{keywords: string, author: string, description: string, title: string, url: string}}
 */
Meta.defaultProps = {
    title: "React Layout Demo",
    description: "React.js로 구현한 레이아웃 데모 페이지 입니다.",
    keywords: "React,layout,demo",
    author: "Jaei",
    // image: '기본이미지변수적용',
    url: window.location.href,
};

export default Meta;