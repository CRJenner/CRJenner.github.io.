import DestinationMap from "./DestinationMap";
import {useLocation} from "react-router-dom"


function LocationMap() {
    const location = useLocation();
    const data = location.state;
    return <DestinationMap data={data} />;
}
export default LocationMap