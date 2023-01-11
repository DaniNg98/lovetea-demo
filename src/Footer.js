import React from 'react';

const Footer = () => {
  return (
    <footer id='Footer'>
      <div className='ft-main'>
        <div className='ft-main-item'>
          <h2 className='ft-title'>Location</h2>
          <ul>
            <li>
              <p className='ft-info'>Vulkan Depot</p>
            </li>
            <li>
              <p className='ft-info'>Maridalsveien 21, 0178 Oslo</p>
            </li>
          </ul>
        </div>
        <div className='ft-main-item' id='Opening Hours'>
          <h2 className='ft-title'>Opening Hours</h2>
          <ul>
            <li>
              <p className='ft-info'>Monday - Friday: 10:00 - 20:00</p>
            </li>
            <li>
              <p className='ft-info'>Saturday - Sunday: 12:00 - 20:00</p>
            </li>
          </ul>
        </div>
        <div className='ft-main-item' id='Contact Us'>
          <h2 className='ft-title'>Contact</h2>
          <ul>
            <li>
              <p className='ft-info'>Phone: 973 45 389</p>
            </li>
            <li>
              <p className='ft-info'>E-mail: loveteadang@outlook.com</p>
            </li>
          </ul>
        </div>
        <div className='ft-main-item'>
          <h2 className='ft-title'>Socials</h2>
          <ul>
            <li>
              <a href='https://www.facebook.com/loveteasushi' target='_blank'>
                Facebook
              </a>
            </li>
            <li>
              <a href='https://www.instagram.com/loveteasushi/' target='_blank'>
                Instagram
              </a>
            </li>
            <li>
              <a
                href='https://www.tripadvisor.com/Restaurant_Review-g190479-d23343780-Reviews-Love_Tea_Sushi-Oslo_Eastern_Norway.html'
                target='_blank'
              >
                Tripadvisor
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className='ft-social'>
        <ul class='ft-social-list'>
          <li>
            <a href='https://www.facebook.com/loveteasushi' target='_blank'>
              <i class='fa fa-facebook'></i>
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com/loveteasushi/' target='_blank'>
              <i class='fa fa-instagram'></i>
            </a>
          </li>
          <li>
            <a
              href='https://www.tripadvisor.com/Restaurant_Review-g190479-d23343780-Reviews-Love_Tea_Sushi-Oslo_Eastern_Norway.html'
              target='_blank'
            >
              <i class='fab fa-tripadvisor'></i>
            </a>
          </li>
        </ul>
      </div>

      <div class='ft-legal'>
        <ul class='ft-legal-list'>
          <li>&copy; 2021 Copyright Love Tea & Sushi</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
