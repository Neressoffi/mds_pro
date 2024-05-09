import React from 'react';
import apImage from '../../assets/images/ap.png';
import appImage from '../../assets/images/app.png';
import apppImage from '../../assets/images/appp.png';
import appppImage from '../../assets/images/apppp.png';
import './LandingPage.css';

export default function LandingPage() {
  return (
    <div className="landing-page container">
      <img src={appImage} alt="Logo de l'application" className="logo img-fluid logo" />

      <div className="row">
        <div className="col-sm-12 col-md-6">
          <div className="content text-center">
            <div className="text-left">
              <h1>Venez atteindre les étoiles en étudiant avec nous !</h1>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <img src={apppImage} alt="Bouton de navigation" className="button-image no-border bottom-left-image2" />
            </div>
            <div className="col-md-6">
              <img src={appppImage} alt="Bouton de navigation" className="button-image no-border bottom-left-image" />
            </div>
          </div>
        </div>
      </div>

      <img src={apImage} alt="Bouton de navigation" className="button-image no-border tel d-none d-sm-block" />
    </div>
  );
}
