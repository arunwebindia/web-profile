import React,{useEffect} from 'react'

export default function AdsComp() {
    useEffect(() => {

        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        }

        catch (e) {
            console.log('error',e)
        }

    },[]);
  return (
    <ins class="adsbygoogle"
     style={{display:"block"}}
     data-ad-format="fluid"
     data-ad-layout-key="-6q+e9+15-2u+4y"
     data-ad-client="ca-pub-8222566596300408"
     data-ad-slot="8965504388"></ins>
  )
}
