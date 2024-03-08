import { IconBrandFacebook, IconBrandInstagram, IconBrandTwitter } from "@tabler/icons-react";
import { StoreModel } from "../pishop/logic";
import TextButton from "./text_button";


function Footer({ store }: { store: StoreModel | null }) {
  return (
    <footer className="container">
      <div className="gb rounded-t-xl max-w-screen-xl mx-auto px-4 pt-10 mt-10 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">

          <div>
            <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
              تابعنا
            </h4>
            <ul className="mt-4">
              <li>
                {/* full width */}
                <TextButton href={
                  store?.socials?.facebook
                } target='_blank'>
                  <IconBrandFacebook
                    className='pe-1'></IconBrandFacebook>
                  Facebook
                </TextButton>
              </li>
              <li>
                <TextButton href={
                  store?.socials?.instagram
                } target='_blank'>
                  <IconBrandInstagram
                    className='pe-1'
                  ></IconBrandInstagram>

                  Instagram
                </TextButton>
              </li>
              <li>
                <TextButton href={
                  store?.socials?.twitter
                } target='_blank'>
                  <IconBrandTwitter
                    className='pe-1'
                  ></IconBrandTwitter>

                  Twitter
                </TextButton>
              </li>

            </ul>
          </div>
          <div className="mt-12 md:mt-0">
            <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
              روابط أخرى
            </h4>
            <ul className="mt-4">
              {store?.links?.map((link,index) => (
                <li key={index}>
                  <TextButton href={link.url} target='_blank'>
                    {link.name}
                  </TextButton>
                </li>
              ))}
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
              <img className="h-20 object-contain invert dark:invert-0 grayscale " src={store?.logo?.url} alt="" />
            </center>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-200 dark:border-gray-700 py-5">
          <p className="text-center font-light text-base leading-6 text-gray-400 xl:text-center" dir='ltr'>
            &copy; {new Date().getFullYear()} {store?.name}. All rights reserved.
            <br />
            Powered by PiShop
            <br />
            {/* developed by mohamadlounnas */}
            <span className="text-sm font-extralight">
            developed by {' '}
            <a href="https://linkedin.com/in/mohamadlounnas"
              target='_blank' className="text-primary transition duration-150 ease-in-out">
              {'</'}Mohamad Lounnas{'>'} </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;