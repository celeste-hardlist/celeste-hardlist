import HTMLFlipBook from 'react-pageflip';
import React from "react";

const Page = React.forwardRef((props, ref) => {
    return (
        <div className={"bookPage"} 
            ref={ref} 
            data-density={"hard"}>
            <h2>Page Header</h2>
            <p>{props.children}</p>
        </div>
    );
});

function MyBook(props) {
    return (
        <HTMLFlipBook width={600} 
                    height={600} 
                    flippingTime={400} 
                    showCover={true}
                    maxShadowOpacity={0}>
            <Page>Page text</Page>
            <Page>Page text</Page>
            <Page>Page text</Page>
            <Page>Page text</Page>
            <Page>Page text</Page>
            <Page>Page text</Page>
        </HTMLFlipBook>
    );
}

export default MyBook;