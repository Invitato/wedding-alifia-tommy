import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import { styWrapper } from './styles';

function HelloSection({ isInvitation }) {
  return (
    <Fragment>
      <div id="id-hello-section" css={styWrapper} className="gray-bg">
        <div className="container" style={{ minHeight: '60vh' }}>
          <div className="row" style={{ paddingTop: '2em' }}>
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              {/* <h2 className="main-font">Assalamualaikum Wr. Wb</h2> */}
              <h3 className="sub-title hs">{`The Wedding of Alifia & Tommy`}</h3>
              <p className="info quran">
                وَمِنْ ءَايَٰتِهِۦٓ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَٰجًا لِّتَسْكُنُوٓا۟ إِلَيْهَا وَجَعَلَ
                بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِى ذَٰلِكَ لَءَايَٰتٍ لِّقَوْمٍ يَتَفَكَّرُونَ
              </p>
              <p className="info">
                "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu
                sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih
                dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang
                berfikir. (Qs. Ar-Ruum: 21)
              </p>
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
