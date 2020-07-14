import React from 'react';

declare global {
  interface Window {
    fnames: string[];
    ftypes: string[];
  }
}

export default function EmailForm(): JSX.Element {

  // Setting these globals is required for the Mailchimp form to work properly.
  React.useEffect(() => {
    window.fnames = ['EMAIL', 'FNAME', 'LNAME', 'ADDRESS', 'PHONE', 'MMERGE6'];
    window.ftypes = ['email', 'text', 'text', 'address', 'phone', 'text'];
  }, []);

  return (
    <div id="mc_embed_signup">
      <form action="https://gmail.us4.list-manage.com/subscribe/post?u=8a4d00b32870dbdaf8310c15e&amp;id=e46a862669" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
        <div id="mc_embed_signup_scroll">
          <h2>Sign up for our email newsletter HERE!</h2>
          <div className="indicates-required">
            <span className="asterisk">*</span> indicates required
          </div>
          <div className="mc-field-group">
            <label htmlFor="mce-EMAIL">
              Email Address <span className="asterisk">*</span>
            </label>
            <input type="email" value="" name="EMAIL" className="required email" id="mce-EMAIL" />
          </div>
          <div className="mc-field-group">
            <label htmlFor="mce-FNAME">First Name</label>
            <input type="text" value="" name="FNAME" className="" id="mce-FNAME" />
          </div>
          <div className="mc-field-group">
            <label htmlFor="mce-LNAME">Last Name</label>
            <input type="text" value="" name="LNAME" className="" id="mce-LNAME" />
          </div>
          <div className="mc-field-group">
            <label htmlFor="mce-MMERGE6">Connection to Cubberley</label>
            <input type="text" value="" name="MMERGE6" className="" id="mce-MMERGE6" />
          </div>
          <div id="mce-responses" className="clear">
            <div className="response" id="mce-error-response" style={{ display: 'none' }} />
            <div className="response" id="mce-success-response" style={{ display: 'none' }} />
          </div>
          <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
            <input type="text" name="b_8a4d00b32870dbdaf8310c15e_e46a862669" tabIndex={-1} value="" />
          </div>
          <div className="clear">
            <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
          </div>
        </div>
      </form>
    </div>
  );
}
