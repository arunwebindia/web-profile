import React, { useEffect  } from 'react';

const AdsComponent = (props) => {
    const { dataAdSlot } = props;  



    useEffect(() => {

        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        }

        catch (e) {
            console.log('error',e)
        }

    },[]);



    return (
        <>
           <ins class="adsbygoogle"
     style={{display:"block"}}
     data-ad-client="ca-pub-8222566596300408"
     data-ad-slot="2253853854"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>

        </>
    );
};

export default AdsComponent;