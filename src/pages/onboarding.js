import React from 'react';
import "../stylesheets/onboarding.css"

export default function onboarding() {
  return (
    <body>
      <section>
        <div class="container">
          <div class="user signinnBx">
            <div class="imgBx"><img src="../../assets/ecom.jpg" /></div>
            <div class="formBx">
              <form class="onboardingform">
                <div class="company-logo" >DEALL</div>
                <div class="stepper">
                  <span class="stepss"><span class="step1">1</span>
                    <label for="column-name" class="step-col">Business Details</label>
                  </span>
                  <span class="stepss">
                    <span class="step2">2</span>
                    <label for="column-name" class="step-col">Contact Details</label>
                  </span>
                  <span class="stepss">
                    <span class="step3">3</span>
                    <label for="column-name" class="step-col">Documents</label>
                  </span>
                </div>
                <h2>Businees Details</h2>
                <div class="upload-logo ">
               <span class="logo-outline">Logo</span>
                </div>
                <label for="column-name">Business Name</label>
                <input type="text" name="" placeholder="Enter" />
                <label for="column-name">Category</label>
                <select id="options" name="options">
                  <option>Select</option>
                  <option value="AF">eommmm</option>
                  <option value="AF">eommmm</option>
                  <option value="AF">eommmm</option>
                </select>
                <label for="column-name">Sub Category</label>
                <select id="options" name="options">
                  <option>Select</option>
                  <option value="AF">eommmm</option>
                  <option value="AF">eommmm</option>
                  <option value="AF">eommmm</option>
                </select>
                <label for="column-name">Type</label>
                <form class="radio-btns">
                  <label class="radio-inline">
                    <input type="radio" name="optradio" checked />Online
                  </label>
                  <label class="radio-inline">
                    <input type="radio" name="optradio" />Instore
                  </label>
                  <label class="radio-inline">
                    <input type="radio" name="optradio" />Both
                  </label>
                </form>
                <label for="column-name">Website URL</label>
                <input type="email" name="" placeholder="Enter" />
                <label for="column-name"># of Physical Stores</label>
                <input type="text" name="" placeholder="Enter" />
                <label for="column-name">Monthly Transaction Volume</label>
                <input type="text" name="" placeholder="Enter" />
                <label for="column-name">Brand Color</label>
                <input type="text" name="" placeholder="#ObOa10" />
                <h2>Payment Details</h2>
                <label for="column-name">Bank Name</label>
                <select id="options" name="options">
                  <option>Select</option>
                  <option value="AF">eommmm</option>
                  <option value="AF">eommmm</option>
                  <option value="AF">eommmm</option>
                </select>
                <label for="column-name">Branch </label>
                <select id="options" name="options">
                  <option>Select</option>
                  <option value="AF">eommmm</option>
                  <option value="AF">eommmm</option>
                  <option value="AF">eommmm</option>
                </select>
                <label for="column-name"> Bank Account Number</label>
                <input type="text" name="" placeholder="Enter" />
                <label for="column-name"> Mobile Wallet Number</label>
                <input type="email" name="" placeholder="Enter" />
                <input type="submit" name="" value="Next" />
              </form>
            </div>
          </div>

        </div>
      </section>
    </body>


  )
}
