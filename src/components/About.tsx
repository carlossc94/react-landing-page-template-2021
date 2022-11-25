import React from 'react';

import config from '../config/index.json';

const About = () => {
  const { company, about } = config;
  const { logo, name: companyName } = company;
  const { socialMedia, imagesSocialMedia } = about;

  return (
    <div
      id="sobre"
      className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-12"
    >
      <div className="flex flex-col items-center justify-center">
        <div>
          <img src={logo} alt={companyName} />
        </div>

        <div className="flex items-center gap-x-8 mt-6 h-8">
          <a
            aria-label="whatsapp"
            href={socialMedia.whatsapp}
            target="_blank"
            rel="noreferrer"
          >
            <img
              alt="logo"
              className="h-16 w-auto sm:h-16"
              src={imagesSocialMedia.ws}
            />
          </a>
          <a
            aria-label="facebook"
            href={socialMedia.facebook}
            target="_blank"
            rel="noreferrer"
          >
            <img
              alt="logo"
              className="h-16 w-auto sm:h-16"
              src={imagesSocialMedia.fb}
            />
          </a>
          <a
            aria-label="telefono"
            href={socialMedia.telefono}
            target="_blank"
            rel="noreferrer"
          >
            <img
              alt="logo"
              className="h-16 w-auto sm:h-16"
              src={imagesSocialMedia.tel}
            />
          </a>
          <a
            aria-label="email"
            href={socialMedia.email}
            target="_blank"
            rel="noreferrer"
          >
            <img
              alt="logo"
              className="h-16 w-auto sm:h-16"
              src={imagesSocialMedia.em}
            />
          </a>
        </div>
        <div className="flex items-center mt-6">
          <p className="mt-6 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50">
            &copy; {new Date().getFullYear()} designed by{' '}
            <a href="https://github.com/issaafalkattan" rel="nofollow">
              Issaaf Kattan
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
