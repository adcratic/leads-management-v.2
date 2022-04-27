import axios from "axios";

const AddAxios = async () => {
    const response = await axios.get("");
    var result=response.data;
    console.log(result);
    return result;
}

export default AddAxios