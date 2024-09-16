// import Wrapper from '@/layouts/Wrapper';
// import TextArea from '@/component/document/TextArea'
// import HeaderOne from '@/layouts/headers/HeaderOne'
// import FooterOne from '@/layouts/footers/FooterOne'
import Wrapper from '../../../../layouts/Wrapper';
import TextArea from '../../../../component/document/TextArea'
export const metadata = {
   title: 'Terms of Service - LuxuryVerse',
};
const index = () => {

   interface ContentData {
      title: string;
      paragraphs: JSX.Element[];
      socialIcons: string[];
      tags: string[];
    }  
    const termsOfServiceContent: ContentData = {
      title: 'Terms of Service',
      paragraphs: [
        (<>These Terms of Service (&apos;Terms&apos;) govern your access to and use of our services, including our various websites, SMS, APIs, email notifications, applications, buttons, widgets, ads, commerce services, and our other covered services that link to these Terms (collectively, the &apos;Services&apos;), and any information, text, graphics, photos or other materials uploaded, downloaded or appearing on the Services (collectively referred to as &apos;Content&apos;). Your access to and use of the Services are conditioned on your acceptance of and compliance with these Terms.</>),
        (<>By accessing or using the Services you agree to be bound by these Terms. If you are using the Services on behalf of a company, organization, government, or other legal entity, you represent and warrant that you are authorized to do so.</>),
        (<>You may use the Services only in compliance with these Terms and all applicable local, state, national, and international laws, rules and regulations.</>),
        (<>The Services that we provide are always evolving and the form and nature of the Services that we provide may change from time to time without prior notice to you. In addition, we may stop (permanently or temporarily) providing the Services (or any features within the Services) to you or to users generally and may not be able to provide you with prior notice.</>),
        (<>These Terms of Service (&apos;Terms&apos;) govern your access to and use of our services, including our various websites, SMS, APIs, email notifications, applications, buttons, widgets, ads, commerce services, and our other covered services that link to these Terms (collectively, the &apos;Services&apos;), and any information, text, graphics, photos or other materials uploaded, downloaded or appearing on the Services (collectively referred to as &apos;Content&apos;). Your access to and use of the Services are conditioned on your acceptance of and compliance with these Terms.</>),
        (<>By accessing or using the Services you agree to be bound by these Terms. If you are using the Services on behalf of a company, organization, government, or other legal entity, you represent and warrant that you are authorized to do so.</>),
        (<>You may use the Services only in compliance with these Terms and all applicable local, state, national, and international laws, rules and regulations.</>),
        (<>The Services that we provide are always evolving and the form and nature of the Services that we provide may change from time to time without prior notice to you. In addition, we may stop (permanently or temporarily) providing the Services (or any features within the Services) to you or to users generally and may not be able to provide you with prior notice.</>),
        (<>These Terms of Service (&apos;Terms&apos;) govern your access to and use of our services, including our various websites, SMS, APIs, email notifications, applications, buttons, widgets, ads, commerce services, and our other covered services that link to these Terms (collectively, the &apos;Services&apos;), and any information, text, graphics, photos or other materials uploaded, downloaded or appearing on the Services (collectively referred to as &apos;Content&apos;). Your access to and use of the Services are conditioned on your acceptance of and compliance with these Terms.</>),
        (<>By accessing or using the Services you agree to be bound by these Terms. If you are using the Services on behalf of a company, organization, government, or other legal entity, you represent and warrant that you are authorized to do so.</>),
        (<>You may use the Services only in compliance with these Terms and all applicable local, state, national, and international laws, rules and regulations.</>),
        (<>The Services that we provide are always evolving and the form and nature of the Services that we provide may change from time to time without prior notice to you. In addition, we may stop (permanently or temporarily) providing the Services (or any features within the Services) to you or to users generally and may not be able to provide you with prior notice.</>),
        (<>These Terms of Service (&apos;Terms&apos;) govern your access to and use of our services, including our various websites, SMS, APIs, email notifications, applications, buttons, widgets, ads, commerce services, and our other covered services that link to these Terms (collectively, the &apos;Services&apos;), and any information, text, graphics, photos or other materials uploaded, downloaded or appearing on the Services (collectively referred to as &apos;Content&apos;). Your access to and use of the Services are conditioned on your acceptance of and compliance with these Terms.</>),
        (<>By accessing or using the Services you agree to be bound by these Terms. If you are using the Services on behalf of a company, organization, government, or other legal entity, you represent and warrant that you are authorized to do so.</>),
        (<>You may use the Services only in compliance with these Terms and all applicable local, state, national, and international laws, rules and regulations.</>),
        (<>The Services that we provide are always evolving and the form and nature of the Services that we provide may change from time to time without prior notice to you. In addition, we may stop (permanently or temporarily) providing the Services (or any features within the Services) to you or to users generally and may not be able to provide you with prior notice.</>),
        (<>These Terms of Service (&apos;Terms&apos;) govern your access to and use of our services, including our various websites, SMS, APIs, email notifications, applications, buttons, widgets, ads, commerce services, and our other covered services that link to these Terms (collectively, the &apos;Services&apos;), and any information, text, graphics, photos or other materials uploaded, downloaded or appearing on the Services (collectively referred to as &apos;Content&apos;). Your access to and use of the Services are conditioned on your acceptance of and compliance with these Terms.</>),
        (<>By accessing or using the Services you agree to be bound by these Terms. If you are using the Services on behalf of a company, organization, government, or other legal entity, you represent and warrant that you are authorized to do so.</>),
        (<>You may use the Services only in compliance with these Terms and all applicable local, state, national, and international laws, rules and regulations.</>),
        (<>The Services that we provide are always evolving and the form and nature of the Services that we provide may change from time to time without prior notice to you. In addition, we may stop (permanently or temporarily) providing the Services (or any features within the Services) to you or to users generally and may not be able to provide you with prior notice.</>),
        (<>These Terms of Service (&apos;Terms&apos;) govern your access to and use of our services, including our various websites, SMS, APIs, email notifications, applications, buttons, widgets, ads, commerce services, and our other covered services that link to these Terms (collectively, the &apos;Services&apos;), and any information, text, graphics, photos or other materials uploaded, downloaded or appearing on the Services (collectively referred to as &apos;Content&apos;). Your access to and use of the Services are conditioned on your acceptance of and compliance with these Terms.</>),
        (<>By accessing or using the Services you agree to be bound by these Terms. If you are using the Services on behalf of a company, organization, government, or other legal entity, you represent and warrant that you are authorized to do so.</>),
        (<>You may use the Services only in compliance with these Terms and all applicable local, state, national, and international laws, rules and regulations.</>),
        (<>The Services that we provide are always evolving and the form and nature of the Services that we provide may change from time to time without prior notice to you. In addition, we may stop (permanently or temporarily) providing the Services (or any features within the Services) to you or to users generally and may not be able to provide you with prior notice.</>),
        (<>These Terms of Service (&apos;Terms&apos;) govern your access to and use of our services, including our various websites, SMS, APIs, email notifications, applications, buttons, widgets, ads, commerce services, and our other covered services that link to these Terms (collectively, the &apos;Services&apos;), and any information, text, graphics, photos or other materials uploaded, downloaded or appearing on the Services (collectively referred to as &apos;Content&apos;). Your access to and use of the Services are conditioned on your acceptance of and compliance with these Terms.</>),
        (<>By accessing or using the Services you agree to be bound by these Terms. If you are using the Services on behalf of a company, organization, government, or other legal entity, you represent and warrant that you are authorized to do so.</>),
        (<>You may use the Services only in compliance with these Terms and all applicable local, state, national, and international laws, rules and regulations.</>),
        (<>The Services that we provide are always evolving and the form and nature of the Services that we provide may change from time to time without prior notice to you. In addition, we may stop (permanently or temporarily) providing the Services (or any features within the Services) to you or to users generally and may not be able to provide you with prior notice.</>),
        (<>These Terms of Service (&apos;Terms&apos;) govern your access to and use of our services, including our various websites, SMS, APIs, email notifications, applications, buttons, widgets, ads, commerce services, and our other covered services that link to these Terms (collectively, the &apos;Services&apos;), and any information, text, graphics, photos or other materials uploaded, downloaded or appearing on the Services (collectively referred to as &apos;Content&apos;). Your access to and use of the Services are conditioned on your acceptance of and compliance with these Terms.</>),
        (<>By accessing or using the Services you agree to be bound by these Terms. If you are using the Services on behalf of a company, organization, government, or other legal entity, you represent and warrant that you are authorized to do so.</>),
        (<>You may use the Services only in compliance with these Terms and all applicable local, state, national, and international laws, rules and regulations.</>),
        (<>The Services that we provide are always evolving and the form and nature of the Services that we provide may change from time to time without prior notice to you. In addition, we may stop (permanently or temporarily) providing the Services (or any features within the Services) to you or to users generally and may not be able to provide you with prior notice.</>),
      ],
      // socialIcons: ['fab fa-linkedin-in', 'fab fa-twitter', 'fab fa-instagram'],
      socialIcons : [],
      tags: ['terms', 'conditions', 'service']
    };
    
   return (

      <Wrapper>
    {/* <HeaderOne />   */}
    <TextArea contentData={termsOfServiceContent} />
        {/* <FooterOne /> */}
      </Wrapper>
   )
}

export default index