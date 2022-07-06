import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Pablo Bezard</h1>
          <PText>developer web FullStack.</PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+543534789688',
                path: 'tel:+543534789688',
              },
              {
                title: 'Pablobezard@gmail.com',
                path: 'Pablobezard@gmail.com',
              },
              {
                title: 'CBA, Arg.',
                path:
                  'https://www.google.com/maps/place/Av.+V%C3%A9lez+Sarsfield+1055,+X5000+C%C3%B3rdoba/data=!4m2!3m1!1s0x9432a3e07900ca7f:0x9a85d8fe56de5f72?sa=X&ved=2ahUKEwiCnoK7l9L4AhVMr5UCHSGJDLAQ8gF6BAgCEAE',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="social Links"
            links={[
              {
                title: 'Facebook',
                path: 'https://www.facebook.com/pablobezar/',
              },
              {
                title: 'Instagram',
                path: 'https://www.instagram.com/pablobezard/',
              },
              {
                title: 'Linkedin',
                path: 'https://www.linkedin.com/in/pablo-bezard-33b017164/',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>© 2022 - PabloBezard | Pbezard</PText>
        </div>
      </div>
    </FooterStyle>
  );
}
