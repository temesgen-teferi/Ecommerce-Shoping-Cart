import React from 'react';
import { IconBase } from 'react-icons';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function ContactPage() {
  const handleSocialMediaClick = (platform) => {
    // Code to handle the user clicking on a social media platform icon
    console.log(`Clicked on ${platform}`);
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <div>
        <IconBase FaFacebook onClick={() => handleSocialMediaClick('Facebook')} />
        <FaTwitter onClick={() => handleSocialMediaClick('Twitter')} />
        <FaInstagram onClick={() => handleSocialMediaClick('Instagram')} />
        <FaLinkedin onClick={() => handleSocialMediaClick('LinkedIn')} />
      </div>
    </div>
  );
}

export default ContactPage;
