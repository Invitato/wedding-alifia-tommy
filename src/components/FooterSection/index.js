import React, { Fragment } from 'react';
import { bool } from 'prop-types';
import { styWrapper } from '../HelloSection/styles';

import CountContainer from '../WelcomeSection/CountContainer';

function FooterSection({ isInvitation }) {
  return (
    <Fragment>
      <div id="live-wedding-section" css={styWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h3 className=" pr-co" style={{ marginTop: '2em' }}>
                Live Wedding Alifia & Tommy
              </h3>
              <CountContainer />
              <iframe
                title="Live Wedding"
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/6xbFq_sBiuQ"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <p className="info">Live: 08:00 WIB | Sabtu, 05 Desember 2020</p>
            </div>
          </div>
        </div>
      </div>

      <div id="fh5co-couple" className="fh5co-section-gray" css={styWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <p className="info">
                Sehubungan dengan kondisi saat ini mengenai pembatasan jumlah tamu undangan, <br />
                Tanpa mengurangi rasa hormat, kami mohon segala doa dan restu dari bapak/ ibu/saudara/i, dan kami
                berharap tetap dapat menjalin tali silahturahmi melalui media online.
              </p>
              <h2 className="main-font pr-co">Terima Kasih</h2>
            </div>
          </div>
        </div>
      </div>
      <footer id="fh5co-footer" role="contentinfo">
        <div className="container">
          <div className="row copyright">
            <div className="col-md-12 text-center">
              <p>
                <small className="block">&copy; 2020 Alifia & Tommy Wedding. All Rights Reserved.</small>
                <small className="block">
                  Song by{' '}
                  <a
                    href="https://www.youtube.com/watch?v=jvsfAqAZGik&feature=youtu.be&ab_channel=Prassetama"
                    target="_blank"
                    rel="noreferrer"
                    className="pr-co"
                  >
                    Prassetama - Melamarmu (Saxophone Romantic Instrumental)
                  </a>
                </small>
                <small className="block">
                  Create with Love by{' '}
                  <a href="http://inviato.net" target="_blank" rel="noreferrer" className="pr-co">
                    Invitato.net
                  </a>
                </small>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}

FooterSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(FooterSection);
