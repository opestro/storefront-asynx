import { EmbaddedContactType, StoreEntity } from "feeef/src/core/core";
import TextButton from "./text_button";
import { IconBrandFacebook, IconBrandInstagram, IconBrandTelegram, IconBrandTwitter, IconLink, IconMail, IconPhoneCall } from "@tabler/icons-react";


function Footer({ store }: { store: StoreEntity }) {
  var facebooks = store?.contacts?.filter(c => c.type === EmbaddedContactType.facebook)
  var instagrams = store?.contacts?.filter(c => c.type === EmbaddedContactType.instagram)
  var twitters = store?.contacts?.filter(c => c.type === EmbaddedContactType.twitter)
  var telegrams = store?.contacts?.filter(c => c.type === EmbaddedContactType.telegram)
  var linkedins = store?.contacts?.filter(c => c.type === EmbaddedContactType.linkedin)

  var emails = store?.contacts?.filter(c => c.type === EmbaddedContactType.email)
  var phones = store?.contacts?.filter(c => c.type === EmbaddedContactType.phone)
  var websites = store?.contacts?.filter(c => c.type === EmbaddedContactType.website)



  return (
    <footer className="container">
      <div className="gb rounded-t-xl max-w-screen-xl mx-auto px-4 pt-10 mt-10 sm:px-6 lg:px-8 mb-[70px]">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">

          <div>
            <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
              تابعنا
            </h4>
            <ul className="mt-4">
              {
                facebooks?.map((facebook, index) => (
                  <li key={index}>
                    <TextButton href={
                      facebook?.value
                    } target='_blank'>
                      {facebook?.name || 'Facebook'}
                      <IconBrandFacebook
                        size={30}
                        className='ps-2'></IconBrandFacebook>
                    </TextButton>
                  </li>
                ))
              }
              {
                instagrams?.map((instagram, index) => (
                  <li key={index}>
                    <TextButton href={
                      instagram?.value
                    } target='_blank'>
                      {instagram?.name || 'Instagram'}
                      <IconBrandInstagram
                        size={30}
                        className='ps-2'></IconBrandInstagram>
                    </TextButton>
                  </li>
                ))
              }
              {
                linkedins?.map((linkedin, index) => (
                  <li key={index}>
                    <TextButton href={
                      linkedin?.value
                    } target='_blank'>
                      {linkedin?.name || 'LinkedIn'}
                      <IconLink
                        size={30}
                        className='ps-2'></IconLink>
                    </TextButton>
                  </li>
                ))
              }
              {
                twitters?.map((twitter, index) => (
                  <li key={index}>
                    <TextButton href={
                      twitter?.value
                    } target='_blank'>
                      {twitter?.name || 'Twitter'}
                      <IconBrandTwitter
                        size={30}
                        className='ps-2'></IconBrandTwitter>
                    </TextButton>
                  </li>
                ))
              }
              {
                telegrams?.map((telegram, index) => (
                  <li key={index}>
                    <TextButton href={
                      telegram?.value
                    } target='_blank'>
                      {telegram?.name || 'Telegram'}
                      <IconBrandTelegram
                        size={30}
                        className='ps-2'></IconBrandTelegram>
                    </TextButton>
                  </li>
                ))
              }


            </ul>
          </div>
          <div className="mt-12 md:mt-0">
            <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
              المزيد
            </h4>
            <ul className="mt-4">
              {
                emails?.map((email, index) => (
                  <li key={index}>
                    <TextButton href={`mailto:${email?.value}`}>
                      {email?.name || email?.value}
                      <IconMail
                        size={30}
                        className='ps-2'></IconMail>
                    </TextButton>
                  </li>
                ))
              }
              {
                phones?.map((phone, index) => (
                  <li key={index}>
                    <TextButton href={`tel:${phone?.value}`}>
                      {phone?.name || phone?.value}
                      <IconPhoneCall
                        size={30}
                        className='ps-2'></IconPhoneCall>
                    </TextButton>
                  </li>
                ))
              }
              {
                websites?.map((website, index) => (
                  <li key={index}>
                    <TextButton href={website?.value} target='_blank'>
                      {website?.name || website?.value}
                      <IconLink
                        size={30}
                        className='ps-2'></IconLink>
                    </TextButton>
                  </li>
                ))
              }

            </ul>
          </div>
          <div className="mt-16 xl:mt-0">
            <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
              {store?.title}
            </h4>
            <p className="mt-4 text-base leading-6 text-gray-500">
              {store?.description}
            </p>
            {/* logo in gray scale */}
            <center className="mt-4">
              {
                store?.ondarkLogoUrl &&
                <img src={store?.ondarkLogoUrl} className={"h-20 hidden dark:block grayscale"
                } alt={store?.name!} />
              }
              {
                (store?.logoUrl || store?.ondarkLogoUrl) &&
                <img src={store?.logoUrl || store?.ondarkLogoUrl || undefined} className={"h-20 dark:hidden block grayscale"
                } alt={store?.name!} />
              }
            </center>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-200 dark:border-gray-700 py-5">
          <p className="text-center font-light text-base leading-6 text-gray-400 xl:text-center" dir='ltr'>
            &copy; {new Date().getFullYear()} {store?.name}. All rights reserved.
            <br />
            {/* developed by mohamadlounnas */}
            <span className="text-sm font-extralight">
              created by <a href="https://feeef.net/?ref=footer_copyrights" target="_blank" className="text-primary">feeef®</a> created your store. startig for free!
            </span>

          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;