import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import PersonalInformation from './../../global/PersonalInformation';
export class Form extends Component {
  render() {
    return (
        <MDBContainer className="patient-form-container">
        <form className="default-form">
          <h3 className="h3-header">Tuberculosis Treatment Form</h3> 
          <PersonalInformation/><br/>

          <h4 className="font-weight-bold">TB TREATMENT / IPT CARD</h4>
          <MDBRow className="">
            <MDBCol sm="6">
              <MDBInput type="text" label="TB case number/IPT No."  />
            </MDBCol>
            <MDBCol sm="6">
              <MDBInput type="text" label="Region/Province"  />
            </MDBCol>
          </MDBRow>

          <MDBRow className="">
            <MDBCol sm="6">
              <MDBInput type="Date" label="Date the card was opened" className="input-date" value={new Date().toJSON().slice(0,10)} />
            </MDBCol>   
            <MDBCol sm="6">
              <MDBInput type="text" label="Name of DOTS Facility"  />
            </MDBCol>     
          </MDBRow>

          <MDBRow className=""> 
            <MDBCol sm="6">
              <MDBInput type="text" label="Contact person"  />
            </MDBCol>     
            <MDBCol sm="6">
              <MDBInput type="text" label="Contact no"  />
            </MDBCol>     
          </MDBRow>

          <MDBRow className=""> 
            <MDBCol sm="6">
              <MDBInput type="text" label="Source of patient"  />
            </MDBCol>     
            <MDBCol sm="6">
              <label htmlFor=""><small className="text-primary font-weight-light">BCG Scar</small></label>
              <select className="custom-select default-select">
                <option value="1" >Yes</option>
                <option value="1" >No</option>
                <option value="1" >Doubtful</option>
              </select> <br/><br/>
            </MDBCol>     
          </MDBRow><br/>
          
          <h4 className="font-weight-bold">Diagnostic Test</h4><br/>
          <p className="mb-0">1. Tuberculin Skin Testing (TST)</p>
          <MDBRow className=""> 
            <MDBCol sm="6">
              <MDBInput type="text" label="Result (mm)"/>
            </MDBCol>     
            <MDBCol sm="6">
              <MDBInput type="date" label="Date read" />
            </MDBCol>     
          </MDBRow>

          <p className="mb-0">2. CXR Findings</p>
          <MDBRow className=""> 
            <MDBCol sm="6">
              <MDBInput type="text" label="Result"/>
            </MDBCol>     
            <MDBCol sm="6">
              <MDBInput type="date" label="Date of exam" />
            </MDBCol>     
          </MDBRow>

          <p className="mb-0">3. Other Exam</p>
          <MDBRow className=""> 
            <MDBCol sm="6">
              <MDBInput type="text" label="Result"/>
            </MDBCol>     
            <MDBCol sm="6">
              <MDBInput type="date" label="Date of exam" />
            </MDBCol>     
          </MDBRow>

          <p className="mb-0">4. XPERT MTB/RIF</p>
          <MDBRow className=""> 
            <MDBCol sm="6">
              <MDBInput type="text" label="Result"/>
            </MDBCol>     
            <MDBCol sm="6">
              <MDBInput type="date" label="Date of exam" />
            </MDBCol>     
          </MDBRow>
{/* 
          <p className="mb-0">5. DSSM Results</p><br/>
          <MDBRow className=""> 
            <MDBCol sm="12">
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Month</th>
                      <th>Due Date</th>
                      <th>Date Examined</th>
                      <th>Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border">0</td>
                      <td className="border bg-white input"> <MDBInput type="date" label="" className="m-0"/></td>
                      <td className="border bg-white input"> <MDBInput type="date" label="" className="m-0"/></td>
                      <td className="border bg-white input"> <MDBInput type="text" label="" className="m-0"/></td>
                    </tr>
                    <tr>
                      <td className="border">1</td>
                      <td className="border bg-white input"> <MDBInput type="date" label="" className="m-0"/></td>
                      <td className="border bg-white input"> <MDBInput type="date" label="" className="m-0"/></td>
                      <td className="border bg-white input"> <MDBInput type="text" label="" className="m-0"/></td>
                    </tr>
                    <tr>
                      <td className="border">2</td>
                      <td className="border bg-white input"> <MDBInput type="date" label="" className="m-0"/></td>
                      <td className="border bg-white input"> <MDBInput type="date" label="" className="m-0"/></td>
                      <td className="border bg-white input"> <MDBInput type="text" label="" className="m-0"/></td>
                    </tr>
                    <tr>
                      <td className="border">3</td>
                      <td className="border bg-white input"> <MDBInput type="date" label="" className="m-0"/></td>
                      <td className="border bg-white input"> <MDBInput type="date" label="" className="m-0"/></td>
                      <td className="border bg-white input"> <MDBInput type="text" label="" className="m-0"/></td>
                    </tr>
                    <tr>
                      <td className="border">4</td>
                      <td className="border bg-white input"> <MDBInput type="date" label="" className="m-0"/></td>
                      <td className="border bg-white input"> <MDBInput type="date" label="" className="m-0"/></td>
                      <td className="border bg-white input"> <MDBInput type="text" label="" className="m-0"/></td>
                    </tr>
                    <tr>
                      <td className="border">5</td>
                      <td className="border bg-white input"> <MDBInput type="date" label="" className="m-0"/></td>
                      <td className="border bg-white input"> <MDBInput type="date" label="" className="m-0"/></td>
                      <td className="border bg-white input"> <MDBInput type="text" label="" className="m-0"/></td>
                    </tr>
                    <tr>
                      <td className="border">6</td>
                      <td className="border bg-white input"> <MDBInput type="date" label="" className="m-0"/></td>
                      <td className="border bg-white input"> <MDBInput type="date" label="" className="m-0"/></td>
                      <td className="border bg-white input"> <MDBInput type="text" label="" className="m-0"/></td>
                    </tr>
                    <tr>
                      <td className="border">>7</td>
                      <td className="border bg-white input"> <MDBInput type="date" label="" className="m-0"/></td>
                      <td className="border bg-white input"> <MDBInput type="date" label="" className="m-0"/></td>
                      <td className="border bg-white input"> <MDBInput type="text" label="" className="m-0"/></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </MDBCol>   
          </MDBRow><br/> */}

          <p className="mb-0">6. PICT</p>
          <MDBRow className=""> 
            <MDBCol sm="12">
              <label htmlFor=""><small className="text-primary font-weight-light">Done?</small></label>
              <select className="custom-select default-select">
                <option value="1" >Yes</option>
                <option value="1" >No</option>
              </select> <br/><br/>
            </MDBCol>     
          </MDBRow><br/>

          <h4 className="font-weight-bold">History of Anti-TB Drug Intake</h4><br/>
          <MDBRow className=""> 
            <MDBCol sm="6">
              <label htmlFor=""><small className="text-primary font-weight-light">Intake?</small></label>
              <select className="custom-select default-select">
                <option value="1" >Yes</option>
                <option value="1" >No</option>
              </select> <br/><br/>
            </MDBCol>  
            <MDBCol sm="6">
              <MDBInput type="date" label="Date" className="m-0"/>
            </MDBCol>     
          </MDBRow>
          <MDBRow className=""> 
            <MDBCol sm="6">
              <label htmlFor=""><small className="text-primary font-weight-light">Duration</small></label>
              <select className="custom-select default-select">
                <option value="1" >Yes</option>
                <option value="1" >No</option>
              </select> <br/><br/>
            </MDBCol>  
            <MDBCol sm="6">
              <label htmlFor=""><small className="text-primary font-weight-light">Drug type</small></label>
              <select className="custom-select default-select">
                <option value="1" >H</option>
                <option value="1" >R</option>
                <option value="1" >Z</option>
                <option value="1" >E</option>
                <option value="1" >S</option>
              </select> <br/><br/>
            </MDBCol>     
          </MDBRow><br/>


          <h4 className="font-weight-bold">Bacteriological</h4><br/>
          <MDBRow className=""> 
            <MDBCol sm="6">
              <label htmlFor=""><small className="text-primary font-weight-light">Status</small></label>
              <select className="custom-select default-select">
                <option value="1" >Bacteriological Confirmed</option>
                <option value="1" >Clinically Diagnosed</option>
              </select> <br/><br/>
            </MDBCol>  
            <MDBCol sm="6">
              <label htmlFor=""><small className="text-primary font-weight-light">Classification of TB Disease</small></label>
              <select className="custom-select default-select">
                <option value="1" >Pulmonary</option>
                <option value="1" >Extra Pulmonary</option>
              </select> <br/><br/>
            </MDBCol>    
          </MDBRow>

          <MDBRow className=""> 
            <MDBCol sm="6">
              <label htmlFor=""><small className="text-primary font-weight-light">Registration Group</small></label>
              <select className="custom-select default-select">
                <option value="1" >New</option>
                <option value="1" >Relapse</option>
                <option value="1" >TALF</option>
                <option value="1" >Treatment After Failure</option>
                <option value="1" >PTOU</option>
                <option value="1" >Other</option>
                <option value="1" >Transfer-in</option>
              </select> <br/><br/>
            </MDBCol>      
            <MDBCol sm="6">
              <MDBInput type="date" label="Treatment Started Date" />
            </MDBCol>  
          </MDBRow><br/>

          <h4 className="font-weight-bold">Diagnosis</h4><br/>
          <MDBRow className=""> 
            <MDBCol sm="6">
              <label htmlFor=""><small className="text-primary font-weight-light">Diagnosis</small></label>
              <select className="custom-select default-select">
                <option value="1" >Clear</option>
                <option value="1" >TB Disease</option>
                <option value="1" >TB Infection, for IPT (For children below 5yo)</option>
                <option value="1" >TB Exposure, for IPT (For children below 5yo)</option>
              </select> <br/><br/>
            </MDBCol>    
            <MDBCol sm="6">
              <label htmlFor=""><small className="text-primary font-weight-light">Treatment Outcome</small></label>
              <select className="custom-select default-select">
                <option value="1" ></option>
                <option value="1" >Cured</option>
                <option value="1" >Treatment completed</option>
                <option value="1" >Treatment failed</option>
                <option value="1" >lost to follow-up</option>
                <option value="1" >not evaluated</option>
                <option value="1" >Died</option>
              </select> <br/><br/>
            </MDBCol>       
          </MDBRow>
          <MDBRow className=""> 
            <MDBCol sm="6">
              <MDBInput type="date" label="Date" />
            </MDBCol>       
          </MDBRow><br/>

          <h3 className="h3-header">TB Diagnostic Committee (TBDC) Referral Form</h3> 

          <MDBRow className=""> 
            <MDBCol sm="6">
              <MDBInput type="text" label="TBDC Name" />
            </MDBCol>     
            <MDBCol sm="6">
              <MDBInput type="text" label="CHD" />
            </MDBCol>       
          </MDBRow>

          <MDBRow className=""> 
            <MDBCol sm="6">
              <MDBInput type="text" label="Province/City" />
            </MDBCol>     
            <MDBCol sm="6">
              <MDBInput type="text" label="Referring Unit" />
            </MDBCol>       
          </MDBRow>

          <MDBRow className=""> 
            <MDBCol sm="6">
              <MDBInput type="date" label="Date of Referral" />
            </MDBCol>     
            <MDBCol sm="6">
              <MDBInput type="text" label="Contact person" />
            </MDBCol>       
          </MDBRow>

          <MDBRow className=""> 
            <MDBCol sm="6">
              <MDBInput type="text" label="Contact Number" />
            </MDBCol>     
            <MDBCol sm="6">
              <MDBInput type="text" label="Relation to Patient" />
            </MDBCol>       
          </MDBRow><br/>
          
          <h4 className="font-weight-bold">DSSM Result</h4>
          <MDBRow className=""> 
            <MDBCol sm="6">
              <MDBInput type="text" label="Result" />
            </MDBCol>     
            <MDBCol sm="6">
              <MDBInput type="date" label="Date" />
            </MDBCol>       
          </MDBRow><br/>

          <h4 className="font-weight-bold">Signs / Symptoms</h4>
          <MDBRow className=""> 
            <MDBCol sm="4" className="pt-4">
              <label>Signs and Symptoms</label>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                <label class="form-check-label" for="defaultCheck1">
                  Cough
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="defaultCheck2"/>
                <label class="form-check-label" for="defaultCheck2">
                  Sputum Production
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="defaultCheck3"/>
                <label class="form-check-label" for="defaultCheck3">
                  Hemoptysis
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="defaultCheck4"/>
                <label class="form-check-label" for="defaultCheck4">
                  Fever
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="defaultCheck5"/>
                <label class="form-check-label" for="defaultCheck5">
                  Weight loss
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="defaultCheck6"/>
                <label class="form-check-label" for="defaultCheck6">
                  Tiredness
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="defaultCheck7"/>
                <label class="form-check-label" for="defaultCheck7">
                  Chess / Back pain
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="defaultCheck8"/>
                <label class="form-check-label" for="defaultCheck8">
                  Dyspnea
                </label>
              </div>
            </MDBCol>     
            <MDBCol sm="6" className="pt-0">
              <MDBInput type="textarea" className="mt-0" label="Other signs/symptoms, duration, any important history" />
              <MDBInput type="textarea" label="Important PE Findings" />
            </MDBCol>       
          </MDBRow><br/>

          <h4 className="font-weight-bold">Treatment Taken</h4>
          <MDBRow className="">   
            <MDBCol sm="12" className="pt-0">
              <MDBInput type="textarea" className="mt-0" label="List of any treatment taken for the present illness, state the duration of treament" />
              <MDBInput type="textarea" label="History of relevant past illness (PTB and/or other diseases)" />
            </MDBCol>       
          </MDBRow>
          <MDBRow className="">   
            <MDBCol sm="6" className="pt-0">
              <label htmlFor=""><small className="text-primary font-weight-light">History of past anti - TB treatment</small></label>
              <select className="custom-select default-select">
                <option value="1" >Yes</option>
                <option value="1" >No</option>
              </select>  
            </MDBCol>   
            <MDBCol sm="6" className="pt-0">
              <label htmlFor=""><small className="text-primary font-weight-light">Referring Unit's Clinical Impression</small></label>
              <select className="custom-select default-select">
                <option value="1" >Active TB</option>
                <option value="1" >Inactive TB</option>
                <option value="1" >New</option>
                <option value="1" >Other (non -TB Lung Disease)</option>
                <option value="1" >Re - treatment</option>
              </select>     
            </MDBCol>      
          </MDBRow>

          <MDBRow className="">   
            <MDBCol sm="12">
              <MDBInput type="textarea" className="mt-0" label="Any treatment prescribed by referring unit" />
            </MDBCol>     
          </MDBRow>

          <MDBRow className="">    
            <MDBCol sm="6" className="pt-0">
              <label htmlFor=""><small className="text-primary font-weight-light">TBDC Diagnosis</small></label>
              <select className="custom-select default-select">
                <option value="1" >Active TB</option>
                <option value="1" >Inactive TB</option>
                <option value="1" >New</option>
                <option value="1" >Other (non -TB Lung Disease)</option>
                <option value="1" >Re - treatment</option>
              </select>     
            </MDBCol>      
          </MDBRow>



          <br/><MDBBtn size="lg" className="mt-3" color="primary" onClick={() => window.location.href = "/treatment/general"}>SAVE</MDBBtn>
        </form>
      </MDBContainer>
    )
  }
}

export default Form
