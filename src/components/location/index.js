import React from "react";

const Location = () => {
  return (
    <div className='location_wrapper'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.94722696363!2d2.2770197556366667!3d48.8588377390713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C+France!5e0!3m2!1sen!2sfi!4v1560517812184!5m2!1sen!2sfi'
        width='100%'
        height='500px'
        frameBorder='0'
        allowFullScreen
      />
      <div className='location_tag'>
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
