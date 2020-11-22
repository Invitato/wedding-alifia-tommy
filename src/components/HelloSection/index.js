import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import { styWrapper } from './styles';

function HelloSection({ isInvitation }) {
  return (
    <Fragment>
      <div id="fh5co-couple" css={styWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h3 className="sub-title hs">BISMILLAHIRAHMANIRRAHIIM</h3>
              <h3 className="sub-title hs">Assallamualaikum Warahmatuallahi Wabarakatuh</h3>
              <p className="info">
                Dengan memohon Rahmat dan Ridho Allah Subhanahu Wa Ta'ala
                <br />
                Kami bermaksud menyelenggarakan pernikahan putra-putri kami
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center">
              <h3 className="">ALIFIA DIAN FARIZHA, S.T.</h3>
              <p className="parent">Putri Pertama dari Bapak AKBP. Ir. Saiful Fajar & Ibu drg. Susilowati</p>
            </div>
          </div>
          {/* GROOM */}
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center">
              <h3 className="">TOMMY ANUGRAH PUTRA, S.T.</h3>
              <p className="parent">Putra Ketiga dari Bapak H. Taufik Hidayat & Ibu Emma Rahmi</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

HelloSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default HelloSection;
