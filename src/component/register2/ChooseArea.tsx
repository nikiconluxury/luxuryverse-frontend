import Image from "next/image";

import choose_thumb_1 from "@/assets/img/update/bg/bg-gradient1-1.jpg"



const ChooseArea = () => {

//    const searchParams = useSearchParams();
//    const twitterParam = searchParams.get('twitter');
//    const telegramParam = searchParams.get('telegram')
//    const walletParam = searchParams.get('wallet')
   const handleTwitterAuth = async () => {
   const requestTokenUrl = 'https://twitter-auth-icon-workstation-3.popovtech.com/request-token';
   try {
       const response = await fetch(requestTokenUrl, {
           method: 'GET',
           headers: {
               'Content-Type': 'application/json',
           },
       });

       if (!response.ok) {
           throw new Error(`HTTP error! status: ${response.status}`);
       }

       const data = await response.json();
       console.log('Received data:', data);

       if (data.authorization_url) {
           window.location.href = data.authorization_url;  // Redirect to the authorization URL
       } else {
           console.error('Failed to get authorization URL', data.error);
       }

       
   } catch (error) {
       console.error('Error fetching auth URL:', error);
   }
};

   return (
    

    <div className="wcu-area-1 pt-130 pb-140 position-relative" id="feature">
        <div className="bg-gradient-1">
            {/* <Image src={choose_thumb_1} alt="img" layout="fill" objectFit="cover" /> */}
        </div>
        <div className="container">
            <div className="mb-25">
                <div className="row gy-5">
                    <div className="col-lg-7">
                        <div className="section-title mb-0">
                            <h2 className="title style2">Connect To LuxuryVerse</h2>
                            <p className="sec-text">Complete the following steps to join LuxuryVerse</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="col-lg-10">
                <div className="feature-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', flexGrow: 1, alignItems: 'center' }}>
                        <div className="feature-card-icon" style={{ marginRight: '20px' }}>
                        <i className="fa-brands fa-x-twitter" aria-hidden="true"></i>
                </div>
                        <div className="feature-card-details" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            <h4 className="feature-card-title">Follow @LuxuryVerse</h4>
                            <p className="feature-card-text">Stay up to date on the latest drops</p>
                        </div>
                    </div>
                    <div className="btn-wrap">
                        <button className="btn btn2">Follow</button>
                    </div>
                </div>

                <div className="feature-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', flexGrow: 1, alignItems: 'center' }}>
                        <div className="feature-card-icon" style={{ marginRight: '20px' }}>
                </div>
                        <div className="feature-card-details" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            <h4 className="feature-card-title">Connect Wallet</h4>
                            <p className="feature-card-text">Ensure seamless access</p>
                        </div>
                    </div>
                    <div className="btn-wrap">
                        <button className="btn btn2">Connect</button>
                    </div>
                </div>

            </div>
         </div>
      </div>
    
   )

}

export default ChooseArea
