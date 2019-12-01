import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './layouts/home/Home'
import Login from './layouts/access/Login'

// patients
import Patient from './layouts/patient/Patient'
import NewPatient from './layouts/patient/New'
import EditPatient, { Edit } from './layouts/patient/Edit'
import PatientInfo from './layouts/patient/PatientInfo'

// family
import Family from './layouts/family/Family'
import FamilyInformation from './layouts/family/FamilyInformation'

// Treatment Sumamry Record
import Treatment from './layouts/treatment/Treatment'

// general treatment record
import General from './layouts/treatment/general/Index'
import GeneralForm from './layouts/treatment/general/New'
import GeneralFormEdit from './layouts/treatment/general/Edit'
import GeneralInformation from './layouts/treatment/general/Show'

// TB
import TB from './layouts/treatment/tb/Index'
import TBNew from './layouts/treatment/tb/New'
import TBEdit from './layouts/treatment/tb/Edit'
import TBShow from './layouts/treatment/tb/Show'

// Immunation Record
import Immunation from './layouts/treatment/immunation/Index'
import ImmunationNew from './layouts/treatment/immunation/New'
import ImmunationEdit from './layouts/treatment/immunation/Edit'
import ImmunationShow from './layouts/treatment/immunation/Show'

// Dental Record
import Dental from './layouts/treatment/dental/Index'
import DentalNew from './layouts/treatment/dental/New'
import DentalEdit from './layouts/treatment/dental/Edit'
import DentalShow from './layouts/treatment/dental/Show'

// Dental Record
import Maternal from './layouts/treatment/maternal/Index'
import MaternalNew from './layouts/treatment/maternal/New'
import MaternalEdit from './layouts/treatment/maternal/Edit'
import MaternalShow from './layouts/treatment/maternal/Show'

// Dental Record
import User from './layouts/users/User'
import UserNew from './layouts/users/New'
import UserEdit from './layouts/users/Edit'
import UserShow from './layouts/users/UserInfo'

// Statistical Record
import Statistics from './layouts/statistics/Index'

// Backup and restore
import BackupAndRestore from './layouts/backupRestore/index'

// Search
import Search from './layouts/search/index'

// About
import About from './layouts/about/index'
// print
import Print from './layouts/documents/index'

class Routes extends React.Component{
  render(){
    return (
      <Switch>      
        <Route path='/' exact component={Home} />
        <Route path='/login' exact component={Login} />

        <Route path='/patients' exact component={Patient} />
        <Route path='/patients/new' exact component={NewPatient} />
        <Route path='/patients/:id' exact component={PatientInfo} />
        <Route path='/patients/:id/edit' exact component={EditPatient} />
        
        <Route path='/users' exact component={User} />
        <Route path='/users/new' exact component={UserNew} />
        <Route path='/users/:id' exact component={UserShow} />
        <Route path='/users/:id/edit' exact component={UserEdit} />
        
        <Route path='/family' exact component={Family} />
        <Route path='/family/:id' component={FamilyInformation} />

        <Route path='/treatment' exact component={Treatment}/>
        <Route path='/treatment/general' exact component={General}/>

        <Route path='/treatment/general/new' exact component={GeneralForm}/>
        <Route path='/treatment/general/:id' exact component={GeneralInformation}/>
        <Route path='/treatment/general/:id/edit' exact component={GeneralFormEdit}/>
      
        <Route path='/treatment/immunation' exact component={Immunation}/>
        <Route path='/treatment/immunation/new' exact component={ImmunationNew}/>
        <Route path='/treatment/immunation/:id' exact component={ImmunationShow}/>
        <Route path='/treatment/immunation/:id/edit' exact component={ImmunationEdit}/>

        <Route path='/treatment/tb' exact component={TB}/>
        <Route path='/treatment/tb/new' exact component={TBNew}/>
        <Route path='/treatment/tb/:id' exact component={TBShow}/>
        <Route path='/treatment/tb/:id/edit' exact component={TBEdit}/>
      
        <Route path='/treatment/dental' exact component={Dental}/>
        <Route path='/treatment/dental/new' exact component={DentalNew}/>
        <Route path='/treatment/dental/:id' exact component={DentalShow}/>
        <Route path='/treatment/dental/:id/edit' exact component={DentalEdit}/>

        <Route path='/treatment/maternal' exact component={Maternal}/>
        <Route path='/treatment/maternal/new' exact component={MaternalNew}/>
        <Route path='/treatment/maternal/:id' exact component={MaternalShow}/>
        <Route path='/treatment/maternal/:id/edit' exact component={MaternalEdit}/>
      
        <Route path='/statistics' exact component={Statistics}/>

        <Route path='/backup_and_restore' exact component={BackupAndRestore}/>

        <Route path='/search' exact component={Search}/>
      
        <Route path='/about' exact component={About}/>
        <Route path='/documents' exact component={Print}/>
      
        
        
      </Switch>
    );
  }
}

export default Routes;
