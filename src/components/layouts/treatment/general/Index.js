import React, { Component } from 'react';
import Navbar from './../../dashboard/Navbar';
import Sidebar from './../../dashboard/Sidebar';
import Table from './Table';
import { MDBBtn } from 'mdbreact';
import images from '../../../../constants/images';
import General from '../../../../api_connections/General';
import Patient from '../../../../api_connections/Patient';
import Family from '../../../../api_connections/Family';

export default class Index extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [
        // {
        //   id: '1',
        //   family_no: 'SN-023845',
        //   name: 'Steve Jobs',
        //   mode: 'Walk-in',
        //   type: 'General',
        //   nature: 'New Admission',
        //   date: 'January 2, 2019'
        // },
      ]
    }
  }

  componentWillMount = async () => {
    let generalRes = await new General().fetchAll()
    let patientRes = await new Patient().fetchAll()
    let familyRes = await new Family().fetchAll()
    
    generalRes = generalRes.data.data
    patientRes = patientRes.data.data
    familyRes = familyRes.data.data

    console.log({generalRes, patientRes, familyRes})


    let data = generalRes.map(item => {
      let selectedPatient = null;
      let name = "NO NAME"
      let family_no = "NO FAMILY NO"

      patientRes.forEach(patient => {
        if(item.patient_id == patient.id){
          name = patient.first_name + " " + patient.last_name
          selectedPatient = patient
        }
      });

      familyRes.forEach(fam => {
        if(selectedPatient.family_id == fam.id){
          family_no = fam.serial_number
        }
      })
      return {
          id: item.id,
          family_no,
          name,
          mode: item.mode,
          type: item.type_of_consultation,
          nature: item.nature_of_visit,
          date: item.date_of_consultation
      }
    })
    this.setState({data})
  }

	render() {
		return (
			<div className='main-body'>
				<Navbar />
				<div className='flex-container'>
					<Sidebar diseases />
					<div className='content'>
						<div className='header'>
							<span>
								<img src={images.DISEASE_ICON} alt='general' className='pageIcon' />
								General Checkup Record
								{window.localStorage.getItem("ROLE") != "NURSE" &&<MDBBtn
									size='sm'
									className='float-right'
									color='primary'
									onClick={() => (window.location.href = '/treatment/general/new')}
								>
									Add new record
								</MDBBtn>}
							</span>
						</div>
						<div className='table-container'>
							<p>Total Record(s): {this.state.data.length} records</p>
							<Table
								data={this.state.data}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
