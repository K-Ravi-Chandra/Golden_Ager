import SeniorCitizen from './layouts/SeniorCitizen'
import Doctor from './layouts/Doctor'
import FamilyMember from './layouts/FamilyMember'

const registrationRoutes = [
    {
        path : "/registeration/seniorcitizen",
        exact : true,
        component : SeniorCitizen
    },
    {
        path : "/registeration/doctor",
        exact : true,
        component : Doctor
    },
    {
        path : "/registeration/familymember",
        exact : true,
        component : FamilyMember
    }
];

export default registrationRoutes;